"use client"

import { motion } from "framer-motion"
import { FaBookOpen, FaCode, FaUsers, FaAward } from "react-icons/fa"
import { FiList, FiCode, FiFileText, FiTag } from "react-icons/fi"
import { topicsData } from "@/lib/topics-utils"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { PageLayout } from "@/components/page-layout"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"
import { FloatingElements } from "@/components/floating-elements"
import { InteractiveButton } from "@/components/interactive-button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

export default function HomePage() {
  const router = useRouter()

  const filteredTopics = topicsData
  const visibleCount = topicsData.length

  //  Global counts
  const totalChapters =
    topicsData.reduce((acc, t) => acc + (t.chapters?.length || 0), 0) || 0

  const totalSnippets =
    topicsData.reduce((acc, t) => {
      return (
        acc +
        (t.chapters?.reduce((chAcc, ch) => {
          const chapterCode = ch.code?.trim() ? 1 : 0
          const topicCodes =
            ch.topics?.filter((tp) => tp.code?.trim()).length || 0
          return chAcc + chapterCode + topicCodes
        }, 0) || 0)
      )
    }, 0) || 0

  const totalNotes =
    topicsData.reduce((acc, t) => {
      return acc + (t.chapters?.reduce((chAcc, ch) => chAcc + (ch.topics?.length || 0), 0) || 0)
    }, 0) || 0

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <FloatingElements />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground font-bold mb-4"
            >
              Roadmaps & Snippets for Developers
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            >
              Your ultimate developer hub for programming roadmaps, code
              snippets, and learning resources. Master the skills that matter
              with curated content and practical examples.
            </motion.p>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
            >
              <GlassmorphismCard delay={0.7} className="text-center">
                <FaBookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={filteredTopics.length} suffix="+" />
                </h3>
                <p className="text-muted-foreground text-sm">
                  Programming Topics
                </p>
              </GlassmorphismCard>

              <GlassmorphismCard delay={0.8} className="text-center">
                <FaCode className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={totalSnippets} suffix="+" />
                </h3>
                <p className="text-muted-foreground text-sm">Code Snippets</p>
              </GlassmorphismCard>

              <GlassmorphismCard delay={0.9} className="text-center">
                <FaUsers className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={totalNotes} suffix="+" />
                </h3>
                <p className="text-muted-foreground text-sm">Notes</p>
              </GlassmorphismCard>

              <GlassmorphismCard delay={1.0} className="text-center">
                <FaAward className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={18} suffix="+" />
                </h3>
                <p className="text-muted-foreground text-sm">
                  Subjects with Tests & Certificates
                </p>
              </GlassmorphismCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Topics Grid Section */}
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Programming Topics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Choose from our curated collection of programming topics, each with
            detailed roadmaps, practical notes, and ready-to-use code snippets.
          </p>
        </div>

        {/* Topics Grid */}
        <ScrollReveal delay={0.4}>
          {filteredTopics.length > 0 && (
            <div className="relative z-0">
              <div className="grid grid-cols-1 gap-6">
                {filteredTopics.slice(0, visibleCount).map((topic, index) => {
                  //  Count snippets properly
                  const codeCount =
                    topic.chapters?.reduce((acc, ch) => {
                      const chapterCode = ch.code?.trim() ? 1 : 0
                      const topicCodes =
                        ch.topics?.filter((tp) => tp.code?.trim()).length || 0
                      return acc + chapterCode + topicCodes
                    }, 0) || 0

                  //  Count notes properly (total topics)
                  const notesCount =
                    topic.chapters?.reduce(
                      (acc, ch) => acc + (ch.topics?.length || 0),
                      0
                    ) || 0

                  return (
                    <Link key={topic.id} href={`/topics/${topic.id}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.06,
                          ease: "easeOut",
                        }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="p-6 rounded-xl bg-background border border-border shadow-md cursor-pointer group hover:border-primary/50 transition-all"
                      >
                        {/* Category & Difficulty */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs px-2 py-1 rounded text-gray-200">
                            {topic.category || topic.categories?.join(", ")}
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded font-medium ${
                              topic.difficulty === "Beginner"
                                ? "bg-green-600 text-white"
                                : topic.difficulty === "Intermediate"
                                ? "bg-yellow-600 text-white"
                                : "bg-red-600 text-white"
                            }`}
                          >
                            {topic.difficulty}
                          </span>
                        </div>

                        {/* Icon + Title */}
                        <div className="flex items-center gap-2 mb-2">
                          {topic.icon &&
                            React.createElement(topic.icon, {
                              className: "w-6 h-6 text-primary",
                            })}
                          <h2 className="text-xl font-bold text-gray-100 group-hover:text-primary transition-colors">
                            {topic.title}
                          </h2>
                        </div>

                        {/* Description */}
                        <p className="text-base text-gray-300 line-clamp-3">
                          {topic.desc}
                        </p>

                        {/* Categories + Counts (List View Only) */}
                        {topic.categories && topic.categories.length > 0 && (
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 gap-3">
                            {/* Categories */}
                            <div className="flex flex-wrap gap-2">
                              {topic.categories.map((cat: string, i: number) => (
                                <span
                                  key={i}
                                  className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                                >
                                  <FiTag className="w-3 h-3" /> {cat}
                                </span>
                              ))}
                            </div>
                            {/* Counts */}
                            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                              <span className="flex items-center gap-1">
                                <FiList className="w-4 h-4 text-gray-600" />
                                {topic.chapters?.length} chapters
                              </span>
                              <span className="flex items-center gap-1">
                                <FiCode className="w-4 h-4" /> {codeCount} Snippets
                              </span>
                              <span className="flex items-center gap-1">
                                <FiFileText className="w-4 h-4" /> {notesCount} Notes
                              </span>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>

      {/* Call to Action Section */}
      <ScrollReveal>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <GlassmorphismCard className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Level Up Your Skills?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of developers who are accelerating their
                  learning journey with our roadmaps, snippets and tests. Start
                  exploring today.
                </p>
                <InteractiveButton
                  size="lg"
                  onClick={() => router.push("/topics")}
                >
                  Start Learning Now
                </InteractiveButton>
              </motion.div>
            </GlassmorphismCard>
          </div>
        </section>
      </ScrollReveal>
    </PageLayout>
  )
}
