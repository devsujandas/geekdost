"use client"

import { use } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { topicsData } from "@/lib/topics-utils"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

export default function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const topic = topicsData.find((t) => t.id === id)

  if (!topic) {
    return <div className="p-6">❌ Topic not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      {/* Back Button */}
      <div>
        <Link
          href="/"
          className="inline-block px-4 py-2 text-sm rounded-md bg-muted hover:bg-accent transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Header */}
      <ScrollReveal>
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">{topic.title}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{topic.desc}</p>
        </div>
      </ScrollReveal>

      {/* Chapters List */}
      <ScrollReveal delay={0.2}>
        <div className="space-y-4">
          {topic.chapters?.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Link
                href={`/topics/${topic.id}/${chapter.id}`}
                className="flex items-center justify-between gap-4 rounded-xl bg-card p-5 shadow-sm hover:shadow-md transition group"
              >
                {/* Number + Content */}
                <div className="flex items-start gap-4 flex-1">
                  {/* Numbering */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-muted text-sm font-medium text-foreground">
                    {index + 1}
                  </div>
                  {/* Text */}
                  <div>
                    <h2 className="text-lg font-semibold group-hover:text-primary transition">
                      {chapter.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {chapter.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
              </Link>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  )
}
