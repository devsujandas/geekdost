"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getQuestions } from "@/lib/questions"
import { saveResult } from "@/lib/storage"

export default function ExamPage() {
  const { subject, difficulty } = useParams()
  const router = useRouter()

  const [questions, setQuestions] = useState<any[]>([])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number | null>>({})

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
    const result = {
      subject,
      difficulty,
      answers,
      total: questions.length,
      date: new Date().toISOString(),
    }
    saveResult(result)
    router.push(`/test/${subject}/${difficulty}/result`)
  }

  if (!questions.length) return <div className="p-10">Loading...</div>
  const q = questions[current]

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-xl font-bold mb-4">
        Question {current + 1} / {questions.length}
      </h2>
      <p className="mb-4">{q.question}</p>
      <div className="space-y-2 mb-6">
        {q.options.map((opt: string, idx: number) => (
          <button
            key={idx}
            onClick={() => selectAnswer(q.id, idx)}
            className={`block w-full text-left px-4 py-2 rounded border ${
              answers[q.id] === idx
                ? "border-primary bg-primary/20"
                : "border-gray-700"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          disabled={current === 0}
          onClick={() => setCurrent((c) => c - 1)}
          className="px-4 py-2 glass"
        >
          Previous
        </button>
        {current < questions.length - 1 ? (
          <button
            onClick={() => setCurrent((c) => c + 1)}
            className="px-4 py-2 glass"
          >
            Next
          </button>
        ) : (
          <button
            onClick={submit}
            className="px-4 py-2 bg-primary rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  )
}
