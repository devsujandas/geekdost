"use client"

import { motion } from "framer-motion"
import { FaMapMarkerAlt } from "react-icons/fa"

interface RoadmapStepProps {
  index: number
  title: string
  topics: string[]
}

export function RoadmapStep({ index, title, topics }: RoadmapStepProps) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
      viewport={{ once: true }}
      className="relative flex w-full"
    >
      {/* 📍 Marker */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: index * 0.3 + 0.5,
          type: "spring",
        }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.9)] border-4 border-background animate-pulse">
          <FaMapMarkerAlt className="w-6 h-6" />
        </div>
      </motion.div>

      {/* ─ Connector line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{
          duration: 0.6,
          delay: index * 0.3 + 0.2,
        }}
        viewport={{ once: true }}
        className={`absolute top-1/2 h-0.5 bg-primary/50 ${
          isLeft
            ? "left-1/2 -translate-x-full w-16 origin-right"
            : "right-1/2 translate-x-full w-16 origin-left"
        }`}
      />

      {/* 🪧 Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.3 + 0.6,
        }}
        viewport={{ once: true }}
        className={`w-80 p-6 rounded-xl backdrop-blur-md bg-gradient-to-b from-white/10 to-white/5 border border-primary/30 shadow-lg hover:shadow-primary/50 transition ${
          isLeft ? "mr-auto text-left" : "ml-auto text-right"
        }`}
      >
        <h3 className="text-lg font-bold text-primary mb-2">
          {index + 1 < 10 ? `0${index + 1}` : index + 1}. {title}
        </h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          {topics.map((t, i) => (
            <li key={i}>• {t}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}
