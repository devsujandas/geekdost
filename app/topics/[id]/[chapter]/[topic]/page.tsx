"use client"

import { use } from "react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { topicsData } from "@/lib/topics-utils"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { ArrowLeft, Notebook, Code2, Copy, FileText } from "lucide-react"
import Prism from "prismjs"

//  Lightweight, readable theme for real code feel
import "prismjs/themes/prism-tomorrow.css"

import "prismjs/components/prism-python"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-typescript"

export default function TopicDetailPage({
  params,
}: {
  params: Promise<{ id: string; chapter: string; topic: string }>
}) {
  const { id, chapter, topic } = use(params)

  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  const mainTopic = topicsData.find((t) => t.id === id)
  const chapterData = mainTopic?.chapters?.find((c) => c.id === chapter)
  const topicData = chapterData?.topics?.find((tp) => tp.id === topic)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) Prism.highlightAll()
  }, [mounted, topicData?.code])

  if (!mainTopic || !chapterData || !topicData) {
    return <div className="p-6 text-center text-red-500">❌ Topic not found</div>
  }

  const handleCopy = async () => {
    if (topicData.code) {
      await navigator.clipboard.writeText(topicData.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Back Button */}
      <Link
        href={`/topics/${mainTopic.id}/${chapterData.id}`}
        className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-muted hover:bg-accent transition"
      >
        <ArrowLeft size={16} /> Back to {chapterData.title}
      </Link>

      {/* Header */}
      <ScrollReveal>
  <div className="rounded-2xl bg-card shadow-md p-8 text-center space-y-3">
    <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary">
      {mainTopic.icon ? <mainTopic.icon size={28} /> : <FileText size={28} />}
    </div>
    <h1 className="text-3xl font-bold">{topicData.title}</h1>
    {topicData.desc && (
      <p className="text-muted-foreground max-w-xl mx-auto">
        {topicData.desc}
      </p>
    )}
  </div>
</ScrollReveal>


      {/* Notes Section */}
      {topicData.note && (
        <ScrollReveal delay={0.2}>
          <div className="p-5 rounded-xl bg-accent/10 border border-border">
            <div className="flex items-center gap-2 font-semibold text-base mb-2">
              <Notebook className="w-5 h-5 text-primary" /> Key Notes
            </div>
            <p className="leading-relaxed text-foreground">{topicData.note}</p>
          </div>
        </ScrollReveal>
      )}

      {/* Code Section */}
      {topicData.code && mounted && (
        <ScrollReveal delay={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold">
                <Code2 className="w-5 h-5 text-primary" /> Example Code
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-md bg-muted hover:bg-accent transition"
              >
                <Copy size={16} />
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="rounded-lg border border-border overflow-hidden">
              <pre className="p-4 text-sm overflow-x-auto bg-[#1e1e1e] text-white">
                <code className="language-python">{topicData.code}</code>
              </pre>
            </div>
          </motion.div>
        </ScrollReveal>
      )}
    </div>
  )
}
