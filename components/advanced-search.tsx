"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import { GlassmorphismCard } from "./glassmorphism-card"
import { InteractiveButton } from "./interactive-button"
import { getCategories, getDifficulties } from "@/lib/topics-data"

interface AdvancedSearchProps {
  onSearch: (query: string) => void
  onCategoryFilter: (category: string) => void
  onDifficultyFilter: (difficulty: string) => void
  onSort: (sortBy: string) => void
  searchQuery: string
  selectedCategory: string
  selectedDifficulty: string
  sortBy: string
  resultsCount: number
  totalCount: number
}

export function AdvancedSearch({
  onSearch,
  onCategoryFilter,
  onDifficultyFilter,
  onSort,
  searchQuery,
  selectedCategory,
  selectedDifficulty,
  sortBy,
  resultsCount,
  totalCount,
}: AdvancedSearchProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [localQuery, setLocalQuery] = useState(searchQuery)
  
  const categories = getCategories()
  const difficulties = getDifficulties()
  
  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "title", label: "Title A-Z" },
    { value: "difficulty", label: "Difficulty" },
    { value: "category", label: "Category" },
  ]

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      onSearch(localQuery)
    }, 300)
    return () => clearTimeout(delayedSearch)
  }, [localQuery, onSearch])

  const clearAllFilters = () => {
    setLocalQuery("")
    onSearch("")
    onCategoryFilter("All")
    onDifficultyFilter("All")
    onSort("default")
  }

  const hasActiveFilters =
    searchQuery || selectedCategory !== "All" || selectedDifficulty !== "All" || sortBy !== "default"

  return (
    <div className="w-full space-y-6 mb-8">
      {/* Main Search Bar */}
      <GlassmorphismCard>
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {/* Search Input */}
          <div className="flex-1 relative min-w-0">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
            <Input
              type="text"
              placeholder="Search topics, technologies, concepts..."
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              className="pl-10 pr-10 bg-input/50 border-border/50 focus:border-primary/50 w-full"
            />
            {localQuery && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLocalQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground z-10"
              >
                <FaTimes className="h-3 w-3" />
              </motion.button>
            )}
          </div>
          
          {/* Filter Toggle */}
          <div className="flex-shrink-0">
            <InteractiveButton
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center space-x-2 h-10 px-4 ${
                isFilterOpen ? "bg-primary/10 text-primary" : ""
              }`}
            >
              <FaFilter className="h-4 w-4" />
              <span>Filters</span>
              {hasActiveFilters && (
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  className="w-2 h-2 bg-primary rounded-full ml-1" 
                />
              )}
            </InteractiveButton>
          </div>
        </div>
      </GlassmorphismCard>

      {/* Advanced Filters */}
      <AnimatePresence mode="wait">
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 0 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
            style={{ zIndex: 1 }}
          >
            <GlassmorphismCard>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Category Filter */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => onCategoryFilter(e.target.value)}
                      className="w-full bg-input/50 border border-border/50 rounded-lg px-3 py-2.5 text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-background">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Difficulty Filter */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Difficulty
                    </label>
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => onDifficultyFilter(e.target.value)}
                      className="w-full bg-input/50 border border-border/50 rounded-lg px-3 py-2.5 text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      {difficulties.map((difficulty) => (
                        <option key={difficulty} value={difficulty} className="bg-background">
                          {difficulty}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort Options */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => onSort(e.target.value)}
                      className="w-full bg-input/50 border border-border/50 rounded-lg px-3 py-2.5 text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value} className="bg-background">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Clear Filters */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-transparent">
                      Action
                    </label>
                    <InteractiveButton
                      variant="outline"
                      onClick={clearAllFilters}
                      disabled={!hasActiveFilters}
                      className="w-full h-10 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Clear All
                    </InteractiveButton>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-3"
      >
        {/* Results Count */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex-1">
            Showing <span className="text-primary font-medium">{resultsCount}</span> of{" "}
            <span className="font-medium">{totalCount}</span> topics
            {searchQuery && (
              <span className="block sm:inline">
                {" "}for "<span className="text-primary font-medium">{searchQuery}</span>"
              </span>
            )}
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <span className="text-sm text-muted-foreground flex-shrink-0">Active filters:</span>
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== "All" && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                >
                  {selectedCategory}
                </motion.span>
              )}
              {selectedDifficulty !== "All" && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                >
                  {selectedDifficulty}
                </motion.span>
              )}
              {sortBy !== "default" && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                >
                  Sorted by {sortOptions.find((opt) => opt.value === sortBy)?.label}
                </motion.span>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
