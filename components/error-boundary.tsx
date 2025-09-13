"use client"

import { Component, type ReactNode } from "react"
import { motion } from "framer-motion"
import { FaExclamationTriangle, FaRedo } from "react-icons/fa"
import { GlassmorphismCard } from "./glassmorphism-card"
import { InteractiveButton } from "./interactive-button"

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <GlassmorphismCard className="text-center max-w-md">
              <FaExclamationTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Something went wrong</h2>
              <p className="text-muted-foreground mb-6">
                We encountered an unexpected error. Please try refreshing the page or contact support if the problem
                persists.
              </p>
              <InteractiveButton onClick={() => window.location.reload()} className="flex items-center space-x-2">
                <FaRedo className="h-4 w-4" />
                <span>Refresh Page</span>
              </InteractiveButton>
            </GlassmorphismCard>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}
