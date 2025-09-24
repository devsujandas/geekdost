"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { use } from "react"
import { getLevels, getMeta } from "@/lib/roadmap-data"
import { FaArrowLeft, FaBaby, FaUserGraduate, FaCrown, FaRegClock } from "react-icons/fa"

interface LevelInfo {
  icon: React.ReactNode
  color: string
  description: string
}

const levelConfig: Record<string, LevelInfo> = {
  beginner: {
    icon: <FaBaby className="w-5 h-5 text-green-600" />,
    color: "border-green-500/40 hover:border-green-500/60",
    description: "Start your journey with the basics",
  },
  intermediate: {
    icon: <FaUserGraduate className="w-5 h-5 text-blue-600" />,
    color: "border-blue-500/40 hover:border-blue-500/60",
    description: "Level up with more advanced topics",
  },
  advanced: {
    icon: <FaCrown className="w-5 h-5 text-purple-600" />,
    color: "border-purple-500/40 hover:border-purple-500/60",
    description: "Master complex concepts and skills",
  },
}

export default function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>
}) {
  const { subject } = use(params)
  const levels = getLevels(subject)
  const meta = getMeta(subject)

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
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          href="/roadmap"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <FaArrowLeft className="mr-2 h-4 w-4" />
          Back to Subjects
        </Link>
      </div>

      {/* Heading Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <div className="p-6 rounded-xl border border-border bg-card/60 shadow-md text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary capitalize">
            {subject.replace(/-/g, " ")} Roadmap
          </h1>
          <p className="mt-3 text-muted-foreground text-lg">
            Choose your learning level to get started
          </p>
          {meta?.time && (
            <p className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <FaRegClock className="text-primary w-4 h-4" />
              <span>Estimated Duration: {meta.time}</span>
            </p>
          )}
        </div>
      </motion.div>

      {/* Level Selector */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        // ✅ always 3 per row from md breakpoint
        className="max-w-5xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3"
      >
        {levels.map((level, idx) => {
          const config = levelConfig[level] || {
            icon: <FaUserGraduate className="w-5 h-5" />,
            color: "border-gray-500/40 hover:border-gray-500/60",
            description: "Learn at your own pace",
          }

          return (
            <motion.div
              key={level}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/roadmap/${subject}/${level}`}>
                <div
                  className={`p-6 rounded-xl border bg-card/60 shadow-sm transition-all flex flex-col items-center text-center space-y-3 ${config.color}`}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-background/70 border">
                    {config.icon}
                  </div>

                  {/* Level Title */}
                  <h2 className="text-lg font-bold capitalize">{level}</h2>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {config.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
