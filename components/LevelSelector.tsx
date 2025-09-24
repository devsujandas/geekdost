"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"

interface LevelSelectorProps {
  subject: string
  levels: string[]
}

export function LevelSelector({ subject, levels }: LevelSelectorProps) {
  const descriptions: Record<string, string> = {
    beginner: `Learn ${subject} at beginner level`,
    intermediate: `Learn ${subject} at intermediate level`,
    advanced: `Learn ${subject} at advanced level`,
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {levels.map((level, idx) => (
        <motion.div
          key={level}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.5 }}
        >
          <Link href={`/roadmap/${subject}/${level}`}>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group p-6 rounded-2xl bg-primary/10 border border-border cursor-pointer transition-all 
                         hover:bg-primary/20 hover:border-primary flex flex-col items-center text-center h-full"
            >
              <h2 className="text-xl font-bold capitalize text-foreground mb-2">
                {level}
              </h2>
              <p className="text-sm text-muted-foreground">
                {descriptions[level] || `Learn ${subject}`}
              </p>

              <div className="mt-4 flex items-center justify-center">
                <FaArrowRight className="h-4 w-4 text-primary opacity-70 group-hover:opacity-100 transition" />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
