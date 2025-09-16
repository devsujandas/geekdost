"use client"

import { motion } from "framer-motion"
import html2canvas from "html2canvas"
import { useRef } from "react"

export default function Certificate({ result }: { result: any }) {
  if (!result) return null

  const userName =
    typeof window !== "undefined"
      ? localStorage.getItem("userName") || "[Your Name]"
      : "[Your Name]"

  const certificateRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!certificateRef.current) return

    // ✅ Sanitize styles directly on the element in the DOM
    certificateRef.current.querySelectorAll("*").forEach((el) => {
      const style = window.getComputedStyle(el)

      if (style.color.includes("oklch")) {
        (el as HTMLElement).style.color = "#000000"
      }
      if (style.background.includes("oklch")) {
        (el as HTMLElement).style.background = "#ffffff"
      }
      if (style.borderColor.includes("oklch")) {
        (el as HTMLElement).style.borderColor = "#1e3a8a"
      }
    })

    // ✅ Render the DOM node itself (not clone)
    const canvas = await html2canvas(certificateRef.current, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
    })

    const link = document.createElement("a")
    link.download = `certificate-${userName}.png`
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  return (
    <div className="text-center mt-10">
      {/* Responsive Wrapper */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-full overflow-x-auto">
          <motion.div
            ref={certificateRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto shadow-2xl rounded-2xl overflow-hidden"
            style={{
              width: "100%", // responsive width
              maxWidth: "1100px", // cap on large screens
              aspectRatio: "1100/720", // maintain ratio
              background: "linear-gradient(135deg, #e6f4ff 0%, #fdfdfd 100%)",
              border: "10px double #1e3a8a",
            }}
          >
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
              <img
                src="/geekdost.png"
                alt="GeekDost Watermark"
                style={{ width: "80%", objectFit: "contain" }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-between h-full py-6 px-4 sm:py-10 sm:px-12 text-black">
              {/* Header */}
              <div className="mb-4 sm:mb-8 text-center">
                <h1
                  className="text-2xl sm:text-5xl font-extrabold tracking-wide"
                  style={{
                    fontFamily: `"Playfair Display", serif`,
                    color: "#ecb30bff",
                  }}
                >
                  Certificate of Achievement
                </h1>
                <p
                  className="text-sm sm:text-lg italic mt-2"
                  style={{ fontFamily: `"Lora", serif`, color: "#374151" }}
                >
                  This is proudly presented to
                </p>
              </div>

              {/* Recipient */}
              <div className="mb-6 sm:mb-8">
                <p
                  className="text-3xl sm:text-5xl font-extrabold tracking-wide"
                  style={{
                    fontFamily: `"Cinzel Decorative", serif`,
                    color: "#161515ff",
                    letterSpacing: "2px",
                  }}
                >
                  {userName}
                </p>
              </div>

              {/* Body */}
              <div className="max-w-3xl text-center mb-6 sm:mb-8">
                <p
                  className="text-base sm:text-xl leading-relaxed"
                  style={{ fontFamily: `"Inter", sans-serif`, color: "#374151" }}
                >
                  for successfully completing the{" "}
                  <span style={{ fontWeight: "600" }} className="capitalize">
                    {result.subject}
                  </span>{" "}
                  test ({result.difficulty}) with an outstanding grade of{" "}
                  <span style={{ fontWeight: "700", color: "#ca8a04" }}>
                    {result.grade}
                  </span>
                  .
                </p>
                <p
                  className="mt-4 sm:mt-6 text-sm sm:text-lg font-medium"
                  style={{
                    fontFamily: `"Merriweather", serif`,
                    color: "#111827",
                  }}
                >
                  This certificate proudly acknowledges your{" "}
                  <span style={{ fontWeight: 600 }}>dedication, knowledge,</span>{" "}
                  and <span style={{ fontWeight: 600 }}>outstanding achievement</span>,  
                  reflecting true commitment to excellence.
                </p>
              </div>

              {/* Divider */}
              <div
                className="mb-6 sm:mb-10"
                style={{
                  width: "160px",
                  height: "2px",
                  background:
                    "linear-gradient(to right, transparent, #facc15, transparent)",
                }}
              ></div>

              {/* Footer */}
              <div className="flex justify-between items-center w-full px-4 sm:px-12 text-xs sm:text-base">
                {/* Date */}
                <div className="text-left">
                  <p className="italic" style={{ color: "#6b7280" }}>
                    Date
                  </p>
                  <p className="font-medium" style={{ color: "#111827" }}>
                    {new Date(result.date).toLocaleDateString()}
                  </p>
                </div>

                {/* Seal */}
                <div className="flex flex-col items-center mt-4 sm:mt-8">
                  <p
                    className="text-lg sm:text-2xl text-gray-800 mb-0 leading-none"
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
                    className="w-20 sm:w-35 h-6 sm:h-8 object-contain drop-shadow-xl"
                  />
                </div>

                {/* Signature */}
                <div className="text-right">
                  <img
                    src="/signature.png"
                    alt="Signature"
                    style={{
                      height: "30px",
                      margin: "0 auto 4px",
                      opacity: 0.9,
                    }}
                  />
                  <p
                    className="font-semibold text-base sm:text-xl"
                    style={{
                      fontFamily: `"Satisfy", cursive`,
                      color: "#111827",
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
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="mt-8 px-6 sm:px-8 py-2 sm:py-3 text-white font-semibold rounded-lg shadow transition"
        style={{
          background: "linear-gradient(to right, #4f46e5, #7c3aed)",
        }}
      >
        Download Certificate
      </button>
    </div>
  )
}
