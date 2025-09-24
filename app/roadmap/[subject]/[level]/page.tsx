"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { getRoadmap } from "@/lib/roadmap-data"
import { RoadmapTimeline } from "@/components/RoadmapTimeline"

export default function RoadmapDetailPage({
  params,
}: {
  params: Promise<{ subject: string; level: string }>
}) {
  const { subject, level } = React.use(params)
  const roadmap = getRoadmap(subject, level)

  if (!roadmap) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        ❌ Roadmap not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background py-16 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          {roadmap.title}
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Follow this step-by-step roadmap to master{" "}
          <span className="capitalize">{subject}</span> at{" "}
          {level.charAt(0).toUpperCase() + level.slice(1)} level 🚀
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <RoadmapTimeline chapters={roadmap.chapters} />
      </motion.div>
    </div>
  )
}
