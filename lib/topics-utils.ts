// lib/topics-utils.ts

import { IconType } from "react-icons"
import { FaJava, FaPython } from "react-icons/fa"

// ✅ Chapter interface
export interface Chapter {
  id: string
  title: string
  desc: string
  notes: string
  code: string
  duration?: string
}

// ✅ Topic interface
export interface Topic {
  id: string
  title: string
  desc: string
  description?: string   // 🔥 added this (alias for desc)
  icon?: IconType        // ✅ Correct type for react-icons
  examples: number       // auto calculated
  notes: number          // auto calculated
  steps: number          // auto calculated
  category?: string
  categories?: string[]  // ✅ multiple categories
  difficulty?: string
  chapters: Chapter[]
}

// ✅ Raw topics (no need to manually calculate examples/notes)
const rawTopics: Omit<Topic, "examples" | "notes" | "steps">[] = [
  {
    id: "python",
    title: "Python",
    desc: "Learn Python programming from basics to advanced. Python is a high-level, interpreted programming language known for its simple syntax and readability.",
    description: "Learn Python programming from basics to advanced. Python is a high-level, interpreted programming language known for its simple syntax and readability.", // ✅ added
    category: "Programming",
    categories: ["Programming", "Data Science", "Automation"],
    difficulty: "Beginner",
    icon: FaPython, // ✅ Python icon

    chapters: [
      {
        id: "intro",
        title: "Introduction to Python",
        desc: "Overview of Python, its uses, and why it’s popular.",
        notes: "Python is beginner-friendly, widely used in web development, data science, and automation.",
        code: `print("Hello, Python!")`,
        duration: "1 week",
      },
      {
        id: "variables",
        title: "Variables and Data Types",
        desc: "Learn how to store data in variables and understand Python's data types.",
        notes: "Python is dynamically typed. Common types are int, float, str, bool.",
        code: `name = "Alice"
age = 30
height = 5.5
is_student = True
print(f"Name: {name}, Age: {age}")`,
        duration: "1 week",
      },
      {
        id: "data_structures",
        title: "Data Structures: Lists & Dictionaries",
        desc: "Explore lists and dictionaries in Python.",
        notes: "Lists are ordered and mutable. Dictionaries store key-value pairs.",
        code: `my_list = [1, "hello", 3.14]
my_dict = {"name": "Bob", "age": 25}
print(my_list[1])
print(my_dict["name"])`,
        duration: "1 week",
      },
      {
        id: "functions",
        title: "Functions in Python",
        desc: "Learn to create and use functions for reusable code.",
        notes: "Functions help organize and reuse code blocks.",
        code: `def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))`,
        duration: "1 week",
      },
      {
        id: "oop",
        title: "Object-Oriented Programming (OOP)",
        desc: "Understand OOP principles with classes and objects.",
        notes: "Key concepts: Encapsulation, Inheritance, Polymorphism.",
        code: `class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        return "Woof!"

dog = Dog("Buddy")
print(dog.name)
print(dog.bark())`,
        duration: "1 week",
      },
      {
        id: "modules",
        title: "Modules and Packages",
        desc: "Learn how to organize code with modules and packages.",
        notes: "Modules are .py files. Packages are folders with __init__.py.",
        code: `import math
print(math.sqrt(16))`,
        duration: "1 week",
      },
    ],
  },

  {
    id: "java",
    title: "Java",
    desc: "Learn Java programming, an object-oriented language widely used for enterprise applications and Android development.",
    description: "Learn Java programming, an object-oriented language widely used for enterprise applications and Android development.", // ✅ added
    category: "Programming",
    categories: ["Programming", "Backend", "OOP"],
    difficulty: "Intermediate",
    icon: FaJava, // ✅ Java icon

    chapters: [
      {
        id: "intro_java",
        title: "Introduction to Java",
        desc: "History, JVM, and Hello World.",
        notes: "Java is strongly-typed. Entry point is the `main` method.",
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
        duration: "1 week",
      },
      {
        id: "variables_java",
        title: "Variables and Data Types",
        desc: "Learn primitive types and variable declaration in Java.",
        notes: "Primitive types: int, double, char, boolean. String is an object.",
        code: `public class Variables {
    public static void main(String[] args) {
        String name = "Budi";
        int age = 28;
        double height = 1.75;
        boolean isDeveloper = true;
        System.out.println("Name: " + name);
    }
}`,
        duration: "1 week",
      },
      {
        id: "control_flow",
        title: "Control Flow in Java",
        desc: "Learn about if-else statements in Java.",
        notes: "Use conditional statements to control program execution.",
        code: `public class ControlFlow {
    public static void main(String[] args) {
        int score = 85;
        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else {
            System.out.println("Grade: C");
        }
    }
}`,
        duration: "1 week",
      },
      {
        id: "oop_java",
        title: "Object-Oriented Programming (OOP)",
        desc: "Learn OOP principles in Java.",
        notes: "Java supports Encapsulation, Inheritance, and Polymorphism.",
        code: `class Car {
    String brand;

    public Car(String brand) {
        this.brand = brand;
    }

    public void honk() {
        System.out.println("Beep beep!");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota");
        System.out.println(myCar.brand);
        myCar.honk();
    }
}`,
        duration: "1 week",
      },
    ],
  },
]

// ✅ Auto calculate examples, notes & steps
export const topicsData: Topic[] = rawTopics.map((topic) => {
  const examples = topic.chapters.filter((c) => c.code?.trim()).length
  const notes = topic.chapters.filter((c) => c.notes?.trim()).length
  const steps = topic.chapters.length

  return {
    ...topic,
    examples,
    notes,
    steps,
    description: topic.description ?? topic.desc, // ✅ ensure description exists
  }
})
