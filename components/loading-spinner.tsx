"use client"

import { motion } from "framer-motion"
import { FaCode } from "react-icons/fa"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  text?: string
}

export function LoadingSpinner({ size = "md", text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className={`${sizeClasses[size]} text-primary`}
      >
        <FaCode />
      </motion.div>
      {text && <p className="text-muted-foreground text-sm">{text}</p>}
    </div>
  )
}
