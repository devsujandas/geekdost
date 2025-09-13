"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  FaPython,
  FaJs,
  FaJava,
  FaCode,
  FaChartBar,
  FaBrain,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaRobot,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa"
import type { Topic } from "@/lib/topics-data"
import { GlassmorphismCard } from "./glassmorphism-card"

interface TopicCardProps {
  topic: Topic
  delay?: number
}

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

const difficultyColors = {
  Beginner: "text-white bg-green-600",
  Intermediate: "text-white bg-yellow-600",
  Advanced: "text-white bg-red-600",
}

export function TopicCard({ topic, delay = 0 }: TopicCardProps) {
  if (!topic) {
    console.log("[v0] TopicCard received undefined topic")
    return null
  }

  const IconComponent = iconMap[topic.icon as keyof typeof iconMap] || FaCode
  const tags = topic.tags || []
  const roadmap = topic.roadmap || []
  const codeSnippets = topic.codeSnippets || []
  const notes = topic.notes || []
  const category = topic.category || "General"
  const difficulty = topic.difficulty || "Beginner"

  console.log("[v0] TopicCard rendering:", {
    id: topic.id,
    title: topic.title,
    tagsLength: tags.length,
    roadmapLength: roadmap.length,
  })

  return (
    <Link href={`/topics/${topic.id}`}>
      <GlassmorphismCard delay={delay} className="h-full group cursor-pointer overflow-hidden">
        <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="flex flex-col h-full relative">
          {/* Hover Effect Background */}
          <motion.div
            className="absolute inset-0 bg-primary/5 rounded-xl"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Header with Category and Difficulty */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-muted-foreground bg-muted/20 px-2 py-1 rounded">{category}</span>
              <span className={`text-xs px-2 py-1 rounded font-medium ${difficultyColors[difficulty]}`}>
                {difficulty}
              </span>
            </div>

            {/* Icon and Title */}
            <div className="flex items-center mb-4">
              <motion.div
                className="p-3 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors duration-200"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconComponent className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200"
                whileHover={{ x: 2 }}
              >
                {topic.title}
              </motion.h3>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4 flex-grow text-pretty">{topic.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-muted/30 text-foreground px-2 py-1 rounded border border-border/50"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && <span className="text-xs text-muted-foreground">+{tags.length - 3} more</span>}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <motion.span whileHover={{ scale: 1.05 }}>{roadmap.length} Steps</motion.span>
                <motion.span whileHover={{ scale: 1.05 }}>{codeSnippets.length} Snippets</motion.span>
                <motion.span whileHover={{ scale: 1.05 }}>{notes.length} Notes</motion.span>
              </div>
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                whileHover={{ x: 2 }}
              >
                <span className="text-primary font-medium">Explore →</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </GlassmorphismCard>
    </Link>
  )
}
