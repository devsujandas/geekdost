"use client"

import { useParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import {
  FaListOl,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaUpload,
} from "react-icons/fa"

export default function RulesPage() {
  const { subject, difficulty } = useParams()
  const router = useRouter()
  const [name, setName] = useState<string>("")
  const [showPopup, setShowPopup] = useState(false)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  // Load saved name if exists
  useEffect(() => {
    const saved = localStorage.getItem("userName")
    if (saved) setName(saved)
  }, [])

  const handleStart = () => {
    if (!name.trim()) {
      setShowPopup(true)
      return
    }
    localStorage.setItem("userName", name.trim())

    // Start loading animation
    setLoading(true)
    let value = 0
    const interval = setInterval(() => {
      value += 1
      setProgress(value)
      if (value >= 100) {
        clearInterval(interval)
        router.push(`/test/${subject}/${difficulty}`)
      }
    }, 30) // speed of progress (30ms per step → ~3 seconds)
  }

  return (
    <div className="container mx-auto py-20 px-4 text-center">
      {/* If loading screen active */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50"
          >
            <h2 className="text-2xl font-bold mb-6">Please Wait...</h2>
            <div className="w-64 bg-gray-700 rounded-full h-4 overflow-hidden mb-4">
              <motion.div
                className="bg-primary h-4"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <span className="text-lg font-semibold">{progress}%</span>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 max-w-2xl mx-auto shadow-lg"
        >
          {/* Title */}
          <h1 className="text-3xl font-extrabold mb-6">Exam Rules</h1>

          {/* Rules */}
          <ul className="text-left space-y-4 mb-8 text-muted-foreground">
            <li className="flex items-center gap-3">
              <FaListOl className="text-primary" /> Total Questions:{" "}
              <span className="font-semibold">50</span>
            </li>
            <li className="flex items-center gap-3">
              <FaClock className="text-primary" /> Time Limit:{" "}
              <span className="font-semibold">60 minutes</span>
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" /> Each correct answer ={" "}
              <span className="font-semibold">+1 point</span>
            </li>
            <li className="flex items-center gap-3">
              <FaTimesCircle className="text-red-500" /> No negative marking
            </li>
            <li className="flex items-center gap-3">
              <FaUpload className="text-yellow-500" /> Auto submit when timer
              ends
            </li>
          </ul>

          {/* Name Input */}
          <div className="mb-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-primary text-center"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-row sm:flex-row justify-center gap-4">
            <button
              onClick={handleStart}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Start Exam
            </button>
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Back
            </button>
          </div>
        </motion.div>
      )}

      {/* Custom Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center max-w-sm w-full"
            >
              <h2 className="text-lg font-bold mb-4">Name Required</h2>
              <p className="text-gray-600 mb-6">
                Please enter your name before starting the exam.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
