"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import React from "react"
import { topicsData } from "@/lib/topics-utils"
import { PageLayout } from "@/components/page-layout"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { AdvancedSearch } from "@/components/advanced-search"
import { ScrollReveal } from "@/components/scroll-reveal"
import { InteractiveButton } from "@/components/interactive-button"
import { FiCode, FiFileText, FiList, FiTag } from "react-icons/fi"

export default function TopicsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [sortBy, setSortBy] = useState("all") // ✅ default all
  const [filteredTopics, setFilteredTopics] = useState(topicsData)
  const [visibleCount, setVisibleCount] = useState(9)

  // 🔥 New state for view toggle
  const [view, setView] = useState<"image" | "list">("image")

  useEffect(() => {
    let results = topicsData

    // 🔍 Search
    if (searchQuery.trim() !== "") {
      const query = searchQuery.trim().toLowerCase()
      results = results.filter(
        (t) =>
          t.title.toLowerCase().includes(query) ||
          (t.desc && t.desc.toLowerCase().includes(query))
      )
    }

    // 📂 Category
    if (selectedCategory !== "All") {
      results = results.filter((t) => t.category === selectedCategory)
    }

    // 🎯 Difficulty
    if (selectedDifficulty !== "All") {
      results = results.filter((t) => t.difficulty === selectedDifficulty)
    }

    // ⏳ Completion Time filter
    if (sortBy !== "all") {
      results = results.filter((t) => {
        const weeks = t.chapters?.reduce((acc, ch) => {
          const num = parseInt(ch.duration ?? "0")
          return acc + (isNaN(num) ? 0 : num)
        }, 0) || 0

        if (sortBy === "short") return weeks <= 1
        if (sortBy === "medium") return weeks >= 1 && weeks <= 4
        if (sortBy === "long") return weeks > 4
        return true
      })
    }

    setFilteredTopics(results)
    setVisibleCount(9)
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy])

  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-12">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <h1 className="text-4xl font-bold mb-4 text-gray-100">
                Explore Topics
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                Discover detailed notes, learning steps, and code examples to
                boost your journey.
              </p>
            </div>
          </ScrollReveal>

          {/* Advanced Search */}
          <ScrollReveal delay={0.2}>
            <div className="mb-8 sm:mb-12 relative z-10">
              <div className="sticky top-4 bg-background/95 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg p-4 sm:p-6">
                <AdvancedSearch
                  onSearch={setSearchQuery}
                  onCategoryFilter={setSelectedCategory}
                  onDifficultyFilter={setSelectedDifficulty}
                  onSort={setSortBy}
                  searchQuery={searchQuery}
                  selectedCategory={selectedCategory}
                  selectedDifficulty={selectedDifficulty}
                  sortBy={sortBy}
                  resultsCount={filteredTopics.length}
                  totalCount={topicsData.length}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* 🔥 Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-10">
            <InteractiveButton
              size="sm"
              variant={view === "image" ? "primary" : "outline"}
              onClick={() => setView("image")}
            >
              Image View
            </InteractiveButton>
            <InteractiveButton
              size="sm"
              variant={view === "list" ? "primary" : "outline"}
              onClick={() => setView("list")}
            >
              List View
            </InteractiveButton>
          </div>

          {/* Topics Grid */}
          <ScrollReveal delay={0.4}>
            {filteredTopics.length > 0 ? (
              <div className="relative z-0">
                <div
                  className={`grid ${
                    view === "list"
                      ? "grid-cols-1"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  } gap-6`}
                >
                  {filteredTopics.slice(0, visibleCount).map((topic, index) => {
                    const codeCount = topic.chapters.filter(
                      (ch) => ch.code && ch.code.trim() !== ""
                    ).length
                    const notesCount = topic.chapters.filter(
                      (ch) => ch.notes && ch.notes.trim() !== ""
                    ).length

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
                          className="h-full flex flex-col p-6 rounded-xl bg-background border border-border shadow-md cursor-pointer group hover:border-primary/50 transition-all"
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

                          {/* 🔥 Image for image view */}
                          {view === "image" && topic.image && (
                            <div className="relative h-40 w-full overflow-hidden rounded-lg mb-3">
                              <Image
                                src={
                                  (topic as any).image ??
                                  "/images/default-topic.jpg"
                                }
                                alt={topic.id}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          )}

                          {/* Description */}
                          <p className="text-base text-gray-300 line-clamp-3">
                            {topic.desc}
                          </p>

                          {/* Categories + Counts */}
                          {topic.categories && topic.categories.length > 0 && (
                            <>
                              {view === "image" ? (
                                <div className="flex flex-wrap gap-2 mt-3">
                                  {topic.categories.map(
                                    (cat: string, i: number) => (
                                      <span
                                        key={i}
                                        className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                                      >
                                        <FiTag className="w-3 h-3" /> {cat}
                                      </span>
                                    )
                                  )}
                                </div>
                              ) : (
                                <div className="flex justify-between items-center mt-3">
                                  <div className="flex flex-wrap gap-2">
                                    {topic.categories.map(
                                      (cat: string, i: number) => (
                                        <span
                                          key={i}
                                          className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                                        >
                                          <FiTag className="w-3 h-3" /> {cat}
                                        </span>
                                      )
                                    )}
                                  </div>
                                  <div className="flex gap-4 text-sm text-gray-400">
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
                            </>
                          )}

                          {/* Counts (only in image view) */}
                          {view === "image" && (
                            <div className="flex justify-between text-sm text-gray-400 mt-4">
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
                          )}

                          {/* Explore Button (only in image view) */}
                          {view === "image" && (
                            <div className="mt-auto">
                              <button className="mt-4 w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold tracking-wide hover:bg-primary/90 transition">
                                Explore
                              </button>
                            </div>
                          )}
                        </motion.div>
                      </Link>
                    )
                  })}
                </div>

                {/* Load More */}
                {visibleCount < filteredTopics.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                  >
                    <InteractiveButton
                      onClick={() => setVisibleCount((prev) => prev + 9)}
                      className="px-6 py-2 rounded-md text-sm sm:text-base border border-border text-foreground hover:bg-muted transition-colors"
                    >
                      Load More
                    </InteractiveButton>
                  </motion.div>
                )}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16 sm:py-20"
              >
                <GlassmorphismCard className="max-w-md mx-auto p-6 sm:p-8 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm">
                  <div className="text-4xl sm:text-5xl mb-4">🔍</div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    No topics found
                  </h3>
                  <p className="text-gray-500 mb-6 text-sm sm:text-base">
                    Try adjusting your search terms or filters to find what
                    you're looking for.
                  </p>
                  <InteractiveButton
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("All")
                      setSelectedDifficulty("All")
                      setSortBy("all")
                    }}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Clear All Filters
                  </InteractiveButton>
                </GlassmorphismCard>
              </motion.div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </PageLayout>
  )
}
