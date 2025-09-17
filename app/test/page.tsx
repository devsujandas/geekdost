"use client"

import { useRouter } from "next/navigation"
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaDatabase,
  FaGithub,
  FaCloud,
  FaLock,
  FaCode,
  FaProjectDiagram,
  FaNetworkWired

} from "react-icons/fa"
import { SiTensorflow, SiOpenai, SiC, SiCplusplus, SiLinux } from "react-icons/si"
import { FaArrowRight } from "react-icons/fa"
import { MdWeb, MdOutlineDeveloperMode } from "react-icons/md"
import { PageLayout } from "@/components/page-layout"
import { motion } from "framer-motion"



const subjects = [
  { id: "python", name: "Python", icon: <FaPython className="h-10 w-10 text-primary" /> },
  { id: "java", name: "Java", icon: <FaJava className="h-10 w-10 text-primary" /> },
  { id: "c", name: "C Programming", icon: <SiC className="h-10 w-10 text-primary" /> },
  { id: "cpp", name: "C++", icon: <SiCplusplus className="h-10 w-10 text-primary" /> },
  { id: "javascript", name: "JavaScript", icon: <FaJsSquare className="h-10 w-10 text-primary" /> },
  { id: "web", name: "Web Development", icon: <MdWeb className="h-10 w-10 text-primary" /> },
  { id: "datascience", name: "Data Science", icon: <SiTensorflow className="h-10 w-10 text-primary" /> },
  { id: "ml", name: "Machine Learning", icon: <SiTensorflow className="h-10 w-10 text-primary" /> },
  { id: "sql-db", name: "SQL & Databases", icon: <FaDatabase className="h-10 w-10 text-primary" /> },
  { id: "dsa", name: "Data Structures & Algorithms", icon: <FaCode className="h-10 w-10 text-primary" /> },
  { id: "git", name: "Git & GitHub", icon: <FaGithub className="h-10 w-10 text-primary" /> },
  { id: "devops", name: "DevOps", icon: <MdOutlineDeveloperMode className="h-10 w-10 text-primary" /> },
  { id: "ai-llms", name: "AI & LLMs", icon: <SiOpenai className="h-10 w-10 text-primary" /> },
  { id: "cloud", name: "Cloud Computing", icon: <FaCloud className="h-10 w-10 text-primary" /> },
  { id: "cyber", name: "Cyber Security", icon: <FaLock className="h-10 w-10 text-primary" /> },
  { id: "os", name: "Operating Systems", icon: <SiLinux className="h-10 w-10 text-primary" /> },
  { id: "networks", name: "Computer Networks", icon: <FaNetworkWired className="h-10 w-10 text-primary" /> },
  { id: "se", name: "Software Engineering", icon: <FaProjectDiagram className="h-10 w-10 text-primary" /> }



]

export default function TestPage() {
  const router = useRouter()

  return (
    <PageLayout>
      <div className="container mx-auto py-16 px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold mb-4">Select a Subject</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Pick your subject of interest and start a mock test. Questions will be random every time
          with different levels of difficulty.
        </p>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((s, idx) => (
            <motion.button
              key={s.id}
              onClick={() => router.push(`/test/${s.id}`)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="glass relative rounded-2xl p-10 flex flex-col items-center justify-center 
                         border border-primary/30 hover:border-primary/70
                         shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 
                           group-hover:bg-primary/20 transition-all duration-300 mb-4"
              >
                {s.icon}
              </div>

              {/* Subject Name */}
              <span className="text-xl font-semibold">{s.name}</span>

              {/* Sub-label */}
              <span className="text-xs mt-2 text-muted-foreground flex items-center gap-1">
  Start Test <FaArrowRight className="inline h-3 w-3" />
</span>


              {/* Button glow effect */}
              <span className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 
                               group-hover:opacity-100 transition duration-300 pointer-events-none" />
            </motion.button>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
