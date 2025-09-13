"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { FloatingNavbar } from "./floating-navbar"
import { Footer } from "./footer"
import { BackToTop } from "./back-to-top"
import { ToastContainer } from "./toast-notification"
import { AccessibilitySkipLink } from "./accessibility-skip-link"
import { ErrorBoundary } from "./error-boundary"

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <AccessibilitySkipLink />
        <FloatingNavbar />
        <motion.main
          id="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-20 md:pt-24"
          role="main"
        >
          {children}
        </motion.main>
        <Footer />
        <BackToTop />
        <ToastContainer />
      </div>
    </ErrorBoundary>
  )
}
