// lib/questions.ts
import allQuestions from "@/lib/mock-questions.json"

// --- Get Questions with Topic Info + Shuffle ---
export function getQuestions(
  subject: string,
  difficulty: string,
  count: number,
  options: { shuffle?: boolean; mode?: "exam" | "practice" } = {}
) {
  // Filter by subject + difficulty
  const pool = (allQuestions as any[]).filter(
    (q) => q.subject === subject && q.difficulty === difficulty
  )

  // Shuffle only if exam mode
  let selected = pool
  if (options.shuffle !== false) {
    selected = pool.sort(() => 0.5 - Math.random())
  }

  // Slice to requested count
  const final = selected.slice(0, count)

  // Attach extra metadata (for analytics)
  return final.map((q, i) => ({
    ...q,
    index: i + 1,
    topic: q.topic || "General", // fallback if topic not provided
  }))
}

// --- Group by Topic (for Weakness Analysis) ---
export function groupByTopic(questions: any[]) {
  const result: Record<string, any[]> = {}
  questions.forEach((q) => {
    if (!result[q.topic]) result[q.topic] = []
    result[q.topic].push(q)
  })
  return result
}
