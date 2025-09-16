"use client"

import { useParams, useRouter } from "next/navigation"
import { getResults } from "@/lib/storage"
import Certificate from "@/components/Certificate"
import { useEffect, useState } from "react"
import { FaHome, FaBookOpen, FaTrophy } from "react-icons/fa"
import { motion } from "framer-motion"

export default function CertificatePage() {
  const { subject, difficulty } = useParams()
  const router = useRouter()
  const [latest, setLatest] = useState<any>(null)

  useEffect(() => {
    const prev = getResults()
    if (prev.length > 0) setLatest(prev[0])
  }, [])

  // --- No certificate found ---
  if (!latest) {
    return (
      // ✅ Full page pure black background
      <div className="flex items-center justify-center min-h-screen bg-black px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-10 max-w-lg w-full text-center shadow-2xl border border-white/10"
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-3xl shadow-lg">
  <FaTrophy />
</div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold text-white mb-4">
            No Certificate Found
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Looks like you haven’t completed any test yet. <br />
            Finish a test with{" "}
            <span className="font-semibold text-yellow-400">60% or higher</span>{" "}
            to unlock your achievement certificate.
          </p>

          {/* Info Cards */}
          <div className="grid gap-4 mb-8">
            <div className="bg-indigo-600/10 border border-indigo-500/30 rounded-xl p-4 text-left hover:bg-indigo-600/20 transition">
              <h3 className="font-semibold text-indigo-300 mb-1">
                How to Earn?
              </h3>
              <p className="text-sm text-gray-300">
                Attempt any subject test and score above 60% to claim your
                certificate.
              </p>
            </div>
            <div className="bg-yellow-600/10 border border-yellow-500/30 rounded-xl p-4 text-left hover:bg-yellow-600/20 transition">
              <h3 className="font-semibold text-yellow-300 mb-1">
                Why Certificates?
              </h3>
              <p className="text-sm text-gray-300">
                Certificates showcase your learning journey and boost your
                confidence.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => router.push("/test")}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
          >
            Start a Test
          </button>
        </motion.div>
      </div>
    )
  }

  // --- Show certificate ---
  return (
    <div className="py-10 bg-black min-h-screen">
      <Certificate result={latest} />

      {/* Extra navigation buttons */}
      <div className="mt-8 flex flex-wrap gap-6 justify-center">
        {/* Back to Home */}
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-gray-900 text-gray-100 rounded-lg flex items-center gap-2 font-semibold shadow hover:bg-gray-700 transition"
        >
          <FaHome /> Back to Home
        </button>

        {/* Go to Subject Selection */}
        <button
          onClick={() => router.push("/test")}
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg flex items-center gap-2 font-semibold shadow hover:opacity-90 transition"
        >
          <FaBookOpen /> New Test
        </button>
      </div>
    </div>
  )
}
