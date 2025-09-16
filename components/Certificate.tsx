"use client"

import { motion } from "framer-motion"
import html2canvas from "html2canvas"

export default function Certificate({ result }: { result: any }) {
  if (!result) return null

  const userName =
    typeof window !== "undefined"
      ? localStorage.getItem("userName") || "[Your Name]"
      : "[Your Name]"

  const handleDownload = async () => {
    const element = document.getElementById("certificate")
    if (!element) return

    const canvas = await html2canvas(element, { scale: 3, useCORS: true })
    const link = document.createElement("a")
    link.download = `certificate-${userName}.png`
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  return (
    <div className="text-center mt-10">
      <motion.div
        id="certificate"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black p-12 rounded-3xl max-w-4xl mx-auto shadow-2xl border-[6px] border-yellow-400"
        style={{
          fontFamily: `"Georgia", "Times New Roman", serif`,
        }}
      >
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <img
            src="/geekdost.png"
            alt="GeekDost Logo"
            className="w-[350px] h-[350px] object-contain"
          />
        </div>

        {/* Decorative top line */}
        <div className="absolute top-8 left-0 right-0 mx-auto w-32 h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 rounded-full" />

        {/* Title */}
        <h1
          className="text-5xl font-extrabold mb-3 tracking-wide"
          style={{ fontFamily: `"Playfair Display", serif` }}
        >
          Certificate of Achievement
        </h1>
        <p
          className="text-gray-500 italic mb-10 text-lg"
          style={{ fontFamily: `"Lora", serif` }}
        >
          This is proudly presented to
        </p>

        {/* Recipient Name */}
        <p
          className="text-4xl font-extrabold mb-8 text-primary underline decoration-yellow-500 underline-offset-8"
          style={{ fontFamily: `"Poppins", sans-serif` }}
        >
          {userName}
        </p>

        {/* Description */}
        <p
          className="text-xl leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: `"Inter", sans-serif` }}
        >
          for successfully completing the{" "}
          <span className="font-semibold capitalize">{result.subject}</span> test
          ({result.difficulty}) with an outstanding score of{" "}
          <span className="font-bold text-yellow-600">
            {result.score}/{result.total}
          </span>
          . <br /> We applaud your dedication and hard work.
        </p>

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-20">
          {/* Date */}
          <div className="text-left">
            <p
              className="text-sm text-gray-500"
              style={{ fontFamily: `"Lora", serif` }}
            >
              Date
            </p>
            <p
              className="font-medium"
              style={{ fontFamily: `"Inter", sans-serif` }}
            >
              {new Date(result.date).toLocaleDateString()}
            </p>
          </div>

          {/* Signature */}
          <div className="text-right">
            <img
              src="/signature.png"
              alt="Signature"
              className="h-14 mx-auto mb-1 opacity-90"
            />
            <p
              className="font-semibold"
              style={{ fontFamily: `"Great Vibes", cursive` }}
            >
              Sujan Das
            </p>
            <p className="text-xs text-gray-500">Founder, GeekDost</p>
          </div>
        </div>
      </motion.div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
      >
        Download Certificate
      </button>
    </div>
  )
}
