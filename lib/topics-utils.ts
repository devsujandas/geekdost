import { IconType } from "react-icons"
import { FaJava, FaPython } from "react-icons/fa"
import { SiC } from "react-icons/si" // ✅ C icon এখানে আছে

// 🔹 Interfaces
export interface ChapterTopic {
  id: string
  title: string
  desc: string
  note: string
  code: string
}

export interface Chapter {
  id: string
  title: string
  desc: string
  notes: string
  code: string
  duration?: string
  topics: ChapterTopic[]
}

export interface Topic {
  id: string
  title: string
  desc: string
  description?: string
  icon?: IconType
  image?: string
  examples: number
  notes: number
  steps: number
  category?: string
  categories?: string[]
  difficulty?: string
  chapters: Chapter[]
}

// 🔹 Import JSON Data
import pythonData from "./data/python.json"
import javaData from "./data/java.json"
import cData from "./data/c.json"

// 🔹 Map JSON → Topics with Icons
const rawTopics: Omit<Topic, "examples" | "notes" | "steps">[] = [
  { ...(Array.isArray(pythonData) ? pythonData[0] : pythonData), icon: FaPython },
  { ...(Array.isArray(javaData) ? javaData[0] : javaData), icon: FaJava },
  { ...(Array.isArray(cData) ? cData[0] : cData), icon: SiC }
]

// 🔹 Auto calculate examples, notes & steps
export const topicsData: Topic[] = rawTopics.map((topic) => {
  const examples =
    topic.chapters.reduce(
      (acc, ch) =>
        acc +
        (ch.code?.trim() ? 1 : 0) +
        (ch.topics?.filter((t) => t.code?.trim()).length || 0),
      0
    ) || 0

  const notes =
    topic.chapters.reduce(
      (acc, ch) =>
        acc +
        (ch.notes?.trim() ? 1 : 0) +
        (ch.topics?.filter((t) => t.note?.trim()).length || 0),
      0
    ) || 0

  const steps = topic.chapters.length

  return {
    ...topic,
    examples,
    notes,
    steps,
    description: topic.description ?? topic.desc,
  }
})
