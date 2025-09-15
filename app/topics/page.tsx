"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { topicsData, searchTopics, sortTopics } from "@/lib/topics-data"
import { PageLayout } from "@/components/page-layout"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { TopicCard } from "@/components/topic-card"
import { AdvancedSearch } from "@/components/advanced-search"
import { ScrollReveal } from "@/components/scroll-reveal"
import { InteractiveButton } from "@/components/interactive-button"

export default function TopicsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [sortBy, setSortBy] = useState("default")
  const [filteredTopics, setFilteredTopics] = useState(topicsData)

  // নতুন state for load more
  const [visibleCount, setVisibleCount] = useState(9)

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
    setVisibleCount(9) // filter পরিবর্তন হলে reset করে প্রথম 9টা দেখাবে
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy])

  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-5">
                All Programming Topics
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                Explore our comprehensive collection of programming topics, roadmaps, and code examples
                to accelerate your learning journey.
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

          {/* Topics Grid */}
          <ScrollReveal delay={0.4}>
            {filteredTopics.length > 0 ? (
              <div className="relative z-0">
                {/* Responsive Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {filteredTopics.slice(0, visibleCount).map((topic, index) => (
                    <motion.div
                      key={topic.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6,
                        delay: index * 0.06,
                        ease: "easeOut"
                      }}
                      className="w-full h-full"
                    >
                      <TopicCard topic={topic} />
                    </motion.div>
                  ))}
                </div>

                {/* Load More Button */}
                {visibleCount < filteredTopics.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                  >
                    <InteractiveButton
                      variant="outline"
                      className="px-8 py-3"
                      onClick={() => setVisibleCount((prev) => prev + 9)}
                    >
                      Load More Topics
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
                <GlassmorphismCard className="max-w-md mx-auto">
                  <div className="p-6 sm:p-8">
                    <div className="text-4xl sm:text-5xl mb-4">🔍</div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                      No topics found
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm sm:text-base">
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
                      className="w-full sm:w-auto"
                    >
                      Clear All Filters
                    </InteractiveButton>
                  </div>
                </GlassmorphismCard>
              </motion.div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </PageLayout>
  )
}
