"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function GlassmorphismCard({ children, className, hover = true, delay = 0 }: GlassmorphismCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      className={cn(
        "glass glass-hover rounded-xl p-6 backdrop-blur-md",
        "border border-white/10 shadow-xl",
        "transition-all duration-300",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
