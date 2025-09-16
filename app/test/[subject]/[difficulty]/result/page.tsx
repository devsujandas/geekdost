"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getQuestions } from "@/lib/questions"
import { getResults } from "@/lib/storage"
import { motion } from "framer-motion"
import { FaTrophy, FaThumbsUp, FaRegSadTear, FaClock, FaDownload, FaShareAlt, FaAward } from "react-icons/fa"
import { exportResultJSON, exportResultCSV, shareResult } from "@/lib/export"

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

  // --- Score Calculation ---
  const answered = Object.values(latest.answers).filter((a) => a !== null).length
  const notAnswered = latest.total - answered
  const score = questions.reduce(
    (acc, q) => (latest.answers[q.id] === q.answerIndex ? acc + 1 : acc),
    0
  )
  const wrong = answered - score
  const percentage = Math.round((score / latest.total) * 100)

  // --- Grade Calculation ---
  let grade = "F"
  if (percentage >= 90) grade = "O"
  else if (percentage >= 75) grade = "A"
  else if (percentage >= 60) grade = "E"

  // --- Performance Summary ---
  let summary = { icon: <FaRegSadTear className="text-red-500 h-6 w-6" />, text: "Needs improvement. Keep practicing!" }
  if (percentage >= 80)
    summary = { icon: <FaTrophy className="text-yellow-400 h-6 w-6" />, text: "Excellent performance! Keep it up." }
  else if (percentage >= 50)
    summary = { icon: <FaThumbsUp className="text-green-500 h-6 w-6" />, text: "Good job! You’re improving." }

  // --- Time Taken ---
  const timeTaken = latest.timeTaken
    ? `${Math.floor(latest.timeTaken / 60)}m ${latest.timeTaken % 60}s`
    : "N/A"
  const avgTime = latest.timeTaken ? (latest.timeTaken / latest.total).toFixed(1) : null

  // --- Weakness Analysis by Topic ---
  const topicStats: Record<string, { correct: number; wrong: number }> = {}
  questions.forEach((q) => {
    const userAns = latest.answers[q.id]
    if (!topicStats[q.topic]) topicStats[q.topic] = { correct: 0, wrong: 0 }
    if (userAns === q.answerIndex) topicStats[q.topic].correct++
    else if (userAns !== null) topicStats[q.topic].wrong++
  })

  // --- Export Data ---
  const resultData = {
    subject,
    difficulty,
    mode: latest.mode,
    grade,
    percentage,
    answered,
    notAnswered,
    wrong,
    timeTaken,
    timePerQ: latest.timePerQ,
    answers: latest.answers,
    questions,
    date: latest.date,
  }

  return (
    <div className="container mx-auto py-10 px-4">
      {/* --- Score Card --- */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass rounded-2xl p-8 max-w-xl mx-auto text-center"
      >
        <h1 className="text-3xl font-extrabold mb-4">Your Result</h1>

        {/* Circular Progress */}
        <div className="flex justify-center mb-6">
          <div className="relative w-28 h-28">
            <motion.svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" className="text-accent/30" fill="transparent" />
              <motion.circle
                cx="50" cy="50" r="45"
                stroke="currentColor" strokeWidth="10" className="text-primary"
                fill="transparent" strokeDasharray="283"
                strokeDashoffset={283 - (283 * percentage) / 100}
                transition={{ duration: 1 }}
              />
            </motion.svg>
            <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
              {percentage}%
            </span>
          </div>
        </div>

        {/* Score */}
        <p className="text-lg font-semibold">Score: {score} / {latest.total}</p>
        <p className="text-md font-medium mt-1">Grade: {grade}</p>

        {/* Performance Summary */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {summary.icon}
          <span className="text-sm">{summary.text}</span>
        </div>

        {/* Time Taken */}
        <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
          <FaClock className="h-4 w-4" /> Time Taken: {timeTaken}
          {avgTime && <span>| Avg: {avgTime}s per Q</span>}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="glass rounded-lg p-4">
            <p className="text-lg font-bold text-green-500">{score}</p>
            <p className="text-sm">Correct</p>
          </div>
          <div className="glass rounded-lg p-4">
            <p className="text-lg font-bold text-red-500">{wrong}</p>
            <p className="text-sm">Wrong</p>
          </div>
          <div className="glass rounded-lg p-4">
            <p className="text-lg font-bold text-yellow-500">{notAnswered}</p>
            <p className="text-sm">Not Answered</p>
          </div>
        </div>

        {/* Achievement Claim Section */}
        {latest.mode === "exam" && percentage >= 60 && (
          <div className="mt-10 text-center">
            <h3 className="text-lg font-semibold mb-2">Congratulations! 🎉</h3>
            <p className="text-sm text-muted-foreground mb-4">
              You are eligible to claim your achievement certificate.
            </p>
            <button
              onClick={() => router.push(`/test/${subject}/${difficulty}/certificate`)}
              className="px-6 py-2 bg-primary text-white rounded-lg flex items-center gap-2 mx-auto hover:opacity-90"
            >
              <FaAward /> Claim Achievement
            </button>
          </div>
        )}

        {/* Export & Share */}
        <div className="mt-8 flex gap-4 justify-center">
          <button onClick={() => exportResultJSON(resultData)} className="px-4 py-2 glass rounded-lg flex items-center gap-2">
            <FaDownload /> JSON
          </button>
          <button onClick={() => exportResultCSV(resultData)} className="px-4 py-2 glass rounded-lg flex items-center gap-2">
            <FaDownload /> CSV
          </button>
          <button onClick={() => shareResult(resultData)} className="px-4 py-2 glass rounded-lg flex items-center gap-2">
            <FaShareAlt /> Share
          </button>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <button onClick={() => router.push(`/test/${subject}/${difficulty}`)} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
            Retake Test
          </button>
          <button onClick={() => router.push(`/test/${subject}`)} className="px-4 py-2 glass rounded-lg">
            Choose Difficulty
          </button>
          <button onClick={() => router.push(`/test`)} className="px-4 py-2 glass rounded-lg">
            Other Subjects
          </button>
        </div>

        {/* Suggest Practice if Exam failed */}
        {latest.mode === "exam" && percentage < 60 && (
          <div className="mt-8 p-4 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded-lg">
            <p className="font-semibold">You scored below 60% in Exam Mode.</p>
            <p className="text-sm mt-1">We recommend trying a <span className="font-bold">Practice Test</span> to improve your skills.</p>
            <button
              onClick={() => router.push(`/test/${subject}?mode=practice`)}
              className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:opacity-90"
            >
              Start Practice Test
            </button>
          </div>
        )}
      </motion.div>

      {/* Weakness Analysis */}
      <h2 className="text-2xl font-bold mt-12 mb-6 text-center">Weakness Analysis</h2>
      <div className="max-w-2xl mx-auto grid gap-4">
        {Object.entries(topicStats).map(([topic, stats]: any) => (
          <div key={topic} className="glass p-4 rounded-xl flex justify-between">
            <span className="font-medium capitalize">{topic}</span>
            <span className="text-sm text-muted-foreground">
              Correct: {stats.correct} | Wrong: {stats.wrong}
            </span>
          </div>
        ))}
      </div>

      {/* Review Section */}
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
              <p className="font-medium mb-2">Q{i + 1}. {q.question}</p>
              <p className="text-sm">Your Answer: {userAns !== null ? q.options[userAns] : "Not Answered"}</p>
              <p className="text-sm">Correct: {q.options[q.answerIndex]}</p>
              {latest.timePerQ && latest.timePerQ[q.id] && (
                <p className="text-xs text-muted-foreground">Time Spent: {latest.timePerQ[q.id]}s</p>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
