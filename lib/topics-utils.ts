import { IconType } from "react-icons"
import { FaJava, FaPython } from "react-icons/fa"

// 🔹 Topic inside a Chapter
export interface ChapterTopic {
  id: string
  title: string
  note: string
  code: string
}

// 🔹 Chapter interface
export interface Chapter {
  id: string
  title: string
  desc: string
  notes: string
  code: string
  duration?: string
  topics: ChapterTopic[]   // ✅ added nested topics
}

// 🔹 Main Topic interface
export interface Topic {
  id: string
  title: string
  desc: string
  description?: string
  icon?: IconType
  image?: string
  examples: number
  notes: number
  steps: number
  category?: string
  categories?: string[]
  difficulty?: string
  chapters: Chapter[]
}

// 🔹 Raw topics (no examples/notes/steps yet)
const rawTopics: Omit<Topic, "examples" | "notes" | "steps">[] = [
  // --------------------------------------------------- Python
  {
    id: "python",
    title: "Python",
    desc: "Short overview of Python",
    description: "Full roadmap description",
    category: "Programming",
    categories: ["Programming", "Data Science", "Automation"],
    difficulty: "Beginner to Advanced",
    image: "/images/python.png",
    icon: FaPython,

    chapters: [
      {
        id: "intro",
        title: "Introduction to Python",
        desc: "Basics of Python programming",
        notes: "History, installation, syntax basics",
        code: "",
        duration: "1 week",

        topics: [
          {
            id: "syntax",
            title: "Python Syntax",
            note: "Learn about indentation, variables, and basic print statements",
            code: `print("Hello, Python!")`,
          },
          {
            id: "datatypes",
            title: "Data Types",
            note: "Numbers, strings, lists, dictionaries, and sets",
            code: `
x = 10
name = "Alice"
items = [1, 2, 3]
print(type(items))
            `,
          },
        ],
      },

      {
        id: "control-flow",
        title: "Control Flow",
        desc: "Conditionals and loops in Python",
        notes: "if/else, for loops, while loops",
        code: "",
        duration: "1 week",

        topics: [
          {
            id: "ifelse",
            title: "If-Else Statements",
            note: "Branching logic based on conditions",
            code: `
x = 5
if x > 0:
    print("Positive")
else:
    print("Negative")
            `,
          },
          {
            id: "loops",
            title: "Loops",
            note: "Iterating using for and while loops",
            code: `
for i in range(3):
    print(i)
            `,
          },
        ],
      },
    ],
  },


  
  
]

// 🔹 Auto calculate examples, notes & steps
export const topicsData: Topic[] = rawTopics.map((topic) => {
  const examples =
    topic.chapters.reduce(
      (acc, ch) =>
        acc +
        (ch.code?.trim() ? 1 : 0) +
        (ch.topics?.filter((t) => t.code?.trim()).length || 0),
      0
    ) || 0

  const notes =
    topic.chapters.reduce(
      (acc, ch) =>
        acc +
        (ch.notes?.trim() ? 1 : 0) +
        (ch.topics?.filter((t) => t.note?.trim()).length || 0),
      0
    ) || 0

  const steps = topic.chapters.length

  return {
    ...topic,
    examples,
    notes,
    steps,
    description: topic.description ?? topic.desc,
  }
})
