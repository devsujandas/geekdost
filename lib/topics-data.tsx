"use client"

export interface Topic {
  id: string
  slug: string
  title: string
  description: string
  icon: string
  color: string
  category: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  tags: string[]
  roadmap: RoadmapItem[]
  notes: string[]
  codeSnippets: CodeSnippet[]
  image?: string // Optional image property for image view
}

export interface RoadmapItem {
  id: string
  title: string
  description: string
  duration: string
  completed?: boolean
}

export interface CodeSnippet {
  id: string
  title: string
  description: string
  language: string
  code: string
}

export const topicsData: Topic[] = [
  {
  id: "python", 
  slug: "python", 
  title: "Python",
  description: "Master Python basics and data science fundamentals",
  icon: "FaPython",
  color: "from-blue-500 to-yellow-500",
  category: "Programming",
  difficulty: "Beginner",
  tags: ["python", "data-science", "automation"],
  image: "/images/python.png", //  added for image view
  roadmap: [
    {
      id: "py-1",
      title: "Python Basics",
      description: "Variables, data types, control structures",
      duration: "2 weeks",
    },
    {
      id: "py-2",
      title: "Functions & Modules",
      description: "Creating reusable code components",
      duration: "1 week",
    },
    {
      id: "py-3",
      title: "OOP Concepts",
      description: "Classes, objects, inheritance",
      duration: "2 weeks",
    },
    {
      id: "py-4",
      title: "Data Science Libraries",
      description: "NumPy, Pandas, Matplotlib",
      duration: "3 weeks",
    },
  ],
  notes: [
    "Python is beginner-friendly with readable syntax",
    "Great for data science, web development, and automation",
    "Large ecosystem of libraries and frameworks",
    "Strong community support and documentation",
  ],
  codeSnippets: [
    {
      id: "py-snippet-1",
      title: "Install Data Science Libraries",
      description: "Essential packages for data analysis",
      language: "bash",
      code: "pip install numpy pandas matplotlib seaborn jupyter",
    },
    {
      id: "py-snippet-2",
      title: "Basic Data Analysis",
      description: "Load and explore CSV data",
      language: "python",
      code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Load data
df = pd.read_csv("data.csv")

# Basic info
print(df.head())
print(df.info())
print(df.describe())

# Simple visualization
df.plot(kind='hist')
plt.show()`,
    },
  ],
},
{
  "id": "javascript",
  "slug": "javascript",
  "title": "JavaScript",
  "description": "Master JavaScript for frontend and backend development. Learn from basics to advanced concepts including ES6+, async programming, and Node.js.",
  "icon": "FaJs",
  "color": "from-yellow-400 to-orange-500",
  "category": "Programming",
  "difficulty": "Beginner",
  "tags": ["javascript", "web-development", "nodejs", "frontend", "backend"],
  "image": "/images/javascript.jpeg", //image
  "roadmap": [
    {
      "id": "js-1",
      "title": "JavaScript Basics",
      "description": "Variables, data types, operators, and basic syntax",
      "duration": "2 weeks"
    },
    {
      "id": "js-2",
      "title": "Control Flow & Functions",
      "description": "Conditionals, loops, functions, and scope",
      "duration": "2 weeks"
    },
    {
      "id": "js-3",
      "title": "DOM Manipulation",
      "description": "Selecting elements, event handling, and dynamic content",
      "duration": "2 weeks"
    },
    {
      "id": "js-4",
      "title": "ES6+ Features",
      "description": "Arrow functions, destructuring, template literals, and modules",
      "duration": "2 weeks"
    },
    {
      "id": "js-5",
      "title": "Arrays & Objects",
      "description": "Advanced array methods, object manipulation, and JSON",
      "duration": "2 weeks"
    },
    {
      "id": "js-6",
      "title": "Asynchronous JavaScript",
      "description": "Callbacks, promises, async/await, and fetch API",
      "duration": "3 weeks"
    },
    {
      "id": "js-7",
      "title": "Error Handling & Debugging",
      "description": "Try/catch, debugging tools, and error handling strategies",
      "duration": "1 week"
    },
    {
      "id": "js-8",
      "title": "Modern JavaScript Patterns",
      "description": "Modules, classes, and modern development patterns",
      "duration": "2 weeks"
    },
    {
      "id": "js-9",
      "title": "Node.js Fundamentals",
      "description": "Server-side JavaScript, npm, and basic server creation",
      "duration": "3 weeks"
    },
    {
      "id": "js-10",
      "title": "Advanced JavaScript Concepts",
      "description": "Closures, prototypal inheritance, and memory management",
      "duration": "2 weeks"
    },
    {
      "id": "js-11",
      "title": "Testing & Debugging",
      "description": "Unit testing, integration testing, and advanced debugging",
      "duration": "2 weeks"
    },
    {
      "id": "js-12",
      "title": "Build Tools & Bundlers",
      "description": "Webpack, Vite, and modern build processes",
      "duration": "2 weeks"
    },
    {
      "id": "js-13",
      "title": "Advanced Node.js",
      "description": "Express.js, REST APIs, authentication, and databases",
      "duration": "4 weeks"
    },
    {
      "id": "js-14",
      "title": "Performance Optimization",
      "description": "Memory management, runtime optimization, and best practices",
      "duration": "2 weeks"
    }
  ],
  "notes": [
    "JavaScript is essential for both frontend and backend web development",
    "Event-driven and asynchronous programming model is fundamental",
    "Huge ecosystem with over 1 million npm packages available",
    "Can be used for mobile apps (React Native), desktop apps (Electron), and IoT",
    "Regular updates with new ECMAScript specifications each year",
    "Strong community support and extensive learning resources"
  ],
  "codeSnippets": [
    {
      "id": "js-snippet-1",
      "title": "DOM Manipulation Example",
      "description": "Basic DOM manipulation with event handling",
      "language": "javascript",
      "code": "// Select elements and add event listener\nconst button = document.getElementById('myButton');\nconst output = document.getElementById('output');\n\nbutton.addEventListener('click', () => {\n  output.textContent = 'Button clicked!';\n  output.style.color = 'green';\n});\n\n// Create and append new element\nconst newElement = document.createElement('div');\nnewElement.textContent = 'New element created!';\ndocument.body.appendChild(newElement);"
    },
    {
      "id": "js-snippet-2",
      "title": "Async/Await with Fetch API",
      "description": "Modern approach to handle asynchronous operations",
      "language": "javascript",
      "code": "// Async function to fetch data from API\nasync function getUserData(userId) {\n  try {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);\n    \n    if (!response.ok) {\n      throw new Error('Network response was not ok');\n    }\n    \n    const userData = await response.json();\n    console.log('User data:', userData);\n    return userData;\n  } catch (error) {\n    console.error('Error fetching user data:', error);\n    throw error;\n  }\n}\n\n// Usage\ngetUserData(1)\n  .then(data => console.log('Data received:', data))\n  .catch(error => console.error('Error:', error));"
    },
    {
      "id": "js-snippet-3",
      "title": "Modern JavaScript Features",
      "description": "ES6+ features including destructuring, spread, and arrow functions",
      "language": "javascript",
      "code": "// Destructuring assignment\nconst person = { name: 'John', age: 30, city: 'New York' };\nconst { name, age, ...rest } = person;\nconsole.log(name); // 'John'\nconsole.log(rest); // { city: 'New York' }\n\n// Spread operator with arrays\nconst numbers = [1, 2, 3];\nconst newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]\n\n// Arrow functions and array methods\nconst users = [\n  { id: 1, name: 'Alice', active: true },\n  { id: 2, name: 'Bob', active: false },\n  { id: 3, name: 'Charlie', active: true }\n];\n\nconst activeUsers = users\n  .filter(user => user.active)\n  .map(user => ({\n    userId: user.id,\n    userName: user.name.toUpperCase()\n  }));\n\nconsole.log(activeUsers);\n// [{ userId: 1, userName: 'ALICE' }, { userId: 3, userName: 'CHARLIE' }]"
    }
  ]
},
  {
    id: "java",
    slug: "java", 
    title: "Java",
    description: "Object-oriented programming and Spring framework",
    icon: "FaJava",
    color: "from-red-500 to-orange-600",
    category: "Programming",
    difficulty: "Intermediate",
    tags: ["java", "object-oriented", "spring"],
    image: "/images/java.jpg", //  added for image view
    roadmap: [
      {
        id: "java-1",
        title: "Java Fundamentals",
        description: "Syntax, OOP principles, collections",
        duration: "4 weeks",
      },
      {
        id: "java-2",
        title: "Advanced Java",
        description: "Multithreading, exception handling, I/O",
        duration: "3 weeks",
      },
      {
        id: "java-3",
        title: "Spring Framework",
        description: "Dependency injection, Spring Boot",
        duration: "4 weeks",
      },
      {
        id: "java-4",
        title: "Database Integration",
        description: "JPA, Hibernate, Spring Data",
        duration: "3 weeks",
      },
    ],
    notes: [
      'Platform-independent "write once, run anywhere"',
      "Strong typing and object-oriented design",
      "Excellent for enterprise applications",
      "Large ecosystem and mature frameworks",
    ],
    codeSnippets: [
      {
        id: "java-snippet-1",
        title: "Compile and Run Java",
        description: "Basic Java compilation and execution",
        language: "bash",
        code: "javac HelloWorld.java\njava HelloWorld",
      },
      {
        id: "java-snippet-2",
        title: "Simple Java Class",
        description: "Basic class structure with main method",
        language: "java",
        code: `public class HelloWorld {
    private String message;
    
    public HelloWorld(String message) {
        this.message = message;
    }
    
    public void displayMessage() {
        System.out.println(message);
    }
    
    public static void main(String[] args) {
        HelloWorld hello = new HelloWorld("Hello, World!");
        hello.displayMessage();
    }
}`,
      },
    ],
  },
  {
    id: "web-development",
    slug: "web-development", 
    title: "Web Development",
    description: "HTML, CSS, React, and modern web technologies",
    icon: "FaCode",
    color: "from-blue-400 to-purple-600",
    category: "Web Development",
    difficulty: "Beginner",
    tags: ["html", "css", "react", "web"],
    image: "/images/web-development.jpeg", //  added for image view
    roadmap: [
      {
        id: "web-1",
        title: "HTML & CSS",
        description: "Structure and styling fundamentals",
        duration: "2 weeks",
      },
      {
        id: "web-2",
        title: "JavaScript & DOM",
        description: "Interactive web pages",
        duration: "3 weeks",
      },
      {
        id: "web-3",
        title: "React Fundamentals",
        description: "Components, state, props",
        duration: "4 weeks",
      },
      {
        id: "web-4",
        title: "Modern Tools",
        description: "Webpack, Vite, TypeScript",
        duration: "2 weeks",
      },
    ],
    notes: [
      "Foundation of all web applications",
      "Constantly evolving with new frameworks and tools",
      "Focus on user experience and accessibility",
      "Mobile-first responsive design is essential",
    ],
    codeSnippets: [
      {
        id: "web-snippet-1",
        title: "Create Next.js App",
        description: "Modern React framework with SSR",
        language: "bash",
        code: "npx create-next-app@latest my-app --typescript --tailwind --eslint\ncd my-app\nnpm run dev",
      },
      {
        id: "web-snippet-2",
        title: "React Component",
        description: "Functional component with hooks",
        language: "tsx",
        code: `import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using static data instead of API call
    const mockUser = {
      id: 1,
      name: "John Doe",
      email: "john@example.com"
    };
    
    // Simulate loading delay
    setTimeout(() => {
      setUser(mockUser);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
};

export default UserProfile;`,
      },
    ],
  },
  {
    id: "data-science",
    slug: "data-science", 
    title: "Data Science",
    description: "NumPy, Pandas, Matplotlib for data analysis",
    icon: "FaChartBar",
    color: "from-green-400 to-blue-500",
    category: "Data Science",
    difficulty: "Intermediate",
    tags: ["data-science", "numpy", "pandas", "matplotlib"],
    image: "/images/data-science.png", //  added for image view
    roadmap: [
      {
        id: "ds-1",
        title: "Python for Data Science",
        description: "NumPy arrays and operations",
        duration: "2 weeks",
      },
      {
        id: "ds-2",
        title: "Data Manipulation",
        description: "Pandas DataFrames and Series",
        duration: "3 weeks",
      },
      {
        id: "ds-3",
        title: "Data Visualization",
        description: "Matplotlib, Seaborn, Plotly",
        duration: "2 weeks",
      },
      {
        id: "ds-4",
        title: "Statistical Analysis",
        description: "Descriptive and inferential statistics",
        duration: "3 weeks",
      },
    ],
    notes: [
      "Essential for extracting insights from data",
      "Combines programming, statistics, and domain knowledge",
      "High demand in various industries",
      "Foundation for machine learning and AI",
    ],
    codeSnippets: [
      {
        id: "ds-snippet-1",
        title: "Data Science Setup",
        description: "Install essential data science libraries",
        language: "bash",
        code: "pip install numpy pandas matplotlib seaborn scikit-learn jupyter plotly",
      },
      {
        id: "ds-snippet-2",
        title: "Data Analysis Pipeline",
        description: "Complete data analysis workflow",
        language: "python",
        code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load and explore data
df = pd.read_csv('dataset.csv')
print(f"Dataset shape: {df.shape}")
print(df.info())
print(df.describe())

# Handle missing values
df = df.dropna()  # or df.fillna(method='forward')

# Data visualization
plt.figure(figsize=(12, 8))

# Correlation heatmap
plt.subplot(2, 2, 1)
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
plt.title('Correlation Matrix')

# Distribution plot
plt.subplot(2, 2, 2)
df['target_column'].hist(bins=30)
plt.title('Target Distribution')

# Box plot
plt.subplot(2, 2, 3)
sns.boxplot(data=df, x='category', y='value')
plt.title('Category vs Value')

# Scatter plot
plt.subplot(2, 2, 4)
plt.scatter(df['feature1'], df['feature2'])
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.title('Feature Relationship')

plt.tight_layout()
plt.show()`,
      },
    ],
  },
  {
    id: "machine-learning",
    slug: "machine-learning", 
    title: "Machine Learning",
    description: "scikit-learn and TensorFlow fundamentals",
    icon: "FaBrain",
    color: "from-purple-500 to-pink-500",
    category: "Data Science",
    difficulty: "Intermediate",
    tags: ["machine-learning", "scikit-learn", "tensorflow"],
    image: "/images/machine-learning.jpg", //  added for image view
    roadmap: [
      {
        id: "ml-1",
        title: "ML Fundamentals",
        description: "Supervised vs unsupervised learning",
        duration: "2 weeks",
      },
      {
        id: "ml-2",
        title: "Scikit-learn",
        description: "Classification, regression, clustering",
        duration: "4 weeks",
      },
      {
        id: "ml-3",
        title: "Deep Learning Basics",
        description: "Neural networks with TensorFlow",
        duration: "4 weeks",
      },
      {
        id: "ml-4",
        title: "Model Deployment",
        description: "Productionizing ML models",
        duration: "3 weeks",
      },
    ],
    notes: [
      "Automates decision-making from data patterns",
      "Requires strong foundation in statistics and programming",
      "Wide applications: recommendation systems, image recognition, NLP",
      "Continuous learning field with rapid developments",
    ],
    codeSnippets: [
      {
        id: "ml-snippet-1",
        title: "ML Libraries Setup",
        description: "Install machine learning essentials",
        language: "bash",
        code: "pip install scikit-learn tensorflow keras numpy pandas matplotlib seaborn",
      },
      {
        id: "ml-snippet-2",
        title: "Simple ML Pipeline",
        description: "Complete machine learning workflow",
        language: "python",
        code: `from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import StandardScaler
import pandas as pd

# Load data
df = pd.read_csv('data.csv')
X = df.drop('target', axis=1)
y = df['target']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

# Make predictions
y_pred = model.predict(X_test_scaled)

# Evaluate
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.4f}")
print(classification_report(y_test, y_pred))`,
      },
    ],
  },
  {
    id: "sql-databases",
    slug: "sql-databases", 
    title: "SQL & Databases",
    description: "CRUD operations, joins, and database design",
    icon: "FaDatabase",
    color: "from-indigo-500 to-purple-600",
    category: "Programming",
    difficulty: "Intermediate",
    tags: ["sql", "databases", "crud", "joins"],
    image: "/images/SQL-Database.webp", //  added for image view
    roadmap: [
      {
        id: "sql-1",
        title: "SQL Basics",
        description: "SELECT, INSERT, UPDATE, DELETE",
        duration: "2 weeks",
      },
      {
        id: "sql-2",
        title: "Advanced Queries",
        description: "JOINs, subqueries, aggregations",
        duration: "3 weeks",
      },
      {
        id: "sql-3",
        title: "Database Design",
        description: "Normalization, relationships, indexing",
        duration: "2 weeks",
      },
      {
        id: "sql-4",
        title: "Performance Optimization",
        description: "Query optimization, indexing strategies",
        duration: "2 weeks",
      },
    ],
    notes: [
      "Essential for data storage and retrieval",
      "Standardized language across different databases",
      "Critical for backend development and data analysis",
      "Understanding of ACID properties and transactions",
    ],
    codeSnippets: [
      {
        id: "sql-snippet-1",
        title: "Basic CRUD Operations",
        description: "Essential database operations",
        language: "sql",
        code: `-- Create table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data
INSERT INTO users (name, email) 
VALUES ('John Doe', 'john@example.com');

-- Select data
SELECT * FROM users WHERE email LIKE '%@example.com';

-- Update data
UPDATE users SET name = 'Jane Doe' WHERE id = 1;

-- Delete data
DELETE FROM users WHERE id = 1;`,
      },
      {
        id: "sql-snippet-2",
        title: "Advanced Joins",
        description: "Complex queries with multiple tables",
        language: "sql",
        code: `-- Complex JOIN query
SELECT 
    u.name,
    u.email,
    COUNT(o.id) as order_count,
    SUM(o.total) as total_spent,
    AVG(o.total) as avg_order_value
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at >= '2024-01-01'
GROUP BY u.id, u.name, u.email
HAVING COUNT(o.id) > 0
ORDER BY total_spent DESC
LIMIT 10;

-- Subquery example
SELECT name, email
FROM users
WHERE id IN (
    SELECT user_id 
    FROM orders 
    WHERE total > (SELECT AVG(total) FROM orders)
);`,
      },
    ],
  },
  {
    id: "git-github",
    slug: "git-github", 
    title: "Git & GitHub",
    description: "Version control and collaboration workflows",
    icon: "FaGitAlt",
    color: "from-orange-500 to-red-500",
    category: "DevOps",
    difficulty: "Beginner",
    tags: ["git", "github", "version-control", "collaboration"],
    image: "/images/git-github.png", //  added for image view
    roadmap: [
      {
        id: "git-1",
        title: "Git Basics",
        description: "init, add, commit, push, pull",
        duration: "1 week",
      },
      {
        id: "git-2",
        title: "Branching & Merging",
        description: "Feature branches, merge conflicts",
        duration: "2 weeks",
      },
      {
        id: "git-3",
        title: "GitHub Workflow",
        description: "Pull requests, code reviews, issues",
        duration: "2 weeks",
      },
      {
        id: "git-4",
        title: "Advanced Git",
        description: "Rebasing, cherry-picking, hooks",
        duration: "2 weeks",
      },
    ],
    notes: [
      "Essential for any software development project",
      "Enables collaboration and code history tracking",
      "Industry standard for version control",
      "GitHub provides additional project management features",
    ],
    codeSnippets: [
      {
        id: "git-snippet-1",
        title: "Git Workflow",
        description: "Basic Git commands for daily use",
        language: "bash",
        code: `# Initialize repository
git init
git remote add origin https://github.com/username/repo.git

# Basic workflow
git add .
git commit -m "Initial commit"
git push -u origin main

# Check status and history
git status
git log --oneline
git diff

# Branch operations
git branch feature-branch
git checkout feature-branch
git checkout -b new-feature  # create and switch`,
      },
      {
        id: "git-snippet-2",
        title: "Advanced Git Operations",
        description: "Complex Git workflows and commands",
        language: "bash",
        code: `# Merge vs Rebase
git checkout main
git merge feature-branch
# OR
git rebase main feature-branch

# Stash changes
git stash
git stash pop
git stash list

# Reset and revert
git reset --hard HEAD~1  # Dangerous!
git revert HEAD  # Safe way to undo

# Interactive rebase
git rebase -i HEAD~3

# Cherry pick
git cherry-pick <commit-hash>

# Clean up
git branch -d feature-branch
git remote prune origin`,
      },
    ],
  },
  {
    id: "devops",
    slug: "devops", 
    title: "DevOps",
    description: "Docker, CI/CD, and deployment automation",
    icon: "FaDocker",
    color: "from-blue-600 to-cyan-500",
    category: "DevOps",
    difficulty: "Intermediate",
    tags: ["devops", "docker", "ci-cd", "deployment"],
    image: "/images/devops.jpg", //  added for image view
    roadmap: [
      {
        id: "devops-1",
        title: "Docker Fundamentals",
        description: "Containers, images, Dockerfile",
        duration: "2 weeks",
      },
      {
        id: "devops-2",
        title: "CI/CD Pipelines",
        description: "GitHub Actions, automated testing",
        duration: "3 weeks",
      },
      {
        id: "devops-3",
        title: "Cloud Deployment",
        description: "AWS, Docker Compose, orchestration",
        duration: "3 weeks",
      },
      {
        id: "devops-4",
        title: "Monitoring & Logging",
        description: "Application monitoring and debugging",
        duration: "2 weeks",
      },
    ],
    notes: [
      "Bridges development and operations teams",
      "Focuses on automation and continuous delivery",
      "Essential for scalable and reliable applications",
      "Includes infrastructure as code practices",
    ],
    codeSnippets: [
      {
        id: "devops-snippet-1",
        title: "Docker Commands",
        description: "Essential Docker operations",
        language: "bash",
        code: `# Build and run container
docker build -t my-app .
docker run -p 3000:3000 my-app

# Container management
docker ps  # List running containers
docker ps -a  # List all containers
docker stop <container-id>
docker rm <container-id>

# Image management
docker images
docker rmi <image-id>
docker pull node:18-alpine

# Docker Compose
docker-compose up -d
docker-compose down
docker-compose logs -f`,
      },
      {
        id: "devops-snippet-2",
        title: "Dockerfile Example",
        description: "Multi-stage Docker build for Node.js app",
        language: "dockerfile",
        code: `# Multi-stage build
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runner

WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/node_modules ./node_modules
COPY . .

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "start"]`,
      },
    ],
  },
  {
    id: "ai-llms",
    slug: "ai-llms", 
    title: "AI & LLMs",
    description: "Prompt engineering and OpenAI API integration",
    icon: "FaRobot",
    color: "from-emerald-500 to-teal-600",
    category: "Data Science",
    difficulty: "Advanced",
    tags: ["ai", "llms", "openai", "prompt-engineering"],
    image: "/images/ai-llms.jpg", //  added for image view
    roadmap: [
      {
        id: "ai-1",
        title: "AI Fundamentals",
        description: "Understanding LLMs and their capabilities",
        duration: "1 week",
      },
      {
        id: "ai-2",
        title: "Prompt Engineering",
        description: "Crafting effective prompts",
        duration: "2 weeks",
      },
      {
        id: "ai-3",
        title: "API Integration",
        description: "OpenAI API, embeddings, fine-tuning",
        duration: "3 weeks",
      },
      {
        id: "ai-4",
        title: "AI Applications",
        description: "Building AI-powered applications",
        duration: "4 weeks",
      },
    ],
    notes: [
      "Rapidly evolving field with new models regularly",
      "Prompt engineering is crucial for effective AI use",
      "Understanding limitations and ethical considerations",
      "Integration with existing applications and workflows",
    ],
    codeSnippets: [
      {
        id: "ai-snippet-1",
        title: "OpenAI Setup Guide",
        description: "Getting started with AI development",
        language: "bash",
        code: "npm install openai\n# Learn about AI development\n# Visit OpenAI documentation for setup guides",
      },
      {
        id: "ai-snippet-2",
        title: "Chat Completion Concept",
        description: "Understanding AI chat completions",
        language: "javascript",
        code: `// Conceptual example of AI chat completion
// This shows the structure without actual API calls

const chatCompletion = {
  messages: [
    {
      role: "system",
      content: "You are a helpful programming assistant."
    },
    {
      role: "user",
      content: "Explain async/await in JavaScript"
    }
  ],
  model: "gpt-3.5-turbo",
  max_tokens: 500,
  temperature: 0.7,
};

// In a real application, you would:
// 1. Set up proper API credentials securely
// 2. Handle errors appropriately
// 3. Implement rate limiting
// 4. Add user input validation

console.log('This is a conceptual example for learning');`,
      },
    ],
  },
  {
    id: "cloud-computing",
    slug: "cloud-computing", 
    title: "Cloud Computing",
    description: "AWS, GCP, Azure fundamentals and services",
    icon: "FaCloud",
    color: "from-sky-400 to-blue-600",
    category: "Infrastructure",
    difficulty: "Intermediate",
    tags: ["cloud", "aws", "gcp", "azure"],
    image: "/images/Cloud-Computing.png", //  added for image view
    roadmap: [
      {
        id: "cloud-1",
        title: "Cloud Fundamentals",
        description: "IaaS, PaaS, SaaS concepts",
        duration: "1 week",
      },
      {
        id: "cloud-2",
        title: "AWS Basics",
        description: "EC2, S3, Lambda, RDS",
        duration: "4 weeks",
      },
      {
        id: "cloud-3",
        title: "Multi-Cloud",
        description: "GCP and Azure services",
        duration: "3 weeks",
      },
      {
        id: "cloud-4",
        title: "Cloud Architecture",
        description: "Scalability, security, cost optimization",
        duration: "3 weeks",
      },
    ],
    notes: [
      "Essential for modern application deployment",
      "Provides scalability and cost-effectiveness",
      "Multiple providers with different strengths",
      "Security and compliance are critical considerations",
    ],
    codeSnippets: [
      {
        id: "cloud-snippet-1",
        title: "AWS CLI Setup",
        description: "Configure AWS command line interface",
        language: "bash",
        code: `# Install AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Configure credentials
aws configure
# Enter: Access Key ID, Secret Access Key, Region, Output format

# Basic commands
aws s3 ls
aws ec2 describe-instances
aws lambda list-functions`,
      },
      {
        id: "cloud-snippet-2",
        title: "Simple Lambda Function",
        description: "AWS Lambda function with Node.js",
        language: "javascript",
        code: `// index.js - AWS Lambda function
exports.handler = async (event) => {
    console.log('Event:', JSON.stringify(event, null, 2));
    
    try {
        // Process the event
        const result = {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                message: 'Hello from Lambda!',
                timestamp: new Date().toISOString(),
                input: event
            })
        };
        
        return result;
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Internal Server Error',
                message: error.message
            })
        };
    }
};`,
      },
    ],
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity", 
    title: "Cybersecurity",
    description: "Web security, OWASP, HTTPS, and authentication",
    icon: "FaShieldAlt",
    color: "from-red-500 to-pink-600",
    category: "Security",
    difficulty: "Intermediate",
    tags: ["cybersecurity", "web-security", "owasp", "https"],
    image: "/images/cybersecurity.jpeg", //  added for image view
    roadmap: [
      {
        id: "cyber-1",
        title: "Security Fundamentals",
        description: "CIA triad, threat modeling",
        duration: "2 weeks",
      },
      {
        id: "cyber-2",
        title: "Web Security",
        description: "OWASP Top 10, XSS, CSRF, SQL injection",
        duration: "3 weeks",
      },
      {
        id: "cyber-3",
        title: "Authentication & Authorization",
        description: "JWT, OAuth, session management",
        duration: "2 weeks",
      },
      {
        id: "cyber-4",
        title: "Secure Development",
        description: "Secure coding practices, penetration testing",
        duration: "3 weeks",
      },
    ],
    notes: [
      "Critical for protecting applications and data",
      "Security should be built-in, not bolted-on",
      "Constantly evolving threat landscape",
      "Compliance requirements vary by industry",
    ],
    codeSnippets: [
      {
        id: "cyber-snippet-1",
        title: "Secure Headers",
        description: "Essential security headers for web apps",
        language: "javascript",
        code: `// Express.js security middleware
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);`,
      },
      {
        id: "cyber-snippet-2",
        title: "Input Validation",
        description: "Secure input validation and sanitization",
        language: "javascript",
        code: `const validator = require('validator');
const bcrypt = require('bcrypt');

// Input validation middleware
const validateInput = (req, res, next) => {
  const { email, password, name } = req.body;
  
  // Validate email
  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  
  // Validate password strength
  if (!password || password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters' });
  }
  
  // Sanitize name
  if (name) {
    req.body.name = validator.escape(name);
  }
  
  next();
};

// Password hashing
const hashPassword = async (password) => {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

// Password verification
const verifyPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};`,
      },
    ],
  },
]

export const getTopicById = (id: string): Topic | undefined => {
  return topicsData.find((topic) => topic.id === id)
}

export const searchTopics = (query: string): Topic[] => {
  const lowercaseQuery = query.toLowerCase()
  return topicsData.filter(
    (topic) =>
      topic.title.toLowerCase().includes(lowercaseQuery) ||
      topic.description.toLowerCase().includes(lowercaseQuery) ||
      topic.notes.some((note) => note.toLowerCase().includes(lowercaseQuery)),
  )
}

export const getCategories = (): string[] => {
  const categories = new Set<string>()
  categories.add("All")

  topicsData.forEach((topic) => {
    categories.add(topic.category)
  })

  return Array.from(categories).sort()
}

export const getDifficulties = (): string[] => {
  return ["All", "Beginner", "Intermediate", "Advanced"]
}

export const sortTopics = (topics: Topic[], sortBy: string): Topic[] => {
  const sortedTopics = [...topics]

  switch (sortBy) {
    case "title":
      return sortedTopics.sort((a, b) => a.title.localeCompare(b.title))
    case "difficulty":
      // Sort by estimated difficulty based on roadmap length
      return sortedTopics.sort((a, b) => a.roadmap.length - b.roadmap.length)
    case "category":
      return sortedTopics.sort((a, b) => a.category.localeCompare(b.category))
    case "default":
    default:
      return sortedTopics
  }
}
