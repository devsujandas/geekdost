// lib/storage.ts

// --- Save Final Result ---
export function saveResult(result: any) {
  try {
    const prev = JSON.parse(localStorage.getItem("tests") || "[]")

    // ✅ Ensure questions are stored with result
    const resultWithQuestions = {
      ...result,
      questions: result.questions || [], // যদি না থাকে তবে ফাঁকা array
    }

    prev.unshift(resultWithQuestions) // latest result first
    localStorage.setItem("tests", JSON.stringify(prev))
  } catch (e) {
    console.error("Error saving result:", e)
  }
}

// --- Get All Results (history) ---
export function getResults() {
  try {
    return JSON.parse(localStorage.getItem("tests") || "[]")
  } catch {
    return []
  }
}

// --- Clear All Results ---
export function clearResults() {
  try {
    localStorage.removeItem("tests")
  } catch {}
}

// --- Save Ongoing Progress ---
export function saveProgress(subject: string, difficulty: string, progress: any) {
  try {
    const key = `progress_${subject}_${difficulty}`
    localStorage.setItem(key, JSON.stringify(progress))
  } catch (e) {
    console.error("Error saving progress:", e)
  }
}

// --- Get Ongoing Progress ---
export function getProgress(subject: string, difficulty: string) {
  try {
    const key = `progress_${subject}_${difficulty}`
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

// --- Clear Progress for Specific Exam ---
export function clearProgress(subject: string, difficulty: string) {
  try {
    const key = `progress_${subject}_${difficulty}`
    localStorage.removeItem(key)
  } catch {}
}
