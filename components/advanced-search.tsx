import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import { GlassmorphismCard } from "./glassmorphism-card"
import { InteractiveButton } from "./interactive-button"
import { topicsData } from "@/lib/topics-utils"

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

  // ✅ ensure category/difficulty are always strings
  const categories = [
    "All",
    ...Array.from(
      new Set(topicsData.map((topic) => topic.category ?? "Uncategorized"))
    ),
  ] as string[]

  const difficulties = [
    "All",
    ...Array.from(
      new Set(topicsData.map((topic) => topic.difficulty ?? "Unknown"))
    ),
  ] as string[]

  // ✅ Completion Time filter ranges
  const completionTimes = [
    { value: "all", label: "All" },
    { value: "short", label: "Learn Fast (1 Week)" },
    { value: "medium", label: "Standard Track (1–4W)" },
    { value: "long", label: "Long-Term Path (4+W)" },
  ]

  // ✅ Boolean Search Parser
  function parseBooleanSearch(query: string) {
    if (!query) return ""
    const q = query.toLowerCase()
    if (q.includes(" and ")) {
      const parts = q.split(" and ").map((p) => p.trim())
      return JSON.stringify({ type: "AND", terms: parts })
    } else if (q.includes(" or ")) {
      const parts = q.split(" or ").map((p) => p.trim())
      return JSON.stringify({ type: "OR", terms: parts })
    } else if (q.includes(" not ")) {
      const parts = q.split(" not ").map((p) => p.trim())
      return JSON.stringify({ type: "NOT", terms: parts })
    }
    return query
  }

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      onSearch(parseBooleanSearch(localQuery))
    }, 300)
    return () => clearTimeout(delayedSearch)
  }, [localQuery, onSearch])

  const clearAllFilters = () => {
    setLocalQuery("")
    onSearch("")
    onCategoryFilter("All")
    onDifficultyFilter("All")
    onSort("all")
  }

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== "All" ||
    selectedDifficulty !== "All" ||
    sortBy !== "all"

  return (
    <div className="w-full space-y-6 mb-8">
      {/* Main Search Bar with Boolean Support */}
      <GlassmorphismCard>
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          <div className="flex-1 relative min-w-0">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
            <Input
              type="text"
              placeholder="Search anything..."
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

          <div className="flex-shrink-0">
            <InteractiveButton
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`px-4 h-10 text-sm font-medium transition-colors ${
                isFilterOpen ? "bg-primary/10 text-primary" : ""
              }`}
            >
              <div className="flex flex-row items-center gap-2">
                <FaFilter className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">Filters</span>
                {hasActiveFilters && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-primary rounded-full shrink-0"
                  />
                )}
              </div>
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
                      className="w-full bg-background text-foreground border border-border/50 rounded-lg px-3 py-2.5"
                    >
                      {categories.map((category) => (
                        <option
                          key={category}
                          value={category}
                          className="bg-background text-foreground"
                        >
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
                      className="w-full bg-background text-foreground border border-border/50 rounded-lg px-3 py-2.5"
                    >
                      {difficulties.map((difficulty) => (
                        <option
                          key={difficulty}
                          value={difficulty}
                          className="bg-background text-foreground"
                        >
                          {difficulty}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* ✅ Completion Time Filter */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Completion Time
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => onSort(e.target.value)}
                      className="w-full bg-background text-foreground border border-border/50 rounded-lg px-3 py-2.5"
                    >
                      {completionTimes.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className="bg-background text-foreground"
                        >
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
                      variant="primary"
                      onClick={clearAllFilters}
                      disabled={!hasActiveFilters}
                      className="w-full h-10 rounded-lg bg-red-600 text-white"
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex-1">
            Showing{" "}
            <span className="text-primary font-medium">{resultsCount}</span> of{" "}
            <span className="font-medium">{totalCount}</span> topics
            {searchQuery && (
              <span className="block sm:inline">
                {" "}
                for "
                <span className="text-primary font-medium">{searchQuery}</span>"
              </span>
            )}
          </div>
        </div>

        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <span className="text-sm text-muted-foreground flex-shrink-0">
              Active filters:
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== "All" && (
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                  {selectedCategory}
                </span>
              )}
              {selectedDifficulty !== "All" && (
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                  {selectedDifficulty}
                </span>
              )}
              {sortBy !== "all" && (
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                  {completionTimes.find((c) => c.value === sortBy)?.label}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
