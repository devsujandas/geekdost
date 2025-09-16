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
        className="relative mx-auto shadow-2xl rounded-2xl overflow-hidden bg-white"
        style={{
          width: "1100px", // fixed width
          height: "825px", // 4:3 ratio
          background: "linear-gradient(135deg, #e6f4ff 0%, #fdfdfd 100%)",
          border: "10px double #1e3a8a",
        }}
      >
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <img
            src="/geekdost.png"
            alt="GeekDost Watermark"
            className="w-[70%] object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-between h-full py-12 px-16 text-black">
          {/* Header */}
          <div>
            <h1
              className="text-6xl font-extrabold tracking-wide text-gray-900"
              style={{ fontFamily: `"Playfair Display", serif` }}
            >
              Certificate of Achievement
            </h1>
            <p
              className="text-xl italic text-gray-600 mt-4"
              style={{ fontFamily: `"Lora", serif` }}
            >
              This is proudly presented to
            </p>
          </div>

          {/* Recipient */}
          <div>
            <p
              className="text-5xl font-extrabold text-indigo-700 underline decoration-yellow-500 underline-offset-8"
              style={{ fontFamily: `"Poppins", sans-serif` }}
            >
              {userName}
            </p>
          </div>

          {/* Body */}
          <div className="max-w-3xl text-center">
            <p
              className="text-2xl leading-relaxed text-gray-700"
              style={{ fontFamily: `"Inter", sans-serif` }}
            >
              for successfully completing the{" "}
              <span className="font-semibold capitalize">{result.subject}</span>{" "}
              test ({result.difficulty}) with an outstanding score of{" "}
              <span className="font-bold text-yellow-600">
                {result.score}/{result.total}
              </span>
              .
            </p>
            <p
              className="mt-6 text-xl font-medium text-gray-800"
              style={{ fontFamily: `"Merriweather", serif` }}
            >
              We hereby recognize your commitment, knowledge, and excellence in
              performance.
            </p>
          </div>

          {/* Divider */}
          <div className="w-52 h-[3px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

          {/* Footer */}
          <div className="flex justify-between items-end w-full mt-8">
            {/* Date */}
            <div className="text-left">
              <p className="text-base text-gray-500 italic">Date</p>
              <p className="font-medium text-gray-800 text-xl">
                {new Date(result.date).toLocaleDateString()}
              </p>
            </div>

            {/* Seal */}
            <div className="bg-yellow-400 rounded-full w-32 h-32 flex items-center justify-center shadow-xl border-4 border-yellow-600">
              <span className="text-xs font-bold uppercase text-gray-800 text-center">
                GeekDost <br /> Official Seal
              </span>
            </div>

            {/* Signature */}
            <div className="text-right">
              <img
                src="/signature.png"
                alt="Signature"
                className="h-16 mx-auto mb-1 opacity-90"
              />
              <p
                className="font-semibold text-gray-900 text-lg"
                style={{ fontFamily: `"Great Vibes", cursive` }}
              >
                Sujan Das
              </p>
              <p className="text-sm text-gray-600">Founder, GeekDost</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Download button */}
      <button
        onClick={handleDownload}
        className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
      >
        Download Certificate
      </button>
    </div>
  )
}
