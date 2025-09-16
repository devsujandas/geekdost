"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function RulesPage() {
  const { subject, difficulty } = useParams()
  const router = useRouter()

  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8 max-w-2xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-6">Exam Rules</h1>
        <ul className="text-left space-y-3 mb-6 text-muted-foreground">
          <li>📌 Total Questions: 50</li>
          <li>⏳ Time Limit: 60 minutes</li>
          <li>✅ Each correct answer = +1 point</li>
          <li>❌ No negative marking</li>
          <li>📉 Auto submit when timer ends</li>
        </ul>
        <button
          onClick={() => router.push(`/test/${subject}/${difficulty}`)}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
        >
          Start Exam
        </button>
      </motion.div>
    </div>
  )
}
