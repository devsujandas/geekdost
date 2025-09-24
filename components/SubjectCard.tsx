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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-6 rounded-xl bg-card border border-border shadow-md hover:shadow-lg transition"
    >
      <Link href={`/roadmap/${subject}`}>
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Icon */}
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            <IconComponent className="w-8 h-8" />
          </div>

          {/* Subject Name */}
          <h2 className="text-lg font-bold text-primary capitalize">
            {subject.replace(/-/g, " ")}
          </h2>

          {/* Description */}
          <p className="text-sm text-muted-foreground">{meta.description}</p>

          {/* Estimated Time */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground italic">
            <FaRegClock className="w-4 h-4 text-primary" />
            <span>{meta.time}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
