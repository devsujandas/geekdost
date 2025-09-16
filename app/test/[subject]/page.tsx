"use client"

import { useParams, useRouter } from "next/navigation"

export default function DifficultyPage() {
  const { subject } = useParams()
  const router = useRouter()
  const levels = ["basic", "intermediate", "advance"]

  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-2xl font-bold mb-6">
        Select Difficulty for {subject}
      </h1>
      <div className="flex justify-center gap-6">
        {levels.map((lvl) => (
          <button
            key={lvl}
            onClick={() => router.push(`/test/${subject}/${lvl}`)}
            className="px-6 py-4 rounded-xl glass hover:bg-primary/20 capitalize"
          >
            {lvl}
          </button>
        ))}
      </div>
    </div>
  )
}
