"use client"

import { use } from "react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { topicsData } from "@/lib/topics-utils"
import { ArrowLeft, Notebook, Code2, Copy } from "lucide-react"
import Prism from "prismjs"

//  Prism themes import
import "prism-themes/themes/prism-ghcolors.css"
import "prism-themes/themes/prism-night-owl.css"

//  Load common languages
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-python"
import "prismjs/components/prism-java"
import "prismjs/components/prism-c"
import "prismjs/components/prism-cpp"

export default function ChapterPage({
  params,
}: {
  params: Promise<{ id: string; chapter: string }>
}) {
  const { id, chapter } = use(params)

  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false) //  hydration fix

  const topic = topicsData.find((t) => t.id === id)
  const chapterData = topic?.chapters?.find((c) => c.id === chapter)

  //  Prism trigger only after mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && chapterData?.code) {
      Prism.highlightAll()
    }
  }, [mounted, chapterData?.code])

  if (!topic || !chapterData) {
    return <div className="p-6"> Chapter not found</div>
  }

  //  Copy handler
  const handleCopy = async () => {
    if (chapterData?.code) {
      await navigator.clipboard.writeText(chapterData.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      {/*  Back Button */}
      <div>
        <Link
          href={`/topics/${topic.id}`}
          className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-muted hover:bg-accent transition"
        >
          <ArrowLeft size={16} />
          Back to {topic.title}
        </Link>
      </div>

      {/*  Title + Description */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">{chapterData.title}</h1>
        {chapterData.desc && (
          <p className="text-muted-foreground leading-relaxed text-lg">
            {chapterData.desc}
          </p>
        )}
      </div>

      {/*  Notes Section */}
      {chapterData.notes && (
        <div className="p-5 rounded-lg bg-accent/15 shadow-md border border-border space-y-2">
          <div className="flex items-center gap-2 text-base font-semibold">
            <Notebook className="w-5 h-5 text-primary" />
            Notes
          </div>
          <p className="leading-relaxed text-foreground/90">
            {chapterData.notes}
          </p>
        </div>
      )}

      {/*  Code Section */}
      {chapterData.code && mounted && (
        <div className="space-y-3">
          {/* Header + Copy Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-base font-semibold">
              <Code2 className="w-5 h-5 text-primary" />
              Example Code
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-md bg-muted hover:bg-accent transition"
            >
              <Copy size={16} />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/*  Code Block */}
          <div className="rounded-lg shadow-md border border-border bg-card overflow-hidden">
            <pre className="p-4 text-sm overflow-x-auto">
              <code
                className="language-python"
              >
                {chapterData.code}
              </code>
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
