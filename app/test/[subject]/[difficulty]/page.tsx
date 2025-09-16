"use client"

import { useState, useEffect, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import { getQuestions } from "@/lib/questions"
import { saveResult, saveProgress, getProgress, clearProgress } from "@/lib/storage"
import { motion, AnimatePresence } from "framer-motion"
import { FaCheckCircle, FaTimesCircle, FaQuestionCircle } from "react-icons/fa"

export default function ExamPage() {
  const { subject, difficulty } = useParams()
  const router = useRouter()

  const [questions, setQuestions] = useState<any[]>([])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number | null>>({})
  const [timeLeft, setTimeLeft] = useState(60 * 60) // 60 mins
  const [submitting, setSubmitting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showConfirm, setShowConfirm] = useState(false)
  const [timePerQ, setTimePerQ] = useState<Record<string, number>>({})

  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const lastChangeRef = useRef<number>(Date.now())

  // Load questions + progress
  useEffect(() => {
    const q = getQuestions(subject as string, difficulty as string, 50)
    setQuestions(q)

    const init: Record<string, null> = {}
    q.forEach((x) => (init[x.id] = null))

    const saved = getProgress(subject as string, difficulty as string)
    if (saved) {
      setAnswers(saved.answers)
      setCurrent(saved.current)
      setTimeLeft(saved.timeLeft)
      setTimePerQ(saved.timePerQ || {})
    } else {
      setAnswers(init)
      setTimePerQ({})
    }
  }, [subject, difficulty])

  // Timer
  useEffect(() => {
    if (!questions.length) return
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          submit(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current!)
  }, [questions])

  // Track time per question
  useEffect(() => {
    const now = Date.now()
    const prevQ = questions[current]?.id
    if (prevQ && lastChangeRef.current) {
      const diff = Math.floor((now - lastChangeRef.current) / 1000)
      setTimePerQ((prev) => ({ ...prev, [prevQ]: (prev[prevQ] || 0) + diff }))
    }
    lastChangeRef.current = now
  }, [current])

  // Auto save
  useEffect(() => {
    if (questions.length) {
      saveProgress(subject as string, difficulty as string, {
        answers,
        current,
        timeLeft,
        timePerQ,
      })
    }
  }, [answers, current, timeLeft, timePerQ, subject, difficulty, questions])

  function formatTime(sec: number) {
    const m = Math.floor(sec / 60)
    const s = sec % 60
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  function selectAnswer(qid: string, idx: number) {
    setAnswers((prev) => ({ ...prev, [qid]: idx }))
  }

  function submit(auto = false) {
    setSubmitting(true)
    clearInterval(timerRef.current!)
    clearProgress(subject as string, difficulty as string)

    const result = {
      subject,
      difficulty,
      mode: "exam",
      answers,
      total: questions.length,
      date: new Date().toISOString(),
      timeTaken: 60 * 60 - timeLeft,
      timePerQ,
      autoSubmitted: auto,
    }
    saveResult(result)

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
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (submitting) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold mb-6">
          Calculating Your Result...
        </motion.h2>
        <div className="w-full max-w-md bg-accent/20 rounded-full h-4 overflow-hidden mb-4">
          <motion.div className="bg-primary h-4" initial={{ width: "0%" }} animate={{ width: `${progress}%` }} />
        </div>
        <p className="text-lg font-semibold text-primary">{progress}%</p>
        <p className="text-muted-foreground mt-2">Analyzing answers, please wait...</p>
      </div>
    )
  }

  const q = questions[current]

  // ✅ Correct Answer / Not Answered count
  const totalQuestions = questions.length
  const answeredCount = Object.values(answers).filter(
    (a) => a !== null && a !== undefined
  ).length
  const notAnsweredCount = totalQuestions - answeredCount

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-6">
      {/* Timer */}
      <div className="fixed top-4 right-4 glass px-4 py-2 rounded-lg font-bold text-lg z-50">
        ⏳ {formatTime(timeLeft)}
      </div>

      {/* Question Card */}
      <motion.div
        className="glass p-6 md:p-8 rounded-2xl max-w-2xl w-full mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
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
            <button onClick={() => setCurrent((c) => c - 1)} className="px-5 py-2 glass rounded-lg">
              Previous
            </button>
          ) : (
            <div />
          )}
          {current < questions.length - 1 ? (
            <button onClick={() => setCurrent((c) => c + 1)} className="px-5 py-2 glass rounded-lg">
              Next
            </button>
          ) : (
            <button
              onClick={() => setShowConfirm(true)}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90"
            >
              Submit
            </button>
          )}
        </div>
      </motion.div>

      {/* Legend */}
      <div className="flex gap-6 mt-2 text-sm text-gray-400 flex-wrap justify-center">
        <div className="flex items-center gap-1">
          <FaCheckCircle className="text-green-500" /> Answered
        </div>
        <div className="flex items-center gap-1">
          <FaTimesCircle className="text-blue-500" /> Current
        </div>
        <div className="flex items-center gap-1">
          <FaQuestionCircle className="text-gray-400" /> Not Answered
        </div>
      </div>

      {/* Navigation Grid */}
      <div className="mt-4 mb-6 max-h-[260px] overflow-y-auto grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2 max-w-3xl w-full p-2 rounded-xl">
        {questions.map((q, i) => {
          const userAns = answers[q.id]
          const isAnswered = userAns !== null && userAns !== undefined
          const isCurrent = i === current
          return (
            <motion.button
              key={q.id}
              onClick={() => setCurrent(i)}
              className={`w-10 h-10 rounded-lg font-semibold transition ${
                isCurrent
                  ? "bg-blue-600 text-white"
                  : isAnswered
                  ? "bg-green-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {i + 1}
            </motion.button>
          )
        })}
      </div>

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
              <h3 className="text-xl font-bold mb-4">Submit Exam?</h3>
              <div className="flex flex-col items-center gap-2 mb-6 text-sm">
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> Answered: {answeredCount}
                </span>
                <span className="flex items-center gap-2">
                  <FaQuestionCircle className="text-gray-400" /> Not Answered: {notAnsweredCount}
                </span>
              </div>
              <div className="flex justify-center gap-4">
                <button onClick={() => setShowConfirm(false)} className="px-4 py-2 glass rounded-lg">
                  Cancel
                </button>
                <button
                  onClick={() => submit(false)}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
                >
                  Submit Anyway
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
