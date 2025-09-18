"use client"

import { use } from "react"
import { topicsData } from "@/lib/topics-utils"

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
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{chapterData.title}</h1>
      {/* ✅ Fixed desc */}
      <p className="text-muted-foreground">{chapterData.desc}</p>

      {chapterData.notes && (
        <div className="p-4 bg-muted rounded-lg">
          <h2 className="font-semibold mb-2">Notes</h2>
          <p>{chapterData.notes}</p>
        </div>
      )}

      {chapterData.code && (
        <pre className="p-4 bg-black text-green-400 rounded-lg overflow-x-auto">
          <code>{chapterData.code}</code>
        </pre>
      )}
    </div>
  )
}
