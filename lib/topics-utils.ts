import { IconType } from "react-icons"
import { FaPython, FaJava  } from "react-icons/fa" //icon 
import rawTopicsJson from "./raw-topics.json"

// 🔹 Topic inside a Chapter
export interface ChapterTopic {
  id: string
  title: string
  desc: string
  note: string
  code: string
}

// 🔹 Chapter interface
export interface Chapter {
  id: string
  title: string
  desc: string
  notes: string
  code: string
  duration?: string
  topics: ChapterTopic[]
}

// 🔹 Main Topic interface
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

// 🔹 Map JSON icon string → actual Icon
const iconMap: Record<string, IconType> = {
  FaPython,
  FaJava,
  //  icon
}

// 🔹 Convert raw JSON into Topic[]
export const topicsData: Topic[] = (rawTopicsJson as any).map((topic: any) => {
  const examples =
    topic.chapters.reduce(
      (acc: number, ch: any) =>
        acc +
        (ch.code?.trim() ? 1 : 0) +
        (ch.topics?.filter((t: any) => t.code?.trim()).length || 0),
      0
    ) || 0

  const notes =
    topic.chapters.reduce(
      (acc: number, ch: any) =>
        acc +
        (ch.notes?.trim() ? 1 : 0) +
        (ch.topics?.filter((t: any) => t.note?.trim()).length || 0),
      0
    ) || 0

  const steps = topic.chapters.length

  return {
    ...topic,
    icon: topic.icon ? iconMap[topic.icon] : undefined,
    examples,
    notes,
    steps,
    description: topic.description ?? topic.desc,
  }
})
