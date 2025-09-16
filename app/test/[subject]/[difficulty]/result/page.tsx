"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getQuestions } from "@/lib/questions"
import { getResults } from "@/lib/storage"
import { motion } from "framer-motion"

export default function ResultPage() {
  const { subject, difficulty } = useParams()
  const router = useRouter()
  const [latest, setLatest] = useState<any>(null)
  const [questions, setQuestions] = useState<any[]>([])

  useEffect(() => {
    const prev = getResults()
    if (prev.length > 0) setLatest(prev[0])
    setQuestions(getQuestions(subject as string, difficulty as string, 50))
  }, [subject, difficulty])

  if (!latest) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>No Result Found</p>
      </div>
    )
  }

  const answered = Object.values(latest.answers).filter((a) => a !== null).length
  const notAnswered = latest.total - answered
  const score = questions.reduce(
    (acc, q) => (latest.answers[q.id] === q.answerIndex ? acc + 1 : acc),
    0
  )
  const percentage = Math.round((score / latest.total) * 100)

  return (
    <div className="container mx-auto py-10 px-4">
      {/* --- Score Card --- */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-8 max-w-xl mx-auto text-center"
      >
        <h1 className="text-3xl font-extrabold mb-4">Your Result</h1>
        <div className="flex justify-center mb-6">
          <div className="relative w-28 h-28">
            <motion.svg
              className="w-28 h-28 transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="10"
                className="text-accent/30"
                fill="transparent"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="10"
                className="text-primary"
                fill="transparent"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * percentage) / 100}
                transition={{ duration: 1 }}
              />
            </motion.svg>
            <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
              {percentage}%
            </span>
          </div>
        </div>
        <p className="text-lg font-semibold">
          Score: {score} / {latest.total}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="glass rounded-lg p-4">
            <p className="text-lg font-bold">{answered}</p>
            <p className="text-sm text-muted-foreground">Answered</p>
          </div>
          <div className="glass rounded-lg p-4">
            <p className="text-lg font-bold">{notAnswered}</p>
            <p className="text-sm text-muted-foreground">Not Answered</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => router.push(`/test/${subject}/${difficulty}`)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            Retake Test
          </button>
          <button
            onClick={() => router.push(`/test/${subject}`)}
            className="px-4 py-2 glass rounded-lg"
          >
            Choose Difficulty
          </button>
          <button
            onClick={() => router.push(`/test`)}
            className="px-4 py-2 glass rounded-lg"
          >
            Other Subjects
          </button>
        </div>
      </motion.div>

      {/* --- Review Section --- */}
      <h2 className="text-2xl font-bold mt-12 mb-6 text-center">Review Answers</h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {questions.map((q, i) => {
          const userAns = latest.answers[q.id]
          const isCorrect = userAns === q.answerIndex
          return (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
              className={`p-4 rounded-xl border ${
                userAns === null
                  ? "border-yellow-400 bg-yellow-500/10"
                  : isCorrect
                  ? "border-green-500 bg-green-500/10"
                  : "border-red-500 bg-red-500/10"
              }`}
            >
              <p className="font-medium mb-2">
                Q{i + 1}. {q.question}
              </p>
              <p className="text-sm">
                Your Answer:{" "}
                {userAns !== null ? q.options[userAns] : "Not Answered"}
              </p>
              <p className="text-sm">Correct: {q.options[q.answerIndex]}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
