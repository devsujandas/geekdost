"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FaListOl, FaClock, FaCheckCircle, FaTimesCircle, FaUpload } from "react-icons/fa"

export default function RulesPage() {
  const { subject, difficulty } = useParams()
  const router = useRouter()
  const [name, setName] = useState<string>("")

  // Load saved name if exists
  useEffect(() => {
    const saved = localStorage.getItem("userName")
    if (saved) setName(saved)
  }, [])

  const handleStart = () => {
    if (!name.trim()) {
      alert("Please enter your name before starting the exam.")
      return
    }
    localStorage.setItem("userName", name.trim())
    router.push(`/test/${subject}/${difficulty}`)
  }

  return (
    <div className="container mx-auto py-20 px-4 text-center">
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
            <FaListOl className="text-primary" /> Total Questions: <span className="font-semibold">50</span>
          </li>
          <li className="flex items-center gap-3">
            <FaClock className="text-primary" /> Time Limit: <span className="font-semibold">60 minutes</span>
          </li>
          <li className="flex items-center gap-3">
            <FaCheckCircle className="text-green-500" /> Each correct answer = <span className="font-semibold">+1 point</span>
          </li>
          <li className="flex items-center gap-3">
            <FaTimesCircle className="text-red-500" /> No negative marking
          </li>
          <li className="flex items-center gap-3">
            <FaUpload className="text-yellow-500" /> Auto submit when timer ends
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

        {/* Start Button */}
        <button
          onClick={handleStart}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
        >
          Start Exam
        </button>
      </motion.div>
    </div>
  )
}
