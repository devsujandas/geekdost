// lib/questions.ts
import allQuestions from "@/lib/mock-questions.json"

export function getQuestions(subject: string, difficulty: string, count: number) {
  const pool = (allQuestions as any[]).filter(
    (q) => q.subject === subject && q.difficulty === difficulty
  )
  const shuffled = pool.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
