"use client"

import { RoadmapStep } from "./RoadmapStep"

interface Chapter {
  title: string
  topics: string[]
  time?: string
}

export function RoadmapTimeline({ chapters }: { chapters: Chapter[] }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-16">
      {/* Subtle vertical line */}
      <div className="absolute left-5 top-0 h-full w-[2px] bg-border/60" />

      {/* Steps */}
      <div className="flex flex-col gap-10 relative z-10">
        {chapters.map((chapter, index) => (
          <RoadmapStep
            key={index}
            index={index}
            title={chapter.title}
            topics={chapter.topics}
            time={chapter.time}
          />
        ))}
      </div>
    </div>
  )
}
