"use client"

import { motion } from "framer-motion"

interface ExamNavigationProps {
  total: number
  current: number
  answers: Record<string, number | null>
  onNavigate: (index: number) => void
}

export default function ExamNavigation({ total, current, answers, onNavigate }: ExamNavigationProps) {
  return (
    <div className="glass rounded-xl p-4 grid grid-cols-10 gap-2 max-w-3xl mx-auto mt-6">
      {Array.from({ length: total }).map((_, i) => {
        const answered = Object.values(answers)[i] !== null
        return (
          <motion.button
            key={i}
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate(i)}
            className={`w-8 h-8 rounded-full text-xs font-bold ${
              i === current
                ? "bg-primary text-primary-foreground"
                : answered
                ? "bg-green-500/20 text-green-400"
                : "bg-accent/20 text-muted-foreground"
            }`}
          >
            {i + 1}
          </motion.button>
        )
      })}
    </div>
  )
}
