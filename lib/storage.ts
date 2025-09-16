// lib/storage.ts

export function saveResult(result: any) {
  try {
    const prev = JSON.parse(localStorage.getItem("tests") || "[]")
    prev.unshift(result)
    localStorage.setItem("tests", JSON.stringify(prev))
  } catch (e) {
    console.error("Error saving result:", e)
  }
}

export function getResults() {
  try {
    return JSON.parse(localStorage.getItem("tests") || "[]")
  } catch {
    return []
  }
}
