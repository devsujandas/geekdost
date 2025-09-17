"use client"

import { useRouter } from "next/navigation"
import { FaPython, FaJava, FaJsSquare, FaDatabase, FaGithub, FaCloud, FaLock, FaCode } from "react-icons/fa"
import { SiTensorflow, SiMongodb, SiOpenai } from "react-icons/si"
import { MdWeb, MdOutlineDeveloperMode } from "react-icons/md"
import { PageLayout } from "@/components/page-layout"

const subjects = [
  { id: "python", name: "Python", icon: <FaPython className="h-8 w-8 text-primary mb-3" /> },
  { id: "java", name: "Java", icon: <FaJava className="h-8 w-8 text-primary mb-3" /> },
  { id: "javascript", name: "JavaScript", icon: <FaJsSquare className="h-8 w-8 text-primary mb-3" /> },
  { id: "web", name: "Web Development", icon: <MdWeb className="h-8 w-8 text-primary mb-3" /> },
  { id: "datascience", name: "Data Science", icon: <SiTensorflow className="h-8 w-8 text-primary mb-3" /> },
  { id: "ml", name: "Machine Learning", icon: <SiTensorflow className="h-8 w-8 text-primary mb-3" /> },
  { id: "sql-db", name: "SQL & Databases", icon: <FaDatabase className="h-8 w-8 text-primary mb-3" /> },
  { id: "dsa", name: "Data Structures & Algorithms", icon: <FaCode className="h-8 w-8 text-primary mb-3" /> },
  { id: "git", name: "Git & GitHub", icon: <FaGithub className="h-8 w-8 text-primary mb-3" /> },
  { id: "devops", name: "DevOps", icon: <MdOutlineDeveloperMode className="h-8 w-8 text-primary mb-3" /> },
  { id: "ai-llms", name: "AI & LLMs", icon: <SiOpenai className="h-8 w-8 text-primary mb-3" /> },
  { id: "cloud", name: "Cloud Computing", icon: <FaCloud className="h-8 w-8 text-primary mb-3" /> },
  { id: "cyber", name: "Cyber Security", icon: <FaLock className="h-8 w-8 text-primary mb-3" /> }
]

export default function TestPage() {
  const router = useRouter()

  return (
    <PageLayout>
      <div className="container mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Select a Subject</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Pick your subject of interest and start a mock test. Questions will be random every time with different levels of difficulty.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => router.push(`/test/${s.id}`)}
              className="glass rounded-2xl p-8 flex flex-col items-center 
                         transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {s.icon}
              <span className="text-lg font-semibold">{s.name}</span>
            </button>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
