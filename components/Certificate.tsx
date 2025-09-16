"use client"

import { motion } from "framer-motion"
import html2canvas from "html2canvas"

export default function Certificate({ result }: { result: any }) {
  if (!result) return null

  const userName = typeof window !== "undefined" ? localStorage.getItem("userName") || "[Your Name]" : "[Your Name]"

  const handleDownload = async () => {
    const element = document.getElementById("certificate")
    if (!element) return

    const canvas = await html2canvas(element, {
      scale: 3, // higher quality
      useCORS: true,
    })

    const link = document.createElement("a")
    link.download = `certificate-${userName}.png`
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  return (
    <div className="text-center mt-10">
      <motion.div
        id="certificate"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white text-black p-12 rounded-2xl max-w-3xl mx-auto shadow-2xl border-4 border-primary"
      >
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <img
            src="/geekdost.png" //  logo path
            alt="GeekDost Logo"
            className="w-72 h-72 object-contain"
          />
        </div>

        {/* Certificate Heading */}
        <h1 className="text-4xl font-extrabold mb-3">Certificate of Completion</h1>
        <p className="text-gray-500 italic mb-6">This is to certify that</p>

        {/* User Name */}
        <p className="text-3xl font-bold mb-6 underline decoration-primary">{userName}</p>

        {/* Details */}
        <p className="text-lg leading-relaxed">
          has successfully completed the{" "}
          <span className="font-semibold capitalize">{result.subject}</span> test
          ({result.difficulty}) with a score of{" "}
          <span className="font-bold text-primary">
            {result.score}/{result.total}
          </span>.
        </p>

        {/* Date + Signature Section */}
        <div className="flex justify-between items-center mt-12">
          <p className="text-sm text-gray-600">
            Date: {new Date(result.date).toLocaleDateString()}
          </p>
          <div className="text-right">
            <img
              src="/geekdost.png" //  signature image 
              alt="Signature"
              className="h-12 mx-auto mb-1 opacity-90"
            />
            <p className="font-medium">Sujan Das</p>
            <p className="text-xs text-gray-500">Founder, GeekDost</p>
          </div>
        </div>
      </motion.div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow hover:opacity-90 transition"
      >
        Download Certificate
      </button>
    </div>
  )
}
