"use client"

import { useParams, useRouter, useSearchParams } from "next/navigation"
import { MdOutlineQuiz } from "react-icons/md"
import { motion } from "framer-motion"

export default function DifficultyPage() {
  const { subject } = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const mode = searchParams.get("mode") // ✅ check query param

  const levels = [
    { id: "basic", label: "Basic" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advance", label: "Advance" },
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

      {/* Difficulty Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {levels.map((lvl, idx) => (
          <motion.button
            key={lvl.id}
            onClick={() => handleClick(lvl.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass p-10 rounded-2xl flex flex-col items-center justify-center 
                       transition-all duration-300 hover:shadow-lg"
          >
            <MdOutlineQuiz className="h-10 w-10 text-primary mb-4" />
            <span className="text-xl font-semibold">{lvl.label}</span>
            <p className="text-sm text-muted-foreground mt-2">
              {idx === 0 && "Start with fundamentals"}
              {idx === 1 && "For learners with some experience"}
              {idx === 2 && "Challenge yourself at expert level"}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
