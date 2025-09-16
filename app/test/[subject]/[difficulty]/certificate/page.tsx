"use client"

import { useParams, useRouter } from "next/navigation"
import { getResults } from "@/lib/storage"
import Certificate from "@/components/Certificate"
import { useEffect, useState } from "react"
import { FaHome, FaBookOpen } from "react-icons/fa"

export default function CertificatePage() {
  const { subject, difficulty } = useParams()
  const router = useRouter()
  const [latest, setLatest] = useState<any>(null)

  useEffect(() => {
    const prev = getResults()
    if (prev.length > 0) setLatest(prev[0])
  }, [])

  if (!latest) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <p>No Certificate Found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start py-10">
      {/* Certificate */}
      <Certificate result={latest} />

      {/* Extra navigation buttons */}
      <div className="mt-8 flex gap-6 justify-center">
        {/* Back to Home */}
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 glass rounded-lg flex items-center gap-2 font-semibold hover:bg-accent/20"
        >
          <FaHome /> Back to Home
        </button>

        {/* Go to Subject Selection */}
        <button
          onClick={() => router.push("/test")}
          className="px-6 py-3 bg-primary text-white rounded-lg flex items-center gap-2 font-semibold hover:opacity-90"
        >
          <FaBookOpen /> Choose Another Subject
        </button>
      </div>
    </div>
  )
}
