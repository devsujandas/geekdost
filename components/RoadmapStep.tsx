"use client"

import { motion } from "framer-motion"
import { FaClock } from "react-icons/fa"

interface RoadmapStepProps {
  index: number
  title: string
  topics: string[]
  time?: string
}

export function RoadmapStep({ index, title, topics, time }: RoadmapStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative pl-14 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-border/60" />

      {/* Step Number Badge */}
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 220, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="absolute left-0 top-6 w-8 h-8 flex items-center justify-center rounded-full 
                   bg-gradient-to-r from-primary/90 to-primary 
                   text-white text-xs font-bold ring-2 ring-background shadow-md"
      >
        {index + 1}
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.6, delay: index * 0.25 }}
        viewport={{ once: true }}
        className="relative p-6 rounded-xl bg-card border border-border 
                   shadow-sm group-hover:shadow-lg transition-all duration-300"
      >
        {/* Decorative Corner Accent */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-bl-lg" />

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>

        {/* Time (just below title) */}
        {time && (
          <div className="flex items-center gap-2 mt-1 mb-3 text-xs font-medium text-muted-foreground">
            <FaClock className="h-3 w-3 text-primary" />
            <span>{time}</span>
          </div>
        )}

        {/* Topics */}
        <ul className="text-sm text-muted-foreground space-y-1 leading-relaxed">
          {topics.map((t, i) => (
            <li key={i} className="flex gap-2 items-start">
              <span className="text-primary">▹</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}
