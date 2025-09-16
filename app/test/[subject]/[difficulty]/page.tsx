"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getQuestions } from "@/lib/questions"
import { saveResult } from "@/lib/storage"
import { motion } from "framer-motion"

export default function ExamPage() {
  const { subject, difficulty } = useParams()
  const router = useRouter()

  const [questions, setQuestions] = useState<any[]>([])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number | null>>({})
  const [submitting, setSubmitting] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const q = getQuestions(subject as string, difficulty as string, 50)
    setQuestions(q)
    const init: Record<string, null> = {}
    q.forEach((x) => (init[x.id] = null))
    setAnswers(init)
  }, [subject, difficulty])

  function selectAnswer(qid: string, idx: number) {
    setAnswers((prev) => ({ ...prev, [qid]: idx }))
  }

  function submit() {
    setSubmitting(true)

    const result = {
      subject,
      difficulty,
      answers,
      total: questions.length,
      date: new Date().toISOString(),
    }
    saveResult(result)

    // Simulate calculating with animated progress
    let percent = 0
    const interval = setInterval(() => {
      percent += Math.floor(Math.random() * 15) + 5 // random increment 5–20
      if (percent >= 100) {
        percent = 100
        clearInterval(interval)
        setTimeout(() => {
          router.push(`/test/${subject}/${difficulty}/result`)
        }, 600) // short pause at 100%
      }
      setProgress(percent)
    }, 500)
  }

  if (!questions.length) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (submitting) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-6"
        >
          Calculating Your Result...
        </motion.h2>

        {/* Progress Bar */}
        <div className="w-full max-w-md bg-accent/20 rounded-full h-4 overflow-hidden mb-4">
          <motion.div
            className="bg-primary h-4"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.4 }}
          />
        </div>

        <p className="text-lg font-semibold text-primary">{progress}%</p>
        <p className="text-muted-foreground mt-2">Analyzing answers, please wait...</p>
      </div>
    )
  }

  const q = questions[current]

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <motion.div
        className="glass p-8 rounded-2xl max-w-2xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-bold mb-6 text-center">
          Question {current + 1} / {questions.length}
        </h2>
        <p className="mb-6 text-lg text-center">{q.question}</p>

        <div className="space-y-3 mb-8">
          {q.options.map((opt: string, idx: number) => (
            <button
              key={idx}
              onClick={() => selectAnswer(q.id, idx)}
              className={`block w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 ${
                answers[q.id] === idx
                  ? "border-primary bg-primary/20"
                  : "border-border hover:bg-accent/10"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="flex justify-between">
          {current > 0 ? (
            <button
              onClick={() => setCurrent((c) => c - 1)}
              className="px-5 py-2 glass rounded-lg"
            >
              Previous
            </button>
          ) : (
            <div /> // Empty placeholder
          )}

          {current < questions.length - 1 ? (
            <button
              onClick={() => setCurrent((c) => c + 1)}
              className="px-5 py-2 glass rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              onClick={submit}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90"
            >
              Submit
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}
