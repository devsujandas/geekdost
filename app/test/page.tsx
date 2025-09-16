"use client"

import { useRouter } from "next/navigation"

const subjects = [
  { id: "python", name: "Python" },
  { id: "java", name: "Java" },
  { id: "datascience", name: "Data Science" },
  { id: "cpp", name: "C++" },
  { id: "web", name: "Web Development" },
  { id: "ml", name: "Machine Learning" },
  { id: "db", name: "Databases" },
  { id: "cloud", name: "Cloud" },
  { id: "mobile", name: "Mobile" },
  { id: "security", name: "Security" },
  { id: "devops", name: "DevOps" },
  { id: "algorithms", name: "Algorithms" }
]

export default function TestPage() {
  const router = useRouter()

  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-3xl font-bold mb-6">Select a Subject</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {subjects.map((s) => (
          <button
            key={s.id}
            onClick={() => router.push(`/test/${s.id}`)}
            className="p-6 rounded-xl glass hover:bg-primary/20"
          >
            {s.name}
          </button>
        ))}
      </div>
    </div>
  )
}
