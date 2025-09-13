"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { topicsData, searchTopics, sortTopics } from "@/lib/topics-data"
import { PageLayout } from "@/components/page-layout"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { TopicCard } from "@/components/topic-card"
import { AdvancedSearch } from "@/components/advanced-search"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggeredList } from "@/components/staggered-list"
import { InteractiveButton } from "@/components/interactive-button"

export default function TopicsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [sortBy, setSortBy] = useState("default")
  const [filteredTopics, setFilteredTopics] = useState(topicsData)

  useEffect(() => {
    let results = topicsData

    if (searchQuery.trim() !== "") {
      results = searchTopics(searchQuery)
    }

    if (selectedCategory !== "All") {
      results = results.filter((topic) => topic.category === selectedCategory)
    }

    if (selectedDifficulty !== "All") {
      results = results.filter((topic) => topic.difficulty === selectedDifficulty)
    }

    results = sortTopics(results, sortBy)

    setFilteredTopics(results)
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy])

  return (
    <PageLayout>
      <div className="container mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
              All Programming Topics
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive collection of programming topics, roadmaps, and code examples
              to accelerate your learning journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Advanced Search */}
        <ScrollReveal delay={0.2}>
          <div className="mb-14">
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
        </ScrollReveal>

        {/* Topics Grid */}
        <ScrollReveal delay={0.4}>
          {filteredTopics.length > 0 ? (
            <StaggeredList
              stagger={0.06}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredTopics.map((topic) => (
                <div key={topic.id} className="w-full h-full">
                  <TopicCard topic={topic} />
                </div>
              ))}
            </StaggeredList>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <GlassmorphismCard>
                <h3 className="text-2xl font-semibold text-foreground mb-4">No topics found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <InteractiveButton
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All")
                    setSelectedDifficulty("All")
                    setSortBy("default")
                  }}
                  variant="outline"
                >
                  Clear All Filters
                </InteractiveButton>
              </GlassmorphismCard>
            </motion.div>
          )}
        </ScrollReveal>
      </div>
    </PageLayout>
  )
}
