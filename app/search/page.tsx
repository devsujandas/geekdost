"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaSearch, FaLightbulb } from "react-icons/fa"
import { topicsData, searchTopics } from "@/lib/topics-data"
import { PageLayout } from "@/components/page-layout"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { TopicCard } from "@/components/topic-card"
import { Input } from "@/components/ui/input"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState(topicsData)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      if (searchQuery.trim() === "") {
        setSearchResults(topicsData)
      } else {
        setIsSearching(true)
        const results = searchTopics(searchQuery)
        setSearchResults(results)
        setIsSearching(false)
      }
    }, 300)

    return () => clearTimeout(delayedSearch)
  }, [searchQuery])

  const popularSearches = ["Python", "JavaScript", "React", "Docker", "Machine Learning", "Git", "SQL", "AWS"]

  return (
    <PageLayout>
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Search Topics</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Find exactly what you're looking for. Search through our comprehensive collection of programming topics,
            roadmaps, and code examples.
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <GlassmorphismCard className="max-w-2xl mx-auto">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for topics, technologies, concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-input/50 border-border/50 focus:border-primary/50"
              />
            </div>
          </GlassmorphismCard>
        </motion.div>

        {/* Popular Searches */}
        {searchQuery === "" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <GlassmorphismCard>
              <h3 className="text-base font-medium text-foreground mb-4 flex items-center justify-center">
                <FaLightbulb className="h-4 w-4 text-primary mr-2" />
                Popular Searches
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {popularSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => setSearchQuery(search)}
                    className="
                      px-3 py-1.5 rounded-md text-sm
                      border border-border text-foreground
                      hover:bg-muted transition-colors
                    "
                  >
                    {search}
                  </button>
                ))}
              </div>
            </GlassmorphismCard>
          </motion.div>
        )}

        {/* Search Results */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
          {searchQuery && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                {isSearching ? "Searching..." : `Search Results for "${searchQuery}"`}
              </h2>
              <p className="text-muted-foreground">
                {isSearching ? "Finding relevant topics..." : `Found ${searchResults.length} matching topics`}
              </p>
            </div>
          )}

          {/* Results Grid - desktop এ 3 column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((topic, index) => (
              <TopicCard key={topic.id} topic={topic} delay={0.1 + index * 0.05} />
            ))}
          </div>

          {/* No Results */}
          {searchQuery && searchResults.length === 0 && !isSearching && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <GlassmorphismCard>
                <FaSearch className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">No results found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any topics matching "{searchQuery}". Try different keywords or browse all topics.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSearchQuery("")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Clear Search
                </motion.button>
              </GlassmorphismCard>
            </motion.div>
          )}
        </motion.div>
      </div>
    </PageLayout>
  )
}
