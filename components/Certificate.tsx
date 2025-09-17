"use client"

import { motion } from "framer-motion"
import html2canvas from "html2canvas"
import { useRef, useState } from "react"

export default function Certificate({ result }: { result: any }) {
  if (!result) return null

  
  if (result.mode !== "exam") {
    return (
      <div className="flex items-center justify-center min-h-screen text-center">
        <p>
          Certificates are only available for <b>exam mode</b>.
        </p>
      </div>
    )
  }

  // ✅ Calculate grade
  const questions = result.questions || []
  const score = questions.reduce((acc: number, q: any) => {
    const userAns = result.answers[q.id]
    return userAns === q.answerIndex ? acc + 1 : acc
  }, 0)

  const percentage = Math.round((score / result.total) * 100)

  let grade: string | null = null
  if (percentage >= 90) grade = "O"
  else if (percentage >= 80) grade = "E"
  else if (percentage >= 70) grade = "A"
  else if (percentage >= 60) grade = "B"

  if (!grade) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center">
        <p>You scored below 60%. Certificate cannot be generated.</p>
      </div>
    )
  }

  const userName =
    typeof window !== "undefined"
      ? localStorage.getItem("userName") || "[Your Name]"
      : "[Your Name]"

  const certificateRef = useRef<HTMLDivElement>(null)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    if (!certificateRef.current) return
    setIsDownloading(true)

    certificateRef.current.querySelectorAll("*").forEach((el) => {
      const style = window.getComputedStyle(el)
      if (style.color.includes("oklch")) {
        ;(el as HTMLElement).style.color = "#000000"
      }
      if (style.background.includes("oklch")) {
        ;(el as HTMLElement).style.background = "#ffffff"
      }
      if (style.borderColor.includes("oklch")) {
        ;(el as HTMLElement).style.borderColor = "#1e3a8a"
      }
    })

    const canvas = await html2canvas(certificateRef.current, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
    })

    const imgData = canvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.href = imgData
    link.download = `certificate-${userName}.png`
    link.click()

    setIsDownloading(false)
  }

  return (
    <div className="text-center mt-10">
      <motion.div
        ref={certificateRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto rounded-2xl overflow-hidden"
        style={{
  width: "1100px",
  height: "720px",
  background: `
    radial-gradient(circle at top left, #fef9c3, #fefce8 30%, #ffffff 60%),
    linear-gradient(135deg, #ffffff, #f9fafb)
  `,
  border: "20px solid transparent",
  borderImage: "linear-gradient(90deg, #0fcba5ff, #22f29fff, #be42efff, #0caec7ff) 1",
  boxShadow: `
    0 0 45px rgba(202,138,4,0.4), 
    inset 0 0 25px rgba(0,0,0,0.06)
  `,
  borderRadius: "18px",
  position: "relative",
}}

      >
        {/* Corner Decorations */}
        <div className="absolute top-4 left-4 w-12 h-12 border-l-4 border-t-4 border-yellow-600 rounded-tl-xl opacity-70"></div>
        <div className="absolute top-4 right-4 w-12 h-12 border-r-4 border-t-4 border-yellow-600 rounded-tr-xl opacity-70"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border-l-4 border-b-4 border-yellow-600 rounded-bl-xl opacity-70"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-r-4 border-b-4 border-yellow-600 rounded-br-xl opacity-70"></div>

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
          <img
            src="/geekdost.png"
            alt="GeekDost Watermark"
            style={{ width: "70%", objectFit: "contain" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-between h-full py-10 px-12 text-black">
          {/* Header */}
          <div className="mb-8">
            <h1
              className="text-5xl font-extrabold tracking-wide"
              style={{
                fontFamily: `"Playfair Display", serif`,
                color: "#d97706",
                textShadow: "2px 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              Certificate of Achievement
            </h1>
            <p
              className="text-lg italic mt-2"
              style={{ fontFamily: `"Lora", serif`, color: "#374151" }}
            >
              This is proudly presented to
            </p>
          </div>

          {/* Recipient */}
          <div className="mb-8">
            <p
              className="text-5xl font-extrabold tracking-wide"
              style={{
                fontFamily: `"Cinzel Decorative", serif`,
                color: "#111827",
                letterSpacing: "2px",
              }}
            >
              {userName}
            </p>
          </div>

          {/* Body */}
          <div className="max-w-3xl text-center mb-8">
            <p
              className="text-xl leading-relaxed"
              style={{ fontFamily: `"Inter", sans-serif`, color: "#374151" }}
            >
              for successfully completing the{" "}
              <span style={{ fontWeight: "600" }} className="capitalize">
                {result.subject}
              </span>{" "}
              test ({result.difficulty}) with an outstanding grade of{" "}
              <span style={{ fontWeight: "700", color: "#b45309" }}>
                {grade}
              </span>
              .
            </p>

            <p
              className="mt-6 text-lg font-medium"
              style={{
                fontFamily: `"Merriweather", serif`,
                color: "#111827",
              }}
            >
              This certificate proudly acknowledges your{" "}
              <span style={{ fontWeight: 600 }}>dedication, knowledge,</span>{" "}
              and{" "}
              <span style={{ fontWeight: 600 }}>outstanding achievement</span>,  
              reflecting true commitment to excellence.
            </p>
          </div>

          {/* Divider */}
          <div
            className="mb-10"
            style={{
              width: "160px",
              height: "3px",
              background:
                "linear-gradient(to right, transparent, #facc15, transparent)",
            }}
          ></div>

          {/* Footer */}
          <div className="flex justify-between items-center w-full px-12">
            {/* Date */}
            <div className="text-left">
              <p className="text-sm italic" style={{ color: "#6b7280" }}>
                Date
              </p>
              <p className="font-medium text-lg" style={{ color: "#111827" }}>
                {new Date(result.date).toLocaleDateString()}
              </p>
            </div>

            {/* Seal */}
            <div className="flex flex-col items-center mt-8">
              <p
                className="text-2xl text-gray-800 mb-2 leading-none"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                }}
              >
                Issued by
              </p>
              <img
                src="/geekdost.png"
                alt="GeekDost Logo"
                className="w-36 h-10 object-contain drop-shadow-xl"
              />
            </div>

            {/* Signature */}
            <div className="text-right">
              <img
                src="/signature.png"
                alt="Signature"
                style={{
                  height: "40px",
                  margin: "0 auto 4px",
                  opacity: 0.9,
                }}
              />
              <p
                className="font-semibold"
                style={{
                  fontFamily: `"Satisfy", cursive`,
                  color: "#111827",
                  fontSize: "20px",
                }}
              >
                Sujan Das
              </p>
              <p className="text-xs" style={{ color: "#4b5563" }}>
                Founder, GeekDost
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Download Button */}
      <div className="flex justify-center">
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="mt-8 px-8 py-3 text-white font-semibold rounded-lg shadow transition flex items-center justify-center"
          style={{
            background: "linear-gradient(to right, #4f46e5, #7c3aed)",
          }}
        >
          {isDownloading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Download as Image"
          )}
        </button>
      </div>
    </div>
  )
}
