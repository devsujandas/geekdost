// lib/topics-utils.ts

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
  quizzes?: Quiz[];
}

export interface Topic {
  id: string;
  title: string;
  desc: string;
  chapters: Chapter[];
}

export const topicsData: Topic[] = [
  {
    id: "python",
    title: "Python",
    desc: "Learn Python programming from basics to advanced. Python is a high-level, interpreted programming language known for its simple syntax and readability.",
    chapters: [
      {
        id: "intro",
        title: "Introduction to Python",
        desc: "A brief overview of Python, what it's used for, and why it's so popular among developers.",
        notes: "Python is very beginner-friendly and widely used in web development, data science, and automation. Its design philosophy emphasizes code readability.",
        code: "print('Hello, Python!')",
        quizzes: [
            {
                question: "Which of the following is Python used for?",
                options: ["Web Development", "Data Science", "Automation", "All of the above"],
                answer: "All of the above"
            }
        ]
      },
      {
        id: "variables",
        title: "Variables and Data Types",
        desc: "Learn how to store data in variables and understand Python's fundamental data types like strings, integers, floats, and booleans.",
        notes: "Python is dynamically-typed, meaning you don't need to declare the variable type explicitly. Common types are int, float, str, bool.",
        code: `name = "Alice"       # String\nage = 30            # Integer\nheight = 5.5        # Float\nis_student = True   # Boolean\nprint(f"Name: {name}, Age: {age}")`,
        quizzes: [
            {
                question: "What will be the type of the variable `x = 5.0` in Python?",
                options: ["int", "string", "float", "double"],
                answer: "float"
            }
        ]
      },
      {
        id: "data_structures",
        title: "Data Structures: Lists & Dictionaries",
        desc: "Explore core Python data structures: lists for ordered sequences and dictionaries for key-value pairs.",
        notes: "Lists are mutable (changeable) and ordered. Dictionaries are unordered (in older Python versions) and store data in key-value pairs.",
        code: `my_list = [1, "hello", 3.14]\nmy_dict = {"name": "Bob", "age": 25}\nprint(my_list[1])\nprint(my_dict["name"])`,
         quizzes: [
            {
                question: "How do you access the value 'Bob' from `my_dict = {'name': 'Bob'}`?",
                options: ["my_dict[0]", "my_dict.name", "my_dict['name']", "my_dict.get(0)"],
                answer: "my_dict['name']"
            }
        ]
      },
      {
        id: "oop",
        title: "Object-Oriented Programming (OOP)",
        desc: "Understand the principles of OOP in Python by creating and using classes and objects.",
        notes: "OOP helps in structuring programs into simple, reusable pieces of code blueprints (classes). Key concepts: Encapsulation, Inheritance, Polymorphism.",
        code: `class Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def bark(self):\n        return "Woof!"\n\nmy_dog = Dog("Buddy")\nprint(my_dog.name)\nprint(my_dog.bark())`,
        quizzes: [
            {
                question: "What is the special method used to initialize an object in a Python class?",
                options: ["__main__", "__init__", "__start__", "__new__"],
                answer: "__init__"
            }
        ]
      },
    ],
  },
  {
    id: "java",
    title: "Java",
    desc: "Learn Java, a powerful, class-based, object-oriented programming language used for building enterprise-scale applications, Android apps, and much more.",
    chapters: [
      {
        id: "intro_java",
        title: "Introduction to Java",
        desc: "An overview of Java, its history, the JVM (Java Virtual Machine), and why it's a 'write once, run anywhere' language.",
        notes: "Java is strongly-typed and its code must be compiled before it can be run. The main entry point of a Java application is the `main` method.",
        code: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`,
        quizzes: [
            {
                question: "What does JVM stand for?",
                options: ["Java Very Modern", "Java Virtual Machine", "Java Visual Machine", "Just Virtual Machine"],
                answer: "Java Virtual Machine"
            }
        ]
      },
      {
        id: "variables_java",
        title: "Variables and Data Types",
        desc: "Understand Java's primitive data types (int, double, boolean, etc.) and how to declare and initialize variables.",
        notes: "In Java, you must declare the type of a variable before you can use it. The main primitive types are `int`, `double`, `char`, and `boolean`. `String` is an object.",
        code: `public class Variables {\n    public static void main(String[] args) {\n        String name = "Budi";      // String\n        int age = 28;              // Integer\n        double height = 1.75;      // Double\n        boolean isDeveloper = true;  // Boolean\n        System.out.println("Name: " + name);\n    }\n}`,
        quizzes: [
            {
                question: "Which of these is NOT a primitive data type in Java?",
                options: ["int", "String", "boolean", "char"],
                answer: "String"
            }
        ]
      },
      {
        id: "control_flow_java",
        title: "Control Flow (If-Else)",
        desc: "Learn how to control the flow of execution in your Java programs using conditional statements like `if-else`.",
        notes: "Conditional statements allow your program to make decisions and execute different blocks of code based on certain conditions. Use curly braces `{}` to define code blocks.",
        code: `public class ControlFlow {\n    public static void main(String[] args) {\n        int score = 75;\n        if (score >= 90) {\n            System.out.println("Grade: A");\n        } else if (score >= 80) {\n            System.out.println("Grade: B");\n        } else {\n            System.out.println("Grade: C");\n        }\n    }\n}`,
        quizzes: [
            {
                question: "Which keyword is used to handle the case where none of the if/else if conditions are met?",
                options: ["default", "otherwise", "else", "except"],
                answer: "else"
            }
        ]
      },
      {
        id: "oop_java",
        title: "Object-Oriented Programming (OOP)",
        desc: "Dive into Java's core strength: OOP. Learn about classes, objects, constructors, and methods.",
        notes: "Java is fundamentally object-oriented. A class is a blueprint for creating objects. Key concepts are Encapsulation, Inheritance, and Polymorphism.",
        code: `class Car {\n    String brand;\n\n    // Constructor\n    public Car(String brand) {\n        this.brand = brand;\n    }\n\n    public void honk() {\n        System.out.println("Beep beep!");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car("Toyota");\n        System.out.println(myCar.brand);\n        myCar.honk();\n    }\n}`,
        quizzes: [
            {
                question: "What is a blueprint for creating objects in Java?",
                options: ["Method", "Variable", "Class", "Package"],
                answer: "Class"
            }
        ]
      },
    ],
  },
];

