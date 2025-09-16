"use client"

import { motion } from "framer-motion"

export default function Certificate({ result }: { result: any }) {
  if (!result) return null

  const handleDownload = () => {
    const element = document.getElementById("certificate")
    if (!element) return

    import("html2canvas").then((html2canvas) => {
      html2canvas.default(element).then((canvas) => {
        const link = document.createElement("a")
        link.download = "certificate.png"
        link.href = canvas.toDataURL()
        link.click()
      })
    })
  }

  return (
    <div className="text-center mt-8">
      <motion.div
        id="certificate"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8 max-w-2xl mx-auto border-2 border-primary"
      >
        <h1 className="text-2xl font-bold mb-2">Certificate of Completion</h1>
        <p className="text-muted-foreground mb-4">This is to certify that</p>
        <p className="text-xl font-extrabold mb-4">[Your Name]</p>
        <p>
          has successfully completed the{" "}
          <span className="font-semibold capitalize">{result.subject}</span> test
          ({result.difficulty}) with a score of{" "}
          <span className="font-semibold">
            {result.score}/{result.total}
          </span>
          .
        </p>
        <p className="mt-6 text-sm">GeekDost | {new Date(result.date).toLocaleDateString()}</p>
      </motion.div>

      <button
        onClick={handleDownload}
        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
      >
        Download Certificate
      </button>
    </div>
  )
}
