import { LucideIcon } from "lucide-react";

export interface Quiz {
  question: string;
  options: string[];
  answer: string;
}

export interface Chapter {
  id: string;
  title: string;
  desc: string;
  notes: string;
  code: string;
  duration?: string;   
  quizzes?: Quiz[];
}

export interface Topic {
  id: string;
  title: string;
  desc: string;
  icon?: LucideIcon;
  examples: number;  // auto
  notes: number;     // auto
  chapters: Chapter[];
}

//  Raw data (no manual examples/notes count)
const rawTopics: Omit<Topic, "examples" | "notes">[] = [
  {
    id: "python",
    title: "Python",
    desc: "Learn Python programming from basics to advanced. Python is a high-level, interpreted programming language known for its simple syntax and readability.",
    chapters: [
      {
        id: "intro",
        title: "Introduction to Python",
        desc: "A brief overview of Python, what it's used for, and why it's so popular among developers.",
        notes: "Python is very beginner-friendly and widely used in web development, data science, and automation.",
        code: `print("Hello, Python!")`,
        duration: "1 week",
      },
      {
        id: "variables",
        title: "Variables and Data Types",
        desc: "Learn how to store data in variables and understand Python's fundamental data types.",
        notes: "Python is dynamically-typed. Common types are int, float, str, bool.",
        code: `name = "Alice"  # String
age = 30          # Integer
height = 5.5      # Float
is_student = True # Boolean
print(f"Name: {name}, Age: {age}")`,
        duration: "1 week",
      },
      {
        id: "data_structures",
        title: "Data Structures: Lists & Dictionaries",
        desc: "Explore core Python data structures: lists and dictionaries.",
        notes: "Lists are mutable and ordered. Dictionaries store data in key-value pairs.",
        code: `my_list = [1, "hello", 3.14]
my_dict = {"name": "Bob", "age": 25}
print(my_list[1])
print(my_dict["name"])`,
        duration: "1 week",
      },
      {
        id: "functions",
        title: "Functions in Python",
        desc: "Learn how to create and use functions to organize your code.",
        notes: "Functions help reuse code and keep it clean.",
        code: `def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))`,
        duration: "1 week",
      },
      {
        id: "oop",
        title: "Object-Oriented Programming (OOP)",
        desc: "Understand OOP principles in Python with classes and objects.",
        notes: "Key concepts: Encapsulation, Inheritance, Polymorphism.",
        code: `class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        return "Woof!"

my_dog = Dog("Buddy")
print(my_dog.name)
print(my_dog.bark())`,
        duration: "1 week",
      },
      {
        id: "modules",
        title: "Modules and Packages",
        desc: "Learn how to organize Python code with modules and packages.",
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
    desc: "Learn Java, a powerful, class-based, object-oriented language used for enterprise apps and Android.",
    chapters: [
      {
        id: "intro_java",
        title: "Introduction to Java",
        desc: "An overview of Java, JVM, and why it's 'write once, run anywhere'.",
        notes: "Java is strongly-typed. Entry point is the main method.",
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
        desc: "Understand Java's primitive data types and variable declarations.",
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
    ],
  },
];

//  Auto calculate examples + notes
export const topicsData: Topic[] = rawTopics.map((topic) => {
  const examples = topic.chapters.filter((c) => c.code?.trim()).length;
  const notes = topic.chapters.filter((c) => c.notes?.trim()).length;

  return {
    ...topic,
    examples,
    notes,
  };
});
