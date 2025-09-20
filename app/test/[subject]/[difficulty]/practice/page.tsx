"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getQuestions } from "@/lib/questions"
import { saveResult } from "@/lib/storage"
import { motion, AnimatePresence } from "framer-motion"
import ExamNavigation from "@/components/ExamNavigation"

export default function PracticePage() {
  const { subject, difficulty } = useParams()
  const router = useRouter()

  const [questions, setQuestions] = useState<any[]>([])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number | null>>({})
  const [submitting, setSubmitting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showConfirm, setShowConfirm] = useState(false)
  const [startTime, setStartTime] = useState<number>(Date.now()) //  Track start time
  const [timePerQ, setTimePerQ] = useState<Record<string, number>>({}) //  Track per-question time
  const [lastSwitch, setLastSwitch] = useState<number>(Date.now()) //  Track last question switch

  // Load questions
  useEffect(() => {
    const q = getQuestions(subject as string, difficulty as string, 50)
    setQuestions(q)
    const init: Record<string, null> = {}
    q.forEach((x) => (init[x.id] = null))
    setAnswers(init)
    setStartTime(Date.now()) // reset start time when loaded
    setLastSwitch(Date.now())
  }, [subject, difficulty])

  function selectAnswer(qid: string, idx: number) {
    setAnswers((prev) => ({ ...prev, [qid]: idx }))
  }

  //  Track time spent on each question
  function switchQuestion(newIndex: number) {
    const now = Date.now()
    const qid = questions[current].id
    const spent = Math.floor((now - lastSwitch) / 1000)

    setTimePerQ((prev) => ({
      ...prev,
      [qid]: (prev[qid] || 0) + spent,
    }))

    setLastSwitch(now)
    setCurrent(newIndex)
  }

  function submit() {
    //  Add last question time
    const now = Date.now()
    const lastQ = questions[current].id
    const spent = Math.floor((now - lastSwitch) / 1000)

    const finalTimePerQ = {
      ...timePerQ,
      [lastQ]: (timePerQ[lastQ] || 0) + spent,
    }

    setSubmitting(true)

    const totalTime = Math.floor((now - startTime) / 1000) //  Total time

    const result = {
      subject,
      difficulty,
      mode: "practice", //  fixed practice mode
      answers,
      total: questions.length,
      date: new Date().toISOString(),
      questions, //  Save questions always
      timeTaken: totalTime, //  Save total time
      timePerQ: finalTimePerQ, //  Save per-question times
    }

    saveResult(result)

    // Fake calculating animation
    let percent = 0
    const interval = setInterval(() => {
      percent += Math.floor(Math.random() * 15) + 5
      if (percent >= 100) {
        percent = 100
        clearInterval(interval)
        setTimeout(() => {
          router.push(`/test/${subject}/${difficulty}/result`)
        }, 600)
      }
      setProgress(percent)
    }, 500)
  }

  if (!questions.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    )
  }

  if (submitting) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6"
        >
          Checking Your Practice...
        </motion.h2>
        <div className="w-full max-w-md bg-accent/20 rounded-full h-4 overflow-hidden mb-4">
          <motion.div
            className="bg-primary h-4"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-lg font-semibold text-primary">{progress}%</p>
        <p className="text-muted-foreground mt-2">Almost done...</p>
      </div>
    )
  }

  const q = questions[current]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Question Card */}
      <motion.div
        className="glass p-8 rounded-2xl max-w-2xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-bold mb-6 text-center">
          Question {current + 1} / {questions.length}
        </h2>
        <p className="mb-6 text-lg text-center">{q.question}</p>

        <div className="space-y-3 mb-8">
          {q.options.map((opt: string, idx: number) => {
            const isSelected = answers[q.id] === idx
            const isCorrect = idx === q.answerIndex

            return (
              <button
                key={idx}
                onClick={() => selectAnswer(q.id, idx)}
                className={`block w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 ${
                  isSelected
                    ? "border-primary bg-primary/20"
                    : "border-border hover:bg-accent/10"
                } ${
                  isSelected
                    ? isCorrect
                      ? "border-green-500 bg-green-500/10"
                      : "border-red-500 bg-red-500/10"
                    : ""
                }`}
              >
                {opt}
              </button>
            )
          })}
        </div>

        <div className="flex justify-between">
          {current > 0 ? (
            <button
              onClick={() => switchQuestion(current - 1)}
              className="px-5 py-2 glass rounded-lg"
            >
              Previous
            </button>
          ) : (
            <div />
          )}
          {current < questions.length - 1 ? (
            <button
              onClick={() => switchQuestion(current + 1)}
              className="px-5 py-2 glass rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => setShowConfirm(true)}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90"
            >
              Finish Practice
            </button>
          )}
        </div>
      </motion.div>

      {/* Navigation Grid */}
      <ExamNavigation
        total={questions.length}
        current={current}
        answers={answers}
        onNavigate={(idx) => switchQuestion(idx)}
      />

      {/* Confirm Submit Modal */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="glass p-6 rounded-xl max-w-md w-full text-center"
            >
              <h3 className="text-xl font-bold mb-4">Submit Practice?</h3>
              <p className="text-muted-foreground mb-6">
                You still have{" "}
                {Object.values(answers).filter((a) => a === null).length}{" "}
                unanswered questions.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-4 py-2 glass rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => submit()}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
                >
                  Submit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
