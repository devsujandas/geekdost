"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface SubjectCardProps {
  subject: string
}

export function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-6 rounded-xl bg-card border border-border shadow-md hover:shadow-lg transition"
    >
      <Link href={`/roadmap/${subject}`}>
        <h2 className="text-xl font-bold text-primary capitalize">{subject}</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Explore the {subject} roadmap
        </p>
      </Link>
    </motion.div>
  )
}
