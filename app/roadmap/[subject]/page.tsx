"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { use } from "react"
import { getLevels } from "@/lib/roadmap-data"
import { LevelSelector } from "@/components/LevelSelector"
import { FaArrowLeft, FaRocket } from "react-icons/fa"

export default function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>
}) {
  // ✅ unwrap params using React.use()
  const { subject } = use(params)
  const levels = getLevels(subject)

  if (!levels.length) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        ❌ No roadmap found for {subject}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/roadmap"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <FaArrowLeft className="mr-2 h-4 w-4" />
          Back to Subjects
        </Link>
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary capitalize">
          {subject} Roadmap
        </h1>
        <p className="mt-3 text-muted-foreground text-lg flex items-center justify-center gap-2">
          <span>Choose your learning level to get started</span>
          <FaRocket className="text-primary h-5 w-5" />
        </p>
      </motion.div>

      {/* Level Selector (button-style cards) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <LevelSelector subject={subject} levels={levels} />
      </motion.div>
    </div>
  )
}
