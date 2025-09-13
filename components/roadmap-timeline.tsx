"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaCheckCircle, FaClock, FaPlay, FaChevronDown, FaChevronUp } from "react-icons/fa"
import type { RoadmapItem } from "@/lib/topics-data"
import { GlassmorphismCard } from "./glassmorphism-card"
import { InteractiveButton } from "./interactive-button"

interface RoadmapTimelineProps {
  roadmap: RoadmapItem[]
}

export function RoadmapTimeline({ roadmap }: RoadmapTimelineProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set())

  const toggleCompleted = (stepId: string) => {
    const newCompleted = new Set(completedSteps)
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId)
    } else {
      newCompleted.add(stepId)
    }
    setCompletedSteps(newCompleted)
  }

  const toggleExpanded = (stepId: string) => {
    const newExpanded = new Set(expandedSteps)
    if (newExpanded.has(stepId)) {
      newExpanded.delete(stepId)
    } else {
      newExpanded.add(stepId)
    }
    setExpandedSteps(newExpanded)
  }

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border/50 hidden md:block" />

      <div className="space-y-8">
        {roadmap.map((item, index) => {
          const isCompleted = completedSteps.has(item.id)
          const isExpanded = expandedSteps.has(item.id)

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-background z-10 hidden md:block transition-colors duration-300 ${
                  isCompleted ? "bg-green-500" : "bg-primary"
                }`}
                whileHover={{ scale: 1.2 }}
                animate={{ scale: isCompleted ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.3 }}
              />

              <GlassmorphismCard delay={index * 0.1} className="md:ml-16">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
                          isCompleted ? "bg-green-500/20" : "bg-primary/20"
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className={`text-sm font-bold ${isCompleted ? "text-green-400" : "text-primary"}`}>
                          {index + 1}
                        </span>
                      </motion.div>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleExpanded(item.id)}
                        className="p-1 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {isExpanded ? <FaChevronUp className="h-4 w-4" /> : <FaChevronDown className="h-4 w-4" />}
                      </motion.button>
                    </div>

                    <AnimatePresence>
                      {(isExpanded || !expandedSteps.size) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-muted-foreground mb-4 text-pretty">{item.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <FaClock className="h-4 w-4" />
                        <span>{item.duration}</span>
                      </div>
                      <InteractiveButton
                        size="sm"
                        variant={isCompleted ? "secondary" : "primary"}
                        onClick={() => toggleCompleted(item.id)}
                      >
                        <motion.div
                          key={isCompleted ? "completed" : "start"}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center space-x-2"
                        >
                          {isCompleted ? (
                            <>
                              <FaCheckCircle className="h-4 w-4" />
                              <span>Completed</span>
                            </>
                          ) : (
                            <>
                              <FaPlay className="h-4 w-4" />
                              <span>Start Learning</span>
                            </>
                          )}
                        </motion.div>
                      </InteractiveButton>
                    </div>
                  </div>
                </div>
              </GlassmorphismCard>
            </motion.div>
          )
        })}
      </div>

      {/* Progress Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: roadmap.length * 0.1 + 0.2 }}
        className="mt-8"
      >
        <GlassmorphismCard className="text-center">
          <h4 className="text-lg font-semibold text-foreground mb-2">Progress</h4>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-2xl font-bold text-primary">
              {completedSteps.size}/{roadmap.length}
            </span>
            <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(completedSteps.size / roadmap.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-sm text-muted-foreground">
              {Math.round((completedSteps.size / roadmap.length) * 100)}% Complete
            </span>
          </div>
        </GlassmorphismCard>
      </motion.div>
    </div>
  )
}
