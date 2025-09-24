"use client"

import { motion } from "framer-motion"
import { getSubjects } from "@/lib/roadmap-data"
import { SubjectCard } from "@/components/SubjectCard"
import { PageLayout } from "@/components/page-layout"

export default function RoadmapSubjectsPage() {
  const subjects = getSubjects()

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4">
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Choose a Subject
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore detailed roadmaps for programming languages and subjects.
              Start your journey from Beginner, grow to Intermediate, and
              master Advanced concepts.
            </p>
          </motion.div>

          {/* Subjects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {subjects.map((subject, index) => (
              <motion.div
                key={subject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <SubjectCard subject={subject} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
