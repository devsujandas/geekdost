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
    <div className="space-y-4">
      {/* Main Search Bar */}
      <GlassmorphismCard>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search topics, technologies, concepts..."
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              className="pl-10 bg-input/50 border-border/50 focus:border-primary/50"
            />
            {localQuery && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLocalQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
              >
                <FaTimes className="h-3 w-3" />
              </motion.button>
            )}
          </div>

          {/* Filter Toggle */}
          <InteractiveButton
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center space-x-2 ${isFilterOpen ? "bg-primary/10 text-primary" : ""}`}
          >
            <FaFilter className="h-4 w-4" />
            <span>Filters</span>
            {hasActiveFilters && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-primary rounded-full" />
            )}
          </InteractiveButton>
        </div>
      </GlassmorphismCard>

      {/* Advanced Filters */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GlassmorphismCard>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => onCategoryFilter(e.target.value)}
                    className="w-full bg-input/50 border border-border/50 rounded-lg px-3 py-2 text-foreground focus:border-primary/50 focus:outline-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Difficulty Filter */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Difficulty</label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => onDifficultyFilter(e.target.value)}
                    className="w-full bg-input/50 border border-border/50 rounded-lg px-3 py-2 text-foreground focus:border-primary/50 focus:outline-none"
                  >
                    {difficulties.map((difficulty) => (
                      <option key={difficulty} value={difficulty}>
                        {difficulty}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => onSort(e.target.value)}
                    className="w-full bg-input/50 border border-border/50 rounded-lg px-3 py-2 text-foreground focus:border-primary/50 focus:outline-none"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <InteractiveButton
                    variant="outline"
                    onClick={clearAllFilters}
                    disabled={!hasActiveFilters}
                    className="w-full"
                  >
                    Clear All
                  </InteractiveButton>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-between text-sm text-muted-foreground"
      >
        <div>
          Showing <span className="text-primary font-medium">{resultsCount}</span> of{" "}
          <span className="font-medium">{totalCount}</span> topics
          {searchQuery && (
            <span>
              {" "}
              for "<span className="text-primary">{searchQuery}</span>"
            </span>
          )}
        </div>

        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <span>Active filters:</span>
            <div className="flex space-x-1">
              {selectedCategory !== "All" && (
                <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">{selectedCategory}</span>
              )}
              {selectedDifficulty !== "All" && (
                <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">{selectedDifficulty}</span>
              )}
              {sortBy !== "default" && (
                <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">
                  Sorted by {sortOptions.find((opt) => opt.value === sortBy)?.label}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
