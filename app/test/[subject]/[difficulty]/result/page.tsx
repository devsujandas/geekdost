"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getQuestions } from "@/lib/questions"
import { getResults } from "@/lib/storage"

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

  if (!latest) return <div className="p-10">No Result Found</div>

  const answered = Object.values(latest.answers).filter((a) => a !== null).length
  const notAnswered = latest.total - answered
  const score = questions.reduce(
    (acc, q) => (latest.answers[q.id] === q.answerIndex ? acc + 1 : acc),
    0
  )

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Result</h1>
      <p>Score: {score} / {latest.total}</p>
      <p>Answered: {answered}</p>
      <p>Not Answered: {notAnswered}</p>

      <h2 className="text-xl font-semibold mt-6">Review</h2>
      <div className="space-y-4 mt-4">
        {questions.map((q, i) => {
          const userAns = latest.answers[q.id]
          return (
            <div key={q.id} className="p-4 glass rounded">
              <p className="font-medium">
                Q{i + 1}. {q.question}
              </p>
              <p className="text-sm">
                Your Answer:{" "}
                {userAns !== null ? q.options[userAns] : "Not Answered"}
              </p>
              <p className="text-sm">
                Correct: {q.options[q.answerIndex]}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => router.push(`/test/${subject}`)}
          className="px-4 py-2 glass"
        >
          Take Another Test
        </button>
      </div>
    </div>
  )
}
