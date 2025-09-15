"use client"

import { motion, AnimatePresence } from "framer-motion"
import { notFound } from "next/navigation"
import { FaArrowLeft, FaClock, FaCheckCircle, FaCode } from "react-icons/fa"
import Link from "next/link"
import { useState } from "react"
import { getTopicById } from "@/lib/topics-data"
import { PageLayout } from "@/components/page-layout"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { RoadmapTimeline } from "@/components/roadmap-timeline"
import { CodeSnippet } from "@/components/code-snippet"
import { InteractiveButton } from "@/components/interactive-button"
import { Map, FileText, Code2 } from "lucide-react"
import {
  FaPython,
  FaJs,
  FaJava,
  FaChartBar,
  FaBrain,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaRobot,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa"

const iconMap = {
  FaPython: FaPython,
  FaJs: FaJs,
  FaJava: FaJava,
  FaCode: FaCode,
  FaChartBar: FaChartBar,
  FaBrain: FaBrain,
  FaDatabase: FaDatabase,
  FaGitAlt: FaGitAlt,
  FaDocker: FaDocker,
  FaRobot: FaRobot,
  FaCloud: FaCloud,
  FaShieldAlt: FaShieldAlt,
}

interface TopicPageProps {
  params: {
    id: string
  }
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = getTopicById(params.id)
  const [activeTab, setActiveTab] = useState<"roadmap" | "notes" | "code">("roadmap")

  if (!topic) {
    notFound()
  }

  const IconComponent = iconMap[topic.icon as keyof typeof iconMap] || FaCode

  return (
    <PageLayout>
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <FaArrowLeft className="h-4 w-4" />
            <span>Back to Topics</span>
          </Link>
        </motion.div>

        {/* Topic Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <GlassmorphismCard className="text-center">
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-full bg-primary/10 mb-6">
                <IconComponent className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{topic.title}</h1>
              <p className="text-xl text-muted-foreground mb-6 text-pretty max-w-2xl">{topic.description}</p>
              <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <FaClock className="h-4 w-4" />
                  <span>{topic.roadmap.length} Learning Steps</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCode className="h-4 w-4" />
                  <span>{topic.codeSnippets.length} Code Examples</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="h-4 w-4" />
                  <span>{topic.notes.length} Key Notes</span>
                </div>
              </div>
            </div>
          </GlassmorphismCard>
        </motion.div>

  {/* 🔹 Tab Buttons Card */}
<GlassmorphismCard className="mb-12">
  <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
    <InteractiveButton
      variant={activeTab === "roadmap" ? "primary" : "outline"}
      onClick={() => setActiveTab("roadmap")}
      className="!flex !flex-row !items-center gap-2 px-0 !important"
    >
      <Map className="h-4" style={{display: 'inline-block', verticalAlign: 'middle'}} />
      <span style={{display: 'inline-block', verticalAlign: 'middle'}}>Roadmap</span>
    </InteractiveButton>
    <InteractiveButton
      variant={activeTab === "notes" ? "primary" : "outline"}
      onClick={() => setActiveTab("notes")}
      className="!flex !flex-row !items-center gap-2 px-4 !important"
    >
      <FileText className="h-4" style={{display: 'inline-block', verticalAlign: 'middle'}} />
      <span style={{display: 'inline-block', verticalAlign: 'middle'}}>Notes</span>
    </InteractiveButton>
    <InteractiveButton
      variant={activeTab === "code" ? "primary" : "outline"}
      onClick={() => setActiveTab("code")}
      className="!flex !flex-row !items-center gap-2 px-4 !important"
    >
      <Code2 className="h-4" style={{display: 'inline-block', verticalAlign: 'middle'}} />
      <span style={{display: 'inline-block', verticalAlign: 'middle'}}>Code</span>
    </InteractiveButton>
  </div>
</GlassmorphismCard>



        {/* Content Sections with Smooth Animation */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {activeTab === "roadmap" && (
              <motion.section
                key="roadmap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Learning Roadmap</h2>
                <RoadmapTimeline roadmap={topic.roadmap} />
              </motion.section>
            )}

            {activeTab === "notes" && (
              <motion.section
                key="notes"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Key Notes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {topic.notes.map((note, index) => (
                    <GlassmorphismCard key={index} delay={0.5 + index * 0.1}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                          <span className="text-xs font-bold text-primary">{index + 1}</span>
                        </div>
                        <p className="text-card-foreground text-pretty">{note}</p>
                      </div>
                    </GlassmorphismCard>
                  ))}
                </div>
              </motion.section>
            )}

            {activeTab === "code" && (
              <motion.section
                key="code"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Code Examples</h2>
                <div className="space-y-8">
                  {topic.codeSnippets.map((snippet, index) => (
                    <CodeSnippet
                      key={snippet.id}
                      title={snippet.title}
                      description={snippet.description}
                      language={snippet.language}
                      code={snippet.code}
                      delay={0.7 + index * 0.1}
                    />
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageLayout>
  )
}
