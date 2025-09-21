import { IconType } from "react-icons"
import { FaJava, FaPython, FaDatabase, FaLaptopCode, FaLock, FaCode, FaGitAlt, FaCloud } from "react-icons/fa"
import { SiC, SiCplusplus, SiJavascript } from "react-icons/si" // C, C++ and JS icons

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
  code?: string
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
import cppData from "./data/cpp.json"
import javascriptData from "./data/javascript.json"
import dsaData from "./data/dsa.json"
import dbmsData from "./data/dbms.json"
import webData from "./data/web.json"
import cybersecurityData from "./data/cybersecurity.json"
import gitGithubData from "./data/git-github.json"
import cloudData from "./data/cloud.json"


// 🔹 Map JSON → Topics with Icons
const rawTopics: Omit<Topic, "examples" | "notes" | "steps">[] = [
  { ...(Array.isArray(pythonData) ? pythonData[0] : pythonData), icon: FaPython },
  { ...(Array.isArray(javaData) ? javaData[0] : javaData), icon: FaJava },
  { ...(Array.isArray(cData) ? cData[0] : cData), icon: SiC },

  // Added new topics
  { ...(Array.isArray(cppData) ? cppData[0] : cppData), icon: SiCplusplus },
  { ...(Array.isArray(javascriptData) ? javascriptData[0] : javascriptData), icon: SiJavascript },
  { ...(Array.isArray(dsaData) ? dsaData[0] : dsaData), icon: FaCode },
  { ...(Array.isArray(dbmsData) ? dbmsData[0] : dbmsData), icon: FaDatabase },
  { ...(Array.isArray(webData) ? webData[0] : webData), icon: FaLaptopCode },
  { ...(Array.isArray(cybersecurityData) ? cybersecurityData[0] : cybersecurityData), icon: FaLock },
  { ...(Array.isArray(gitGithubData) ? gitGithubData[0] : gitGithubData), icon: FaGitAlt },
  { ...(Array.isArray(cloudData) ? cloudData[0] : cloudData), icon: FaCloud }

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
