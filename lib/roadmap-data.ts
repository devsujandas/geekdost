import data from "./roadmap-data.json"

// 🔹 Topic list inside a chapter
export interface RoadmapTopic {
  title: string
  topics: string[]
  time?: string
}

// 🔹 Each level roadmap (Beginner, Intermediate, Advanced)
export interface RoadmapLevel {
  title: string
  chapters: RoadmapTopic[]
}

// 🔹 Meta info for each subject
export interface RoadmapMeta {
  icon: string
  description: string
  time: string
}

// 🔹 Subject data type
export interface RoadmapSubject {
  meta: RoadmapMeta
  beginner?: RoadmapLevel
  intermediate?: RoadmapLevel
  advanced?: RoadmapLevel
}

// 🔹 All data
export const roadmapData: Record<string, RoadmapSubject> = data as Record<
  string,
  RoadmapSubject
>

// ✅ Get all subjects
export function getSubjects(): string[] {
  return Object.keys(roadmapData)
}

// ✅ Get meta info for a subject
export function getMeta(subject: string): RoadmapMeta | null {
  return roadmapData[subject]?.meta || null
}

// ✅ Get levels for a subject (excluding meta)
export function getLevels(subject: string): string[] {
  return roadmapData[subject]
    ? Object.keys(roadmapData[subject]).filter((key) => key !== "meta")
    : []
}

// ✅ Get full roadmap for subject + level
export function getRoadmap(
  subject: string,
  level: string
): RoadmapLevel | null {
  const subjectData = roadmapData[subject]
  if (!subjectData) return null
  return subjectData[level as keyof RoadmapSubject] as RoadmapLevel
}
