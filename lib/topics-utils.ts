import { IconType } from "react-icons"
import { FaJava, FaPython } from "react-icons/fa"

//  Chapter interface
export interface Chapter {
  id: string
  title: string
  desc: string
  notes: string
  code: string
  duration?: string
}

//  Topic interface
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
  categories?: string[]  //  multiple categories
  difficulty?: string
  chapters: Chapter[]
}

//  Raw topics (no need to manually calculate examples/notes)
const rawTopics: Omit<Topic, "examples" | "notes" | "steps">[] = [
 






  //python-----------------------------------------------------------python



  
  {
    id: "java",
    title: "Java",
    desc: "Learn Java programming, an object-oriented language widely used for enterprise applications and Android development.",
    description: "Learn Java programming, an object-oriented language widely used for enterprise applications and Android development.", //  added
    category: "Programming",
    categories: ["Programming", "Backend", "OOP"],
    difficulty: "Intermediate",
    image: "/images/java.jpg", //  Python image path
    icon: FaJava, //  Java icon

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

//  Auto calculate examples, notes & steps
export const topicsData: Topic[] = rawTopics.map((topic) => {
  const examples = topic.chapters.filter((c) => c.code?.trim()).length
  const notes = topic.chapters.filter((c) => c.notes?.trim()).length
  const steps = topic.chapters.length

  return {
    ...topic,
    examples,
    notes,
    steps,
    description: topic.description ?? topic.desc,
  }
})
