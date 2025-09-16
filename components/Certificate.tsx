"use client"

import { motion } from "framer-motion"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
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

    // ✅ Render DOM node to canvas
    const canvas = await html2canvas(certificateRef.current, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
    })

    const imgData = canvas.toDataURL("image/png")

    // ✅ Create PDF (landscape A4)
    const pdf = new jsPDF("landscape", "pt", "a4")
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()

    // Fit image into A4 size
    const imgWidth = pageWidth
    const imgHeight = (canvas.height * pageWidth) / canvas.width

    const y = (pageHeight - imgHeight) / 2
    pdf.addImage(imgData, "PNG", 0, y, imgWidth, imgHeight)

    pdf.save(`certificate-${userName}.pdf`)
  }

  return (
    <div className="text-center mt-10">
      <motion.div
        ref={certificateRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto shadow-2xl rounded-2xl overflow-hidden"
        style={{
          width: "1100px", // fixed size (landscape ratio)
          height: "720px",
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
        <div className="relative z-10 flex flex-col items-center justify-between h-full py-10 px-12 text-black">
          {/* Header */}
          <div className="mb-8">
            <h1
              className="text-5xl font-extrabold tracking-wide"
              style={{
                fontFamily: `"Playfair Display", serif`,
                color: "#ecb30bff",
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
                color: "#161515ff",
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
              test ({result.difficulty}) with an outstanding score of{" "}
              <span style={{ fontWeight: "700", color: "#ca8a04" }}>
                {result.score}/{result.total}
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
              and <span style={{ fontWeight: 600 }}>outstanding achievement</span>,  
              reflecting true commitment to excellence.
            </p>
          </div>

          {/* Divider */}
          <div
            className="mb-10"
            style={{
              width: "160px",
              height: "2px",
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
                className="w-35 h-8 object-contain drop-shadow-xl"
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
      <button
        onClick={handleDownload}
        className="mt-8 px-8 py-3 text-white font-semibold rounded-lg shadow transition"
        style={{
          background: "linear-gradient(to right, #4f46e5, #7c3aed)",
        }}
      >
        Download Certificate
      </button>
    </div>
  )
}
