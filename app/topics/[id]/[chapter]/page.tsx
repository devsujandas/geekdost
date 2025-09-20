"use client"

import { use } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { topicsData } from "@/lib/topics-utils"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowLeft, Clock, FileText, PlayCircle } from "lucide-react"

export default function ChapterPage({
  params,
}: {
  params: Promise<{ id: string; chapter: string }>
}) {
  const { id, chapter } = use(params)

  const topic = topicsData.find((t) => t.id === id)
  const chapterData = topic?.chapters?.find((c) => c.id === chapter)

  if (!topic || !chapterData) {
    return <div className="p-6">❌ Chapter not found</div>
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      {/* Back Button */}
      <div>
        <Link
          href={`/topics/${topic.id}`}
          className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-muted hover:bg-accent transition"
        >
          <ArrowLeft size={16} /> Back to {topic.title}
        </Link>
      </div>

      {/* Header Card */}
      <ScrollReveal>
        <div className="rounded-2xl bg-card shadow-md p-10 text-center space-y-4">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary">
            {topic.icon ? <topic.icon size={32} /> : <FileText size={32} />}
          </div>

          {/* Title + Desc */}
          <h1 className="text-4xl font-bold">{chapterData.title}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {chapterData.desc}
          </p>

          {/* Duration */}
          {chapterData.duration && (
            <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground pt-2">
              <Clock className="w-4 h-4" /> {chapterData.duration}
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* Roadmap Title */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">Topics in this Chapter</h2>
      </div>

      {/* Topics List */}
      <ScrollReveal delay={0.2}>
        <div className="space-y-6 relative">
          {chapterData.topics?.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative"
            >
              <div className="relative rounded-xl bg-card p-5 shadow-sm hover:shadow-md transition border border-border space-y-3">
                {/* Timeline Dot + Line */}
                <div className="absolute -left-4 top-6 w-2 h-2 rounded-full bg-primary" />
                {index !== chapterData.topics.length - 1 && (
                  <div className="absolute -left-3 top-8 bottom-0 w-px bg-border" />
                )}

                {/* Number + Content */}
                <div className="flex items-start gap-4">
                  {/* Numbering */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                    {index + 1}
                  </div>

                  {/* Text */}
                  <div>
                    <h2 className="text-lg font-semibold">{t.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{t.note}</p>
                  </div>
                </div>

                {/* Button */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <Link
                    href={`/topics/${topic.id}/${chapterData.id}/${t.id}`}
                    className="inline-block px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  )
}
