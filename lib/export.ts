// lib/export.ts

// Export result as JSON file
export function exportResultJSON(result: any, filename = "result.json") {
  const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

// Export result as CSV file
export function exportResultCSV(result: any, filename = "result.csv") {
  const headers = ["Question", "Your Answer", "Correct Answer"]
  const rows = result.questions.map((q: any, i: number) => [
    `Q${i + 1}. ${q.question}`,
    q.userAns !== null ? q.options[q.userAns] : "Not Answered",
    q.options[q.answerIndex],
  ])

  const csvContent = [headers, ...rows].map((r) => r.join(",")).join("\n")
  const blob = new Blob([csvContent], { type: "text/csv" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

// Share result (Twitter / LinkedIn)
export function shareResult(result: any) {
  const text = `I scored ${result.score}/${result.total} in ${result.subject.toUpperCase()} (${result.difficulty}) test on GeekDost! 🚀`
  const url = encodeURIComponent("https://geekdost.vercel.app")
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`
  window.open(shareUrl, "_blank")
}
