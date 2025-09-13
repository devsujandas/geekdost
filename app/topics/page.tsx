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

        {/* Enhanced Topics Grid Section */}
        <ScrollReveal delay={0.4}>
          {filteredTopics.length > 0 ? (
            <div className="relative">
              {/* Results Count Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {filteredTopics.length} {filteredTopics.length === 1 ? 'Topic' : 'Topics'} Found
                    </span>
                  </motion.div>
                  
                  {/* Quick filter tags */}
                  {searchQuery && (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span>Searching for:</span>
                      <span className="px-2 py-1 rounded-md bg-accent/50 text-accent-foreground font-medium">
                        "{searchQuery}"
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* View toggle buttons */}
                <div className="hidden md:flex items-center gap-2 p-1 rounded-lg bg-muted/50 backdrop-blur-sm">
                  <button className="p-2 rounded-md bg-background/80 shadow-sm transition-all duration-200 hover:bg-background">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-md transition-all duration-200 hover:bg-background/80">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Enhanced Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {filteredTopics.map((topic, index) => (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative"
                  >
                    {/* Decorative background element */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    
                    {/* Card wrapper with enhanced styling */}
                    <div className="relative h-full transform transition-all duration-200 group-hover:scale-[1.02]">
                      <TopicCard topic={topic} />
                    </div>

                    {/* Floating index number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      {index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Load more button (if needed) */}
              {filteredTopics.length > 12 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-center mt-12"
                >
                  <InteractiveButton
                    variant="outline"
                    className="px-8 py-3 bg-background/80 backdrop-blur-sm border-2 border-muted hover:border-foreground/20 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      Load More Topics
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </span>
                  </InteractiveButton>
                </motion.div>
              )}
            </div>
          ) : (
            /* Enhanced Empty State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="relative max-w-md mx-auto">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl" />
                
                <GlassmorphismCard>
                  <div className="relative z-10 p-8">
                    {/* Empty state icon */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      No Topics Found
                    </h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      We couldn't find any topics matching your search criteria. 
                      Try adjusting your filters or search terms.
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <InteractiveButton
                        onClick={() => {
                          setSearchQuery("")
                          setSelectedCategory("All")
                          setSelectedDifficulty("All")
                          setSortBy("default")
                        }}
                        variant="outline"
                        className="px-6 py-2.5"
                      >
                        Clear All Filters
                      </InteractiveButton>
                      
                      <InteractiveButton
                        onClick={() => setSearchQuery("")}
                        className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      >
                        Reset Search
                      </InteractiveButton>
                    </div>
                  </div>
                </GlassmorphismCard>
              </div>
            </motion.div>
          )}
        </ScrollReveal>
      </div>
    </PageLayout>
  )
}
