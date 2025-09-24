"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import * as Icons from "react-icons/fa"
import * as SiIcons from "react-icons/si"
import { FaRegClock, FaBook } from "react-icons/fa"
import { getMeta } from "@/lib/roadmap-data"

interface SubjectCardProps {
  subject: string
}

export function SubjectCard({ subject }: SubjectCardProps) {
  const meta = getMeta(subject)

  if (!meta) return null

  const IconComponent =
    (Icons as any)[meta.icon] || (SiIcons as any)[meta.icon] || FaBook

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link
        href={`/roadmap/${subject}`}
        className="relative flex flex-col justify-between h-full p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition"
      >
        {/* Time Info - Top Right */}
        <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-medium text-muted-foreground">
          <FaRegClock className="w-4 h-4 text-primary" />
          <span>{meta.time}</span>
        </div>

        {/* Top content */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary shadow-inner">
            <IconComponent className="w-8 h-8" />
          </div>

          {/* Subject Name */}
          <h2 className="text-xl font-bold text-primary capitalize">
            {meta.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {meta.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
