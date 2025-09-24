"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { getRoadmap } from "@/lib/roadmap-data"
import { RoadmapTimeline } from "@/components/RoadmapTimeline"
import { FaRocket, FaArrowLeft } from "react-icons/fa"

export default async function RoadmapDetailPage({
  params,
}: {
  params: Promise<{ subject: string; level: string }>
}) {
  const { subject, level } = await params // ✅ await directly

  const roadmap = getRoadmap(subject, level)

  if (!roadmap) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        ❌ Roadmap not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          href={`/roadmap/${subject}`}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <FaArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
      </div>

      {/* Header Card */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="p-8 rounded-xl border border-border bg-card shadow-md text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 capitalize">
            {roadmap.title}
          </h1>
          <p className="text-muted-foreground text-lg flex items-center justify-center gap-2">
            <span>
              Follow this step-by-step roadmap to master{" "}
              <span className="capitalize">{subject}</span> at{" "}
              {level.charAt(0).toUpperCase() + level.slice(1)} level
            </span>
            <FaRocket className="text-primary h-5 w-5" />
          </p>
        </div>
      </motion.div>

      {/* Roadmap Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <RoadmapTimeline chapters={roadmap.chapters} />
      </motion.div>
    </div>
  )
}
