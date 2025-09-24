"use client"

import { RoadmapStep } from "./RoadmapStep"

interface Chapter {
  title: string
  topics: string[]
  time?: string
}

export function RoadmapTimeline({ chapters }: { chapters: Chapter[] }) {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-16">
      {/* Curvy path (SVG dashed line) */}
      <svg
        viewBox="0 0 200 1000"
        preserveAspectRatio="none"
        className="absolute left-1/2 top-0 h-full w-48 -translate-x-1/2 text-border"
      >
        <path
          d="M 100 0 
             Q 150 100 100 200 
             Q 50 300 100 400 
             Q 150 500 100 600 
             Q 50 700 100 800 
             Q 150 900 100 1000"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="10 14"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Timeline steps */}
      <div className="relative z-10 flex flex-col gap-24">
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
