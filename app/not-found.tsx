"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaHome, FaSearch, FaExclamationTriangle } from "react-icons/fa"
import { PageLayout } from "@/components/page-layout"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { InteractiveButton } from "@/components/interactive-button"

export default function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl"
        >
          <GlassmorphismCard>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <FaExclamationTriangle className="h-24 w-24 text-yellow-500 mx-auto mb-4" />
              <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <h2 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track with our
                programming resources.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <InteractiveButton className="flex items-center space-x-2">
                    <FaHome className="h-4 w-4" />
                    <span>Go Home</span>
                  </InteractiveButton>
                </Link>
                <Link href="/search">
                  <InteractiveButton variant="outline" className="flex items-center space-x-2">
                    <FaSearch className="h-4 w-4" />
                    <span>Search Topics</span>
                  </InteractiveButton>
                </Link>
              </div>
            </motion.div>
          </GlassmorphismCard>
        </motion.div>
      </div>
    </PageLayout>
  )
}
