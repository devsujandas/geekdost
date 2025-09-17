"use client"

import { useParams, useRouter, useSearchParams } from "next/navigation"
import { MdOutlineQuiz } from "react-icons/md"
import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"

export default function DifficultyPage() {
  const { subject } = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const mode = searchParams.get("mode")

  const levels = [
    { id: "basic", label: "Basic", desc: "Start with fundamentals" },
    { id: "intermediate", label: "Intermediate", desc: "For learners with some experience" },
    { id: "advance", label: "Advance", desc: "Challenge yourself at expert level" },
  ]

  function handleClick(level: string) {
    if (mode === "practice") {
      router.push(`/test/${subject}/${level}/practice`)
    } else {
      router.push(`/test/${subject}/${level}/rules`)
    }
  }

  return (
    <div className="container mx-auto py-20 px-6 text-center">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-4 capitalize">
        Choose Difficulty
      </h1>
      <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
        Select the level of challenge for{" "}
        <span className="font-semibold">{subject}</span> mock test.
        Each level contains 50 random questions every time.
      </p>

      {/* Difficulty Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {levels.map((lvl, idx) => (
          <motion.button
            key={lvl.id}
            onClick={() => handleClick(lvl.id)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="glass relative rounded-2xl p-10 flex flex-col items-center justify-center 
                       border border-primary/30 hover:border-primary/70
                       shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            {/* Icon */}
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 
                         group-hover:bg-primary/20 transition-all duration-300 mb-4"
            >
              <MdOutlineQuiz className="h-10 w-10 text-primary" />
            </div>

            {/* Level Name */}
            <span className="text-xl font-semibold">{lvl.label}</span>

            {/* Description */}
            <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
              {lvl.desc} <FaArrowRight className="inline h-3 w-3" />
            </p>

            {/* Glow Effect */}
            <span className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 
                             group-hover:opacity-100 transition duration-300 pointer-events-none" />
          </motion.button>
        ))}
      </div>
    </div>
  )
}
