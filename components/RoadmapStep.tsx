"use client"

import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"

interface RoadmapStepProps {
  index: number
  title: string
  topics: string[]
  time?: string
}

export function RoadmapStep({ index, title, topics, time }: RoadmapStepProps) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.25 }}
      viewport={{ once: true }}
      className="relative flex w-full"
    >
      {/* 📍 Marker */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: index * 0.25 + 0.4,
          type: "spring",
        }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md border-4 border-background">
          <FaMapMarkerAlt className="w-5 h-5" />
        </div>
      </motion.div>

      {/* ─ Connector line */}
      <div
        className={`absolute top-1/2 h-0.5 bg-border 
        ${isLeft ? "left-1/2 -translate-x-full w-16" : "right-1/2 translate-x-full w-16"}`}
      />

      {/* 🪧 Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.25 + 0.5 }}
        viewport={{ once: true }}
        className={`w-80 p-6 rounded-xl bg-card border border-border shadow-md hover:shadow-lg transition
          ${isLeft ? "mr-auto" : "ml-auto"}
        `}
      >
        {/* Title */}
        <h3 className="text-lg font-bold text-primary mb-3">
          {index + 1 < 10 ? `0${index + 1}` : index + 1}. {title}
        </h3>

        {/* Topics */}
        <ul className="text-sm text-muted-foreground space-y-1 text-left">
          {topics.map((t, i) => (
            <li key={i}>• {t}</li>
          ))}
        </ul>

        {/* Time */}
        {time && (
          <div className="flex items-center gap-2 mt-4 text-xs font-medium text-muted-foreground justify-start">
            <FaClock className="h-3 w-3 text-primary" />
            <span>{time}</span>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
