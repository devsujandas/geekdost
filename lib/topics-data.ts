export const topicsData = [
  {
    id: "python",
    slug: "python",
    title: "Python Development Expert Path",
    description:
      "A comprehensive Python roadmap covering everything from fundamentals to advanced topics including data science, web development, automation, machine learning, and software engineering best practices with extensive code examples.",
    icon: "FaPython",
    color: "from-blue-500 to-yellow-500",
    category: "Programming",
    difficulty: "Advanced",
    tags: [
      "python",
      "data-science",
      "automation",
      "machine-learning",
      "web-development",
      "scripting",
      "software-engineering",
      "backend",
      "ai",
    ],
    image: "/images/python.png",
    chapters: [
      {
        id: "basics",
        title: "Python Basics & Syntax",
        desc: "Learn syntax, variables and operators",
        notes: `
### Python Basics
- Print function
- Variables & Data types
- Operators
        `,
        code: `print("Hello Geekdost!")`,
      },
      {
        id: "oop",
        title: "Object Oriented Programming",
        desc: "Classes, objects, inheritance",
        notes: `
### OOP in Python
- Classes & Objects
- Inheritance
- Polymorphism
        `,
        code: `class Dog:
    def bark(self):
        return "Woof!"`,
      },
    ],
  },
  {
    id: "java",
    slug: "java",
    title: "Java Programming Mastery",
    description:
      "Master Java programming from the ground up including OOP, data structures, multithreading, and frameworks. Learn how to build enterprise-grade applications with strong foundations.",
    icon: "FaJava",
    color: "from-red-500 to-orange-500",
    category: "Programming",
    difficulty: "Intermediate",
    tags: [
      "java",
      "backend",
      "oop",
      "spring",
      "enterprise",
      "android",
      "software-engineering",
    ],
    image: "/images/java.jpg",
    chapters: [
      {
        id: "intro",
        title: "Java Introduction",
        desc: "JVM, JDK, and Hello World",
        notes: `
### Java Intro
- JVM and JDK
- Java Syntax
- First Hello World program
        `,
        code: `class Main {
  public static void main(String[] args) {
    System.out.println("Hello Java");
  }
}`,
      },
    ],
  },
]
