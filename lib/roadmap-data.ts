import data from "./roadmap-data.json"

//  Each topic section inside a chapter
export interface RoadmapTopic {
  title: string
  topics: string[]
}

//  A level (Beginner, Intermediate, Advanced) with multiple chapters
export interface RoadmapLevel {
  title: string
  chapters: RoadmapTopic[]
}

//  Full data type: subject -> level -> roadmap
export const roadmapData: Record<string, Record<string, RoadmapLevel>> = data

//  Get all subjects (Python, Java, etc.)
export function getSubjects(): string[] {
  return Object.keys(roadmapData)
}

//  Get levels for a subject (Beginner, Intermediate, Advanced)
export function getLevels(subject: string): string[] {
  return roadmapData[subject] ? Object.keys(roadmapData[subject]) : []
}

// Get specific roadmap for subject + level
export function getRoadmap(subject: string, level: string): RoadmapLevel | null {
  return roadmapData[subject]?.[level] || null
}
