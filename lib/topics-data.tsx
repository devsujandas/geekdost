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
  /* PYTHON */
  {
  "id": "python",
  "slug": "python",
  "title": "Python",
  "description": "A comprehensive Python roadmap covering everything from fundamentals to advanced topics including data science, web development, automation, machine learning, and software engineering best practices with extensive code examples.",
  "icon": "FaPython",
  "color": "from-blue-500 to-yellow-500",
  "category": "Programming",
  "difficulty": "Advanced",
  "tags": ["python", "data-science", "automation", "machine-learning", "web-development", "scripting", "software-engineering", "backend", "ai"],
  "image": "/images/python.png",
  "roadmap": [
    { 
      "id": "py-1", 
      "title": "Installation & Setup", 
      "description": "Download Python from python.org (recommended version 3.8+), install and verify PATH configuration, set up virtual environments, configure VS Code with Python extension, Jupyter Notebook, or PyCharm IDE. Understand the difference between interactive mode (REPL) and script execution, learn terminal/command prompt usage for Python execution, and set up debugging capabilities.", 
      "duration": "3-4 days" 
    },
    { 
      "id": "py-2", 
      "title": "Python Basics & Syntax", 
      "description": "Master Python syntax rules, variables and naming conventions, constants, all basic data types (int, float, str, bool, complex), type conversion functions (int(), float(), str(), bool()), user input handling with input(), advanced print formatting options, comments (single-line, multi-line, docstrings), and all arithmetic, comparison, and assignment operators.", 
      "duration": "1.5 weeks" 
    },
    { 
      "id": "py-3", 
      "title": "Control Structures & Flow", 
      "description": "Master conditional statements (if, elif, else, nested if), all logical operators (and, or, not), comparison chaining, for/while loops with else clauses, loop control keywords (break, continue, pass), range() function with different parameters, match-case statements (Python 3.10+), and build practical programs like calculators, number guessing games, and menu-driven applications.", 
      "duration": "1 week" 
    },
    { 
      "id": "py-4", 
      "title": "Functions & Modular Programming", 
      "description": "Define and call functions with proper documentation, parameters (positional, keyword) and return values (single and multiple), default arguments, variable-length arguments (*args, **kwargs), lambda functions, function annotations, scope rules (local, global, nonlocal), namespace concepts, importing built-in modules, creating and organizing custom modules, and understanding __name__ == \"__main__\" pattern.", 
      "duration": "1 week" 
    },
    { 
      "id": "py-5", 
      "title": "Data Structures & Collections", 
      "description": "Comprehensive exploration of lists (CRUD operations, slicing, copying methods), tuples (immutable sequences, packing/unpacking), sets (mathematical operations, frozensets), dictionaries (key-value operations, methods, views), advanced membership testing, sequence unpacking, list/set/dict comprehensions with conditions, mutability concepts, deep vs shallow copying, and practical use cases for each data structure.", 
      "duration": "1.5 weeks" 
    },
    { 
      "id": "py-6", 
      "title": "String Manipulation & Processing", 
      "description": "Master string indexing, slicing, concatenation, repetition, all important string methods (upper, lower, strip, split, join, replace, find, index, count, format), advanced formatting using f-strings (Python 3.6+) and format() method, Unicode handling, bytes vs strings, and regular expressions (re module) for advanced pattern matching, searching, and validation.", 
      "duration": "1 week" 
    },
    { 
      "id": "py-7", 
      "title": "File Handling & I/O Operations", 
      "description": "Learn to read, write, and append files in different modes (text, binary), use context managers (with statement) for automatic resource cleanup, handle CSV files with csv module (reader, writer, DictReader, DictWriter), work with JSON files using json module (load, loads, dump, dumps), handle file paths with pathlib and os.path, and understand file encodings and exceptions.", 
      "duration": "1 week" 
    },
    { 
      "id": "py-8", 
      "title": "Error & Exception Handling", 
      "description": "Understand different error types (syntax, runtime, logical), use try-except-else-finally blocks comprehensively, catch specific exceptions, raise exceptions with custom messages, create custom exception classes, use exception chaining, and write robust, production-quality error-handling code with proper logging and user feedback.", 
      "duration": "3-4 days" 
    },
    { 
      "id": "py-9", 
      "title": "Object-Oriented Programming (OOP)", 
      "description": "Deep dive into classes, objects, instance attributes vs class attributes, methods (instance, class, static), constructors (__init__) and destructors (__del__), inheritance (single, multiple, multilevel), method resolution order (MRO), polymorphism, encapsulation (name mangling, properties), abstract base classes, dunder/magic methods (__str__, __repr__, __len__, __add__, etc.), and OOP design principles.", 
      "duration": "2 weeks" 
    },
    { 
      "id": "py-10", 
      "title": "Advanced Python Concepts", 
      "description": "Comprehensive exploration of iterators (__iter__, __next__), generators (yield, generator expressions), decorators (function decorators, class decorators, parameterized decorators), context managers (creating custom ones with classes and contextlib), descriptors, metaclasses, and understanding Python's data model and internal mechanisms for writing efficient, pythonic code.", 
      "duration": "1.5 weeks" 
    },
    { 
      "id": "py-11", 
      "title": "Virtual Environments & Dependency Management", 
      "description": "Create, activate, and manage virtual environments using venv and virtualenv, install and uninstall packages with pip (including version pinning), freeze dependencies into requirements.txt, understand dependency resolution, explore advanced tools like pipenv and poetry for professional dependency management, and create reproducible development environments.", 
      "duration": "3 days" 
    },
    { 
      "id": "py-12", 
      "title": "Python Standard Library", 
      "description": "Explore Python's extensive standard library: os and sys modules (system operations), datetime and time modules (date/time handling), math, statistics and random modules (mathematical operations), itertools (advanced iteration tools), functools (higher-order functions), collections (namedtuple, Counter, defaultdict, OrderedDict), json (JSON parsing), and re (regular expressions).", 
      "duration": "1 week" 
    },
    { 
      "id": "py-13", 
      "title": "Testing, Debugging & Logging", 
      "description": "Write comprehensive tests using unittest & pytest frameworks, use assert statements effectively, debug with pdb module and IDE debuggers, add logging with different levels (DEBUG, INFO, WARNING, ERROR, CRITICAL), configure log formatting and handlers, practice test-driven development (TDD), and measure code coverage with coverage.py.", 
      "duration": "1 week" 
    },
    { 
      "id": "py-14", 
      "title": "Functional Programming Paradigms", 
      "description": "Learn functional programming concepts: pure functions, immutability, first-class and higher-order functions, lambda expressions, map, filter, reduce functions, function composition, partial functions, closures, decorators, recursion, and iterators/generators. Understand when functional approaches are preferable to imperative programming.", 
      "duration": "4-5 days" 
    },
    { 
      "id": "py-15", 
      "title": "Data Science & Scientific Computing", 
      "description": "Master NumPy (arrays, universal functions, broadcasting, indexing, vectorization), Pandas (Series, DataFrame, data cleaning, transformation, grouping, aggregation, merging, time series), Matplotlib (figure, axes, plots, customization, subplots), Seaborn (statistical visualization), and SciPy (scientific computing). Work with real datasets for practical experience.", 
      "duration": "3 weeks" 
    },
    { 
      "id": "py-16", 
      "title": "Web APIs & HTTP Requests", 
      "description": "Use requests module for all HTTP methods (GET, POST, PUT, DELETE), handle JSON responses and errors, work with REST APIs (authentication, headers, parameters), use GitHub API, weather APIs, and other public APIs, handle rate limiting, manage sessions and cookies, and build robust API clients with proper error handling and retry mechanisms.", 
      "duration": "1 week" 
    },
    { 
      "id": "py-17", 
      "title": "Automation & Scripting", 
      "description": "Automate repetitive tasks using os, shutil, pathlib, subprocess modules, file and directory operations, schedule tasks with sched and APScheduler, send emails with smtplib, automate web browsing with Selenium, web scraping with BeautifulSoup and Scrapy, generate reports automatically, and create system administration scripts.", 
      "duration": "1 week" 
    },
    { 
      "id": "py-18", 
      "title": "Database Programming", 
      "description": "Work with SQLite (connection management, CRUD operations, transactions), use parameterized queries to prevent SQL injection, fetch results with different methods, understand database normalization, explore ORM with SQLAlchemy (declarative base, sessions, relationships), and connect to other databases like PostgreSQL and MySQL using appropriate drivers.", 
      "duration": "1.5 weeks" 
    },
    { 
      "id": "py-19", 
      "title": "Web Development with Flask/Django", 
      "description": "Learn Flask (routing, templates with Jinja2, forms with WTForms, sessions, blueprints, REST APIs) and Django basics (MTV architecture, models, views, templates, forms, admin interface). Build complete CRUD applications with database integration, user authentication, and deployment preparation.", 
      "duration": "2 weeks" 
    },
    { 
      "id": "py-20", 
      "title": "Machine Learning Fundamentals", 
      "description": "Use scikit-learn for complete ML workflow (data preprocessing, train-test split, feature engineering), train and evaluate models (Linear Regression, Logistic Regression, Decision Trees, Random Forests, SVM), understand evaluation metrics (accuracy, precision, recall, F1, MAE, MSE), perform cross-validation, and visualize results with matplotlib.", 
      "duration": "3 weeks" 
    },
    { 
      "id": "py-21", 
      "title": "Version Control & Deployment", 
      "description": "Master Git basics (init, add, commit, push, pull, branching, merging, rebasing), collaborate via GitHub/GitLab (issues, PRs, projects), deploy Flask/Django apps on platforms like Heroku, Render, or Railway, use Docker for containerization, manage environment variables and secrets, and implement basic CI/CD pipelines with GitHub Actions.", 
      "duration": "1 week" 
    },
    { 
      "id": "py-22", 
      "title": "Project Building & Portfolio Development", 
      "description": "Apply knowledge by building real-world projects: CLI tools, file organizers, web scrapers, Flask/Django CRUD apps, data analysis dashboards, machine learning models (spam classifier, house price predictor, sentiment analysis), automation scripts, and REST APIs. Focus on code quality, documentation, and deployment.", 
      "duration": "2-3 weeks" 
    },
    { 
      "id": "py-23", 
      "title": "Code Quality & Best Practices", 
      "description": "Follow PEP8 style guide rigorously, write readable and maintainable code, use docstrings and type hints (PEP 484), practice code reviews, refactor code effectively, learn common design patterns (Singleton, Factory, Observer, etc.), implement SOLID principles, and use linters (flake8, pylint) and formatters (black, isort).", 
      "duration": "4-5 days" 
    },
    { 
      "id": "py-24", 
      "title": "Performance Optimization & Profiling", 
      "description": "Profile code with cProfile and line_profiler, use timeit for micro-benchmarking, optimize loops and algorithms, use built-in functions effectively, implement caching with functools.lru_cache, understand Big-O notation, utilize multiprocessing and threading for concurrency, and apply memory optimization techniques.", 
      "duration": "4-5 days" 
    },
    { 
      "id": "py-25", 
      "title": "Career Preparation & Advanced Topics", 
      "description": "Prepare for technical interviews with Python coding problems, master common algorithms & data structures in Python, explore open-source contributions, create a professional GitHub portfolio, learn about async programming with asyncio, explore data engineering with Apache Spark, and stay updated with Python's evolution and new features.", 
      "duration": "1 week" 
    }
  ],
  "notes": [
    "Python is consistently ranked among the top programming languages worldwide due to its versatility, readability, and extensive ecosystem. It dominates in data science, AI/ML, automation, web development (backend), scientific computing, DevOps, and education sectors.",
    "Begin with proper Python installation from python.org (never the Microsoft Store version on Windows). Always add Python to PATH during installation and verify by running 'python --version' in your terminal/command prompt.",
    "Set up a professional development environment: VS Code with Python extension is recommended for beginners and professionals alike. Configure linting, formatting, debugging, and test integration for optimal productivity.",
    "Virtual environments are non-negotiable for Python development. Use 'python -m venv envname' to create isolated environments for each project. Activate with 'source envname/bin/activate' (Linux/Mac) or 'envname\\Scripts\\activate' (Windows).",
    "Master PEP 8 style guide early: use 4 spaces per indentation level, maximum 79 characters per line, proper spacing around operators and after commas, and descriptive variable/function names (snake_case for variables/functions, PascalCase for classes).",
    "Documentation is crucial: write comprehensive docstrings for all modules, classes, and functions following Google-style or NumPy-style conventions. Use type hints (PEP 484) for better code clarity and IDE support.",
    "Error handling should be proactive, not reactive. Use specific exception types in try-except blocks, avoid bare except clauses, and create custom exception classes for your application's unique error conditions.",
    "Leverage Python's rich standard library before reaching for third-party packages. Many common tasks can be accomplished with built-in modules like os, sys, collections, itertools, functools, and json.",
    "Embrace Pythonic code patterns: use list/dict comprehensions instead of loops for simple transformations, leverage built-in functions like enumerate() and zip(), utilize context managers for resource handling, and prefer EAFP (Easier to Ask for Forgiveness than Permission) over LBYL (Look Before You Leap).",
    "Practice consistently with small projects after each learning milestone: build a calculator, todo list, number guessing game, text-based adventure, password manager, web scraper, or data visualization dashboard.",
    "Version control with Git is essential. Commit frequently with descriptive messages, use branches for new features, and host your code on GitHub or GitLab. A strong GitHub profile is invaluable for job seekers.",
    "Use logging instead of print statements for anything beyond simple debugging. Configure different log levels and handlers to create production-ready applications with proper audit trails.",
    "Testing is not optional for professional development. Write unit tests for your functions, integration tests for your modules, and practice test-driven development (TDD) for critical components.",
    "Understand Python's memory management and performance characteristics. Learn about reference counting, garbage collection, and how to avoid common pitfalls like circular references and memory leaks.",
    "Master object-oriented principles but don't force OOP where functional approaches are simpler. Use classes when you need to maintain state or combine data with behavior, but remember that functions are first-class objects in Python.",
    "Dependency management is critical for reproducible builds. Use requirements.txt with pinned versions for production deployments. Consider poetry or pipenv for more complex dependency resolution.",
    "Refactor mercilessly: eliminate code duplication, break large functions into smaller ones, improve naming, and simplify complex logic. Clean code is maintainable code.",
    "Organize large projects into packages with clear separation of concerns. Use __init__.py files appropriately and structure your code for easy testing and collaboration.",
    "Performance optimization should be data-driven, not speculative. Profile your code to identify actual bottlenecks before optimizing. Often, algorithm improvements yield better results than micro-optimizations.",
    "Participate in the Python community: join local meetups, attend conferences (PyCon), contribute to open-source projects, and engage on platforms like Stack Overflow, Reddit's r/learnpython, and Real Python.",
    "Stay current with Python developments: follow PEPs (Python Enhancement Proposals), read release notes for new versions, and gradually adopt new features like pattern matching, structural pattern matching, and improved error messages.",
    "Prepare for technical interviews by practicing algorithm problems on LeetCode, HackerRank, and Codewars. Focus on Python-specific optimizations and learn to discuss time and space complexity clearly.",
    "Explore specialized domains: web development (Django, Flask, FastAPI), data science (pandas, NumPy, scikit-learn), machine learning (TensorFlow, PyTorch), automation (Selenium, BeautifulSoup), and DevOps (Fabric, Ansible).",
    "Document your learning journey through blog posts, tutorial creation, and project documentation. Teaching others reinforces your own understanding and builds valuable communication skills."
  ],
  "codeSnippets": [
    { 
      "id": "py-snippet-1", 
      "title": "Hello World", 
      "description": "Basic program to print output", 
      "language": "python", 
      "code": "print(\"Hello, Python!\")\nprint(\"Welcome to Python Programming\")" 
    },
    { 
      "id": "py-snippet-2", 
      "title": "Variables & Input", 
      "description": "Store user input and display it with formatting", 
      "language": "python", 
      "code": "name = input(\"Enter your name: \")\nage = int(input(\"Enter your age: \"))\nprint(f\"Hello {name}, you are {age} years old!\")" 
    },
    { 
      "id": "py-snippet-3", 
      "title": "Type Conversion", 
      "description": "Convert between different data types safely", 
      "language": "python", 
      "code": "# Safe type conversion with error handling\ntry:\n    number = float(\"123.45\")\n    print(f\"Converted number: {number}\")\nexcept ValueError:\n    print(\"Invalid number format\")" 
    },
    { 
      "id": "py-snippet-4", 
      "title": "Arithmetic Operations", 
      "description": "Perform mathematical calculations", 
      "language": "python", 
      "code": "a, b = 10, 3\nprint(f\"Addition: {a + b}\")\nprint(f\"Subtraction: {a - b}\")\nprint(f\"Multiplication: {a * b}\")\nprint(f\"Division: {a / b}\")\nprint(f\"Floor Division: {a // b}\")\nprint(f\"Exponentiation: {a ** b}\")\nprint(f\"Modulus: {a % b}\")" 
    },
    { 
      "id": "py-snippet-5", 
      "title": "If-Elif-Else", 
      "description": "Conditional decision making with multiple branches", 
      "language": "python", 
      "code": "score = 85\n\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 70:\n    grade = \"C\"\nelif score >= 60:\n    grade = \"D\"\nelse:\n    grade = \"F\"\n\nprint(f\"Score: {score}, Grade: {grade}\")" 
    },
    { 
      "id": "py-snippet-6", 
      "title": "Match-Case (Python 3.10+)", 
      "description": "Structural pattern matching for complex conditions", 
      "language": "python", 
      "code": "def handle_command(command):\n    match command.split():\n        case [\"quit\"]:\n            return \"Quitting application...\"\n        case [\"load\", filename]:\n            return f\"Loading {filename}\"\n        case [\"save\", filename]:\n            return f\"Saving {filename}\"\n        case [\"delete\", *files]:\n            return f\"Deleting {', '.join(files)}\"\n        case _:\n            return \"Unknown command\"\n\nprint(handle_command(\"load document.txt\"))" 
    },
    { 
      "id": "py-snippet-7", 
      "title": "For Loop with Range", 
      "description": "Iterate over a sequence of numbers", 
      "language": "python", 
      "code": "print(\"Counting from 1 to 5:\")\nfor i in range(1, 6):\n    print(i)\n\nprint(\"\\nEven numbers from 0 to 10:\")\nfor i in range(0, 11, 2):\n    print(i)" 
    },
    { 
      "id": "py-snippet-8", 
      "title": "While Loop with Condition", 
      "description": "Repeat code until condition is false", 
      "language": "python", 
      "code": "count = 0\nmax_count = 5\n\nwhile count < max_count:\n    print(f\"Count: {count}\")\n    count += 1\nelse:\n    print(\"Loop completed successfully!\")" 
    },
    { 
      "id": "py-snippet-9", 
      "title": "Loop Control Statements", 
      "description": "Use break, continue, and pass in loops", 
      "language": "python", 
      "code": "print(\"Numbers from 1 to 10 (skipping 5 and stopping at 8):\")\nfor i in range(1, 11):\n    if i == 5:\n        continue  # Skip this iteration\n    if i == 9:\n        break     # Exit loop entirely\n    print(i)\nelse:\n    print(\"This won't print because loop was broken\")" 
    },
    { 
      "id": "py-snippet-10", 
      "title": "Function Definition", 
      "description": "Create reusable code with functions", 
      "language": "python", 
      "code": "def calculate_area(length, width):\n    \"\"\"Calculate the area of a rectangle.\n    \n    Args:\n        length (float): The length of the rectangle\n        width (float): The width of the rectangle\n    \n    Returns:\n        float: The area of the rectangle\n    \"\"\"\n    return length * width\n\n# Using the function\narea = calculate_area(10, 5)\nprint(f\"Area: {area}\")" 
    },
    { 
      "id": "py-snippet-11", 
      "title": "Lambda Functions", 
      "description": "Create anonymous functions for simple operations", 
      "language": "python", 
      "code": "# Simple lambda function\nsquare = lambda x: x ** 2\nprint(f\"Square of 5: {square(5)}\")\n\n# Lambda with multiple parameters\nmultiply = lambda x, y: x * y\nprint(f\"Product of 3 and 4: {multiply(3, 4)}\")\n\n# Using lambda with built-in functions\nnumbers = [1, 2, 3, 4, 5]\nsquared_numbers = list(map(lambda x: x ** 2, numbers))\nprint(f\"Squared numbers: {squared_numbers}\")" 
    },
    { 
      "id": "py-snippet-12", 
      "title": "List Operations", 
      "description": "Create and manipulate lists", 
      "language": "python", 
      "code": "# Creating and modifying a list\nfruits = [\"apple\", \"banana\"]\nfruits.append(\"cherry\")\nfruits.insert(1, \"blueberry\")\nfruits.extend([\"date\", \"elderberry\"])\nprint(f\"All fruits: {fruits}\")\n\n# Accessing elements\nprint(f\"First fruit: {fruits[0]}\")\nprint(f\"Last fruit: {fruits[-1]}\")\nprint(f\"Sliced list: {fruits[1:4]}\")\n\n# Removing elements\nremoved_fruit = fruits.pop(2)\nprint(f\"Removed: {removed_fruit}, Remaining: {fruits}\")\n\n# List length\nprint(f\"Number of fruits: {len(fruits)}\")" 
    },
    { 
      "id": "py-snippet-13", 
      "title": "List Comprehensions", 
      "description": "Create lists concisely with comprehensions", 
      "language": "python", 
      "code": "# Basic list comprehension\nsquares = [x**2 for x in range(1, 6)]\nprint(f\"Squares: {squares}\")\n\n# List comprehension with condition\neven_squares = [x**2 for x in range(1, 11) if x % 2 == 0]\nprint(f\"Even squares: {even_squares}\")\n\n# Nested list comprehension\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflattened = [num for row in matrix for num in row]\nprint(f\"Flattened matrix: {flattened}\")\n\n# Dictionary comprehension\nsquare_dict = {x: x**2 for x in range(1, 6)}\nprint(f\"Square dictionary: {square_dict}\")" 
    },
    { 
      "id": "py-snippet-14", 
      "title": "Tuple Operations", 
      "description": "Work with immutable sequences", 
      "language": "python", 
      "code": "# Creating tuples\ncoordinates = (10, 20)\nprint(f\"Coordinates: {coordinates}\")\n\n# Accessing tuple elements\nx, y = coordinates  # Tuple unpacking\nprint(f\"X: {x}, Y: {y}\")\n\n# Single element tuple (note the comma)\nsingle_tuple = (42,)\nprint(f\"Single element tuple: {single_tuple}\")\n\n# Returning multiple values from function\ndef get_name_and_age():\n    return \"Alice\", 30\n\nname, age = get_name_and_age()\nprint(f\"Name: {name}, Age: {age}\")" 
    },
    { 
      "id": "py-snippet-15", 
      "title": "Set Operations", 
      "description": "Work with unordered unique collections", 
      "language": "python", 
      "code": "# Creating sets\nfruits = {\"apple\", \"banana\", \"cherry\", \"apple\"}  # Duplicates removed\nprint(f\"Fruits set: {fruits}\")\n\n# Set operations\nset_a = {1, 2, 3, 4, 5}\nset_b = {4, 5, 6, 7, 8}\n\nprint(f\"Union: {set_a | set_b}\")\nprint(f\"Intersection: {set_a & set_b}\")\nprint(f\"Difference: {set_a - set_b}\")\nprint(f\"Symmetric Difference: {set_a ^ set_b}\")\n\n# Set methods\nset_a.add(6)\nset_a.remove(1)  # Raises KeyError if not found\nset_a.discard(10)  # No error if not found\nprint(f\"Modified set: {set_a}\")" 
    },
    { 
      "id": "py-snippet-16", 
      "title": "Dictionary Operations", 
      "description": "Work with key-value pairs", 
      "language": "python", 
      "code": "# Creating dictionaries\nperson = {\"name\": \"Bob\", \"age\": 25, \"city\": \"New York\"}\nprint(f\"Person: {person}\")\n\n# Accessing values\nprint(f\"Name: {person['name']}\")\nprint(f\"Age: {person.get('age')}\")\nprint(f\"Country: {person.get('country', 'USA')}\")  # Default value\n\n# Adding and modifying\nperson[\"email\"] = \"bob@example.com\"\nperson[\"age\"] = 26\nprint(f\"Updated person: {person}\")\n\n# Iterating through dictionary\nprint(\"\\nKey-Value pairs:\")\nfor key, value in person.items():\n    print(f\"{key}: {value}\")\n\n# Dictionary comprehension\nsquare_dict = {x: x**2 for x in range(1, 6)}\nprint(f\"\\nSquare dictionary: {square_dict}\")" 
    },
    { 
      "id": "py-snippet-17", 
      "title": "Enumerate Function", 
      "description": "Get index and value while iterating", 
      "language": "python", 
      "code": "fruits = [\"apple\", \"banana\", \"cherry\"]\n\nprint(\"Using enumerate:\")\nfor index, fruit in enumerate(fruits):\n    print(f\"Index {index}: {fruit}\")\n\nprint(\"\\nWith custom start index:\")\nfor index, fruit in enumerate(fruits, start=1):\n    print(f\"#{index}: {fruit}\")" 
    },
    { 
      "id": "py-snippet-18", 
      "title": "Zip Function", 
      "description": "Combine multiple iterables", 
      "language": "python", 
      "code": "names = [\"Alice\", \"Bob\", \"Charlie\"]\nages = [25, 30, 35]\ncities = [\"Paris\", \"London\", \"Berlin\"]\n\nprint(\"Combining lists with zip:\")\nfor name, age, city in zip(names, ages, cities):\n    print(f\"{name} is {age} years old and lives in {city}\")\n\nprint(\"\\nCreating dictionary from two lists:\")\nname_age_dict = dict(zip(names, ages))\nprint(name_age_dict)" 
    },
    { 
      "id": "py-snippet-19", 
      "title": "String Formatting", 
      "description": "Format strings using different methods", 
      "language": "python", 
      "code": "name = \"Alice\"\nage = 30\n\n# f-strings (Python 3.6+)\nprint(f\"Hello {name}, you are {age} years old!\")\n\n# format() method\nprint(\"Hello {}, you are {} years old!\".format(name, age))\nprint(\"Hello {0}, you are {1} years old!\".format(name, age))\n\n# Formatting numbers\npi = 3.1415926535\nprint(f\"Pi rounded to 2 decimals: {pi:.2f}\")\n\n# Formatting large numbers\nlarge_number = 1000000\nprint(f\"Formatted number: {large_number:,}\")" 
    },
    { 
      "id": "py-snippet-20", 
      "title": "Regular Expressions", 
      "description": "Pattern matching with regex", 
      "language": "python", 
      "code": "import re\n\n# Finding all matches\ntext = \"Hello123World456Python789\"\nnumbers = re.findall(r\"\\d+\", text)\nprint(f\"Numbers found: {numbers}\")\n\n# Searching for pattern\npattern = r\"\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b\"\ntext = \"Contact us at info@example.com or support@company.org\"\nemails = re.findall(pattern, text)\nprint(f\"Emails found: {emails}\")\n\n# Splitting text\nresult = re.split(r\"\\d+\", text)\nprint(f\"Split result: {result}\")\n\n# Replacement\nnew_text = re.sub(r\"\\d+\", \"NUMBER\", text)\nprint(f\"After replacement: {new_text}\")" 
    },
    { 
      "id": "py-snippet-21", 
      "title": "File Handling", 
      "description": "Read and write files safely", 
      "language": "python", 
      "code": "# Writing to a file\nwith open(\"example.txt\", \"w\") as file:\n    file.write(\"Hello, World!\\n\")\n    file.write(\"This is a second line.\\n\")\n\n# Reading from a file\nwith open(\"example.txt\", \"r\") as file:\n    content = file.read()\n    print(\"File content:\")\n    print(content)\n\n# Reading line by line\nprint(\"\\nReading line by line:\")\nwith open(\"example.txt\", \"r\") as file:\n    for line_num, line in enumerate(file, 1):\n        print(f\"Line {line_num}: {line.strip()}\")" 
    },
    { 
      "id": "py-snippet-22", 
      "title": "Exception Handling", 
      "description": "Handle errors gracefully", 
      "language": "python", 
      "code": "def divide_numbers(a, b):\n    try:\n        result = a / b\n    except ZeroDivisionError:\n        return \"Error: Division by zero is not allowed.\"\n    except TypeError:\n        return \"Error: Both arguments must be numbers.\"\n    else:\n        return f\"Result: {result}\"\n    finally:\n        print(\"Division operation completed.\")\n\n# Test cases\nprint(divide_numbers(10, 2))\nprint(divide_numbers(10, 0))\nprint(divide_numbers(10, \"2\"))" 
    },
    { 
      "id": "py-snippet-23", 
      "title": "Context Manager", 
      "description": "Manage resources with with statement", 
      "language": "python", 
      "code": "class DatabaseConnection:\n    def __init__(self, db_name):\n        self.db_name = db_name\n        print(f\"Connecting to {db_name}\")\n    \n    def __enter__(self):\n        print(\"Connection established\")\n        return self\n    \n    def execute_query(self, query):\n        print(f\"Executing: {query}\")\n        return \"Query results\"\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(\"Closing connection\")\n        if exc_type:\n            print(f\"An error occurred: {exc_val}\")\n        return True  # Suppress exceptions if needed\n\n# Using the context manager\nwith DatabaseConnection(\"my_database\") as db:\n    result = db.execute_query(\"SELECT * FROM users\")\n    print(result)" 
    },
    { 
      "id": "py-snippet-24", 
      "title": "Class & Object", 
      "description": "Object-oriented programming basics", 
      "language": "python", 
      "code": "class Dog:\n    # Class attribute\n    species = \"Canis familiaris\"\n    \n    # Initializer / Instance attributes\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    # Instance method\n    def bark(self):\n        return f\"{self.name} says Woof!\"\n    \n    # Another instance method\n    def description(self):\n        return f\"{self.name} is {self.age} years old\"\n    \n    # String representation\n    def __str__(self):\n        return f\"{self.name} is {self.age} years old\"\n\n# Creating objects\nbuddy = Dog(\"Buddy\", 5)\nmax = Dog(\"Max\", 3)\n\nprint(buddy.bark())\nprint(max.description())\nprint(f\"Both dogs are {Dog.species}\")\nprint(buddy)  # Uses __str__ method" 
    },
    { 
      "id": "py-snippet-25", 
      "title": "Inheritance", 
      "description": "Create subclasses that inherit from parent classes", 
      "language": "python", 
      "code": "class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        raise NotImplementedError(\"Subclass must implement this method\")\n\nclass Dog(Animal):\n    def speak(self):\n        return f\"{self.name} says Woof!\"\n\nclass Cat(Animal):\n    def speak(self):\n        return f\"{self.name} says Meow!\"\n\n# Creating objects\nanimals = [Dog(\"Buddy\"), Cat(\"Whiskers\")]\n\nfor animal in animals:\n    print(animal.speak())" 
    },
    { 
      "id": "py-snippet-26", 
      "title": "Polymorphism", 
      "description": "Different classes with same interface", 
      "language": "python", 
      "code": "class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):\n        return self.width * self.height\n\nclass Circle:\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        return 3.14159 * self.radius ** 2\n\n# Different shapes with same interface\nshapes = [Rectangle(5, 10), Circle(7)]\n\nfor shape in shapes:\n    print(f\"Area: {shape.area():.2f}\")" 
    },
    { 
      "id": "py-snippet-27", 
      "title": "Property Decorator", 
      "description": "Use getters and setters with properties", 
      "language": "python", 
      "code": "class Person:\n    def __init__(self, first_name, last_name, age):\n        self.first_name = first_name\n        self.last_name = last_name\n        self._age = age  # Private variable\n    \n    @property\n    def age(self):\n        \"\"\"Getter for age\"\"\"\n        return self._age\n    \n    @age.setter\n    def age(self, value):\n        \"\"\"Setter for age with validation\"\"\"\n        if not isinstance(value, int):\n            raise TypeError(\"Age must be an integer\")\n        if value < 0:\n            raise ValueError(\"Age cannot be negative\")\n        self._age = value\n    \n    @property\n    def full_name(self):\n        \"\"\"Computed property\"\"\"\n        return f\"{self.first_name} {self.last_name}\"\n\n# Using the class\nperson = Person(\"John\", \"Doe\", 30)\nprint(person.full_name)\nprint(f\"Age: {person.age}\")\n\nperson.age = 35  # Uses setter\nprint(f\"New age: {person.age}\")" 
    },
    { 
      "id": "py-snippet-28", 
      "title": "Generator Functions", 
      "description": "Create iterators with yield", 
      "language": "python", 
      "code": "def fibonacci_generator(limit):\n    \"\"\"Generate Fibonacci numbers up to limit\"\"\"\n    a, b = 0, 1\n    while a <= limit:\n        yield a\n        a, b = b, a + b\n\n# Using the generator\nprint(\"Fibonacci numbers up to 50:\")\nfor num in fibonacci_generator(50):\n    print(num, end=\" \")\n\nprint(\"\\n\\nUsing generator expression:\")\n# Generator expression (similar to list comprehension but lazy)\nsquares_gen = (x**2 for x in range(10))\nfor square in squares_gen:\n    print(square, end=\" \")" 
    },
    { 
      "id": "py-snippet-29", 
      "title": "Decorators", 
      "description": "Modify function behavior with decorators", 
      "language": "python", 
      "code": "import time\nfrom functools import wraps\n\ndef timer_decorator(func):\n    \"\"\"Decorator that measures function execution time\"\"\"\n    @wraps(func)  # Preserves function metadata\n    def wrapper(*args, **kwargs):\n        start_time = time.time()\n        result = func(*args, **kwargs)\n        end_time = time.time()\n        print(f\"{func.__name__} executed in {end_time - start_time:.4f} seconds\")\n        return result\n    return wrapper\n\ndef debug_decorator(func):\n    \"\"\"Decorator that logs function calls\"\"\"\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        print(f\"Calling {func.__name__} with args: {args}, kwargs: {kwargs}\")\n        result = func(*args, **kwargs)\n        print(f\"{func.__name__} returned: {result}\")\n        return result\n    return wrapper\n\n# Applying multiple decorators\n@timer_decorator\n@debug_decorator\ndef factorial(n):\n    \"\"\"Calculate factorial of n\"\"\"\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\n\n# Test the decorated function\nprint(factorial(5))" 
    },
    { 
      "id": "py-snippet-30", 
      "title": "OS Module", 
      "description": "Interact with operating system", 
      "language": "python", 
      "code": "import os\n\n# Get current working directory\nprint(f\"Current directory: {os.getcwd()}\")\n\n# List files and directories\nprint(\"\\nContents of current directory:\")\nfor item in os.listdir('.'):\n    print(f\"{'DIR' if os.path.isdir(item) else 'FILE'}: {item}\")\n\n# Create a directory\nos.makedirs(\"test_dir\", exist_ok=True)\n\n# Check if path exists\nprint(f\"\\nTest directory exists: {os.path.exists('test_dir')}\")\n\n# Environment variables\nprint(f\"\\nHome directory: {os.getenv('HOME')}\")\nprint(f\"Python path: {os.getenv('PYTHONPATH')}\")" 
    },
    { 
      "id": "py-snippet-31", 
      "title": "Datetime Module", 
      "description": "Work with dates and times", 
      "language": "python", 
      "code": "from datetime import datetime, date, time, timedelta\n\n# Current date and time\nnow = datetime.now()\nprint(f\"Current datetime: {now}\")\nprint(f\"Formatted: {now.strftime('%Y-%m-%d %H:%M:%S')}\")\n\n# Specific date\nd = date(2023, 12, 25)\nprint(f\"Christmas: {d}\")\n\n# Time operations\ntomorrow = now + timedelta(days=1)\nprint(f\"Tomorrow: {tomorrow}\")\n\n# Difference between dates\nnew_year = date(2024, 1, 1)\ntoday = date.today()\ndays_remaining = (new_year - today).days\nprint(f\"Days until New Year: {days_remaining}\")\n\n# Parsing date from string\ndate_str = \"2023-10-15\"\nparsed_date = datetime.strptime(date_str, \"%Y-%m-%d\")\nprint(f\"Parsed date: {parsed_date}\")" 
    },
    { 
      "id": "py-snippet-32", 
      "title": "JSON Handling", 
      "description": "Serialize and deserialize JSON data", 
      "language": "python", 
      "code": "import json\n\n# Python dictionary\nperson = {\n    \"name\": \"Alice\",\n    \"age\": 30,\n    \"city\": \"New York\",\n    \"hobbies\": [\"reading\", \"hiking\", \"coding\"],\n    \"is_student\": False\n}\n\n# Convert to JSON string\njson_string = json.dumps(person, indent=2)\nprint(\"JSON String:\")\nprint(json_string)\n\n# Write JSON to file\nwith open(\"person.json\", \"w\") as file:\n    json.dump(person, file, indent=2)\n\n# Read JSON from file\nwith open(\"person.json\", \"r\") as file:\n    loaded_person = json.load(file)\n\nprint(\"\\nLoaded from file:\")\nprint(loaded_person)\n\n# Custom serialization for complex objects\nclass Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def to_json(self):\n        return {\"name\": self.name, \"age\": self.age}\n\n# Custom JSON encoder\nclass PersonEncoder(json.JSONEncoder):\n    def default(self, obj):\n        if isinstance(obj, Person):\n            return obj.to_json()\n        return super().default(obj)\n\n# Using custom encoder\nalice = Person(\"Alice\", 30)\nprint(\"\\nCustom encoding:\")\nprint(json.dumps(alice, cls=PersonEncoder))" 
    },
    { 
      "id": "py-snippet-33", 
      "title": "CSV Handling", 
      "description": "Read and write CSV files", 
      "language": "python", 
      "code": "import csv\n\n# Writing to CSV\nwith open(\"data.csv\", \"w\", newline=\"\") as file:\n    writer = csv.writer(file)\n    writer.writerow([\"Name\", \"Age\", \"City\"])  # Header\n    writer.writerow([\"Alice\", 25, \"New York\"])\n    writer.writerow([\"Bob\", 30, \"London\"])\n    writer.writerow([\"Charlie\", 35, \"Paris\"])\n\n# Reading from CSV\nprint(\"Reading CSV with csv.reader:\")\nwith open(\"data.csv\", \"r\") as file:\n    reader = csv.reader(file)\n    for row in reader:\n        print(row)\n\n# Using DictReader for easier access\nprint(\"\\nReading CSV with DictReader:\")\nwith open(\"data.csv\", \"r\") as file:\n    reader = csv.DictReader(file)\n    for row in reader:\n        print(f\"{row['Name']} is {row['Age']} years old and lives in {row['City']}\")\n\n# Writing with DictWriter\nwith open(\"data_dict.csv\", \"w\", newline=\"\") as file:\n    fieldnames = [\"Name\", \"Age\", \"City\"]\n    writer = csv.DictWriter(file, fieldnames=fieldnames)\n    \n    writer.writeheader()\n    writer.writerow({\"Name\": \"Diana\", \"Age\": 28, \"City\": \"Berlin\"})\n    writer.writerow({\"Name\": \"Eve\", \"Age\": 32, \"City\": \"Tokyo\"})" 
    },
    { 
      "id": "py-snippet-34", 
      "title": "Random Module", 
      "description": "Generate random numbers and selections", 
      "language": "python", 
      "code": "import random\n\n# Random float between 0 and 1\nprint(f\"Random float: {random.random()}\")\n\n# Random integer in range\nprint(f\"Random integer (1-10): {random.randint(1, 10)}\")\n\n# Random choice from sequence\nfruits = [\"apple\", \"banana\", \"cherry\", \"date\"]\nprint(f\"Random fruit: {random.choice(fruits)}\")\n\n# Multiple random choices (with replacement)\nprint(f\"3 random fruits: {random.choices(fruits, k=3)}\")\n\n# Sample without replacement\nprint(f\"Sample of 2 fruits: {random.sample(fruits, 2)}\")\n\n# Shuffle a list\ncards = [\"Ace\", \"King\", \"Queen\", \"Jack\"]\nrandom.shuffle(cards)\nprint(f\"Shuffled cards: {cards}\")\n\n# Random float in range\nprint(f\"Random float (5.5-10.5): {random.uniform(5.5, 10.5)}\")\n\n# Gaussian distribution\nprint(f\"Gaussian random: {random.gauss(0, 1)}\")" 
    },
    { 
      "id": "py-snippet-35", 
      "title": "Requests Module", 
      "description": "Make HTTP requests to APIs", 
      "language": "python", 
      "code": "import requests\n\n# GET request\nresponse = requests.get(\"https://api.github.com\")\nprint(f\"Status Code: {response.status_code}\")\nprint(f\"Headers: {dict(response.headers)}\")\n\n# Check if request was successful\nif response.status_code == 200:\n    data = response.json()\n    print(f\"GitHub API URL: {data['current_user_url']}\")\nelse:\n    print(f\"Request failed with status {response.status_code}\")\n\n# GET request with parameters\nparams = {\"q\": \"python\", \"sort\": \"stars\", \"order\": \"desc\"}\nresponse = requests.get(\"https://api.github.com/search/repositories\", params=params)\n\nif response.status_code == 200:\n    results = response.json()\n    print(f\"\\nFound {results['total_count']} Python repositories\")\n    for repo in results[\"items\"][:3]:\n        print(f\"{repo['name']}: {repo['stargazers_count']} stars\")\n\n# POST request\npayload = {\"name\": \"John\", \"job\": \"Developer\"}\nresponse = requests.post(\"https://reqres.in/api/users\", json=payload)\nprint(f\"\\nPOST response: {response.json()}\")" 
    },
    { 
      "id": "py-snippet-36", 
      "title": "Pandas DataFrame", 
      "description": "Work with data using Pandas", 
      "language": "python", 
      "code": "import pandas as pd\n\n# Create DataFrame from dictionary\ndata = {\n    \"Name\": [\"Alice\", \"Bob\", \"Charlie\", \"Diana\"],\n    \"Age\": [25, 30, 35, 28],\n    \"City\": [\"New York\", \"London\", \"Paris\", \"Berlin\"]\n}\n\ndf = pd.DataFrame(data)\nprint(\"DataFrame:\")\nprint(df)\nprint(f\"\\nShape: {df.shape}\")\n\n# Accessing data\nprint(\"\\nFirst two rows:\")\nprint(df.head(2))\n\nprint(\"\\nAges column:\")\nprint(df[\"Age\"])\n\nprint(\"\\nFiltered data (Age > 28):\")\nprint(df[df[\"Age\"] > 28])\n\n# Basic statistics\nprint(\"\\nDescriptive statistics:\")\nprint(df.describe())\n\n# Add new column\ndf[\"Senior\"] = df[\"Age\"] > 30\nprint(\"\\nDataFrame with new column:\")\nprint(df)\n\n# Group by and aggregate\nprint(\"\\nAverage age by senior status:\")\nprint(df.groupby(\"Senior\")[\"Age\"].mean())\n\n# Read from CSV\n# df = pd.read_csv(\"data.csv\")\n# Write to CSV\n# df.to_csv(\"output.csv\", index=False)" 
    },
    { 
      "id": "py-snippet-37", 
      "title": "Matplotlib Plotting", 
      "description": "Create visualizations with Matplotlib", 
      "language": "python", 
      "code": "import matplotlib.pyplot as plt\nimport numpy as np\n\n# Create sample data\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\n\n# Create figure and axis\nfig, ax = plt.subplots(figsize=(10, 6))\n\n# Plot data\nax.plot(x, y, label=\"sin(x)\", color=\"blue\", linewidth=2)\nax.plot(x, np.cos(x), label=\"cos(x)\", color=\"red\", linestyle=\"--\")\n\n# Customize plot\nax.set_title(\"Trigonometric Functions\")\nax.set_xlabel(\"x\")\nax.set_ylabel(\"y\")\nax.legend()\nax.grid(True, alpha=0.3)\n\n# Show plot\nplt.tight_layout()\nplt.savefig(\"plot.png\", dpi=300)\nplt.show()\n\n# Bar chart\nfig, ax = plt.subplots(figsize=(8, 6))\ncategories = [\"A\", \"B\", \"C\", \"D\"]\nvalues = [23, 45, 56, 78]\n\nax.bar(categories, values, color=[\"red\", \"blue\", \"green\", \"orange\"])\nax.set_title(\"Bar Chart Example\")\nax.set_ylabel(\"Values\")\n\nplt.tight_layout()\nplt.show()" 
    },
    { 
      "id": "py-snippet-38", 
      "title": "NumPy Arrays", 
      "description": "Perform numerical operations with NumPy", 
      "language": "python", 
      "code": "import numpy as np\n\n# Create arrays\narr1 = np.array([1, 2, 3, 4, 5])\narr2 = np.array([[1, 2, 3], [4, 5, 6]])\n\nprint(\"1D Array:\")\nprint(arr1)\nprint(f\"Shape: {arr1.shape}\")\n\nprint(\"\\n2D Array:\")\nprint(arr2)\nprint(f\"Shape: {arr2.shape}\")\n\n# Array operations\nprint(\"\\nArray operations:\")\nprint(f\"Add 5: {arr1 + 5}\")\nprint(f\"Multiply by 2: {arr1 * 2}\")\nprint(f\"Sum: {arr1.sum()}\")\nprint(f\"Mean: {arr1.mean()}\")\n\n# Array creation functions\nzeros = np.zeros((3, 3))\nones = np.ones((2, 4))\nrange_arr = np.arange(0, 10, 2)\nrandom_arr = np.random.rand(3, 3)\n\nprint(\"\\nZeros array:\")\nprint(zeros)\n\nprint(\"\\nRandom array:\")\nprint(random_arr)\n\n# Array indexing and slicing\nprint(\"\\nArray slicing:\")\nprint(f\"First 3 elements: {arr1[:3]}\")\nprint(f\"Last 2 elements: {arr1[-2:]}\")\nprint(f\"Element at index 2: {arr1[2]}\")\n\n# Matrix operations\nmatrix1 = np.array([[1, 2], [3, 4]])\nmatrix2 = np.array([[5, 6], [7, 8]])\n\nprint(\"\\nMatrix multiplication:\")\nprint(np.dot(matrix1, matrix2))\n\nprint(\"\\nElement-wise multiplication:\")\nprint(matrix1 * matrix2)" 
    },
    { 
      "id": "py-snippet-39", 
      "title": "List Sorting", 
      "description": "Sort lists with custom criteria", 
      "language": "python", 
      "code": "# Basic sorting\nnumbers = [5, 2, 8, 1, 9]\nnumbers.sort()\nprint(f\"Sorted numbers: {numbers}\")\n\n# Sorting in reverse\nnumbers.sort(reverse=True)\nprint(f\"Reverse sorted: {numbers}\")\n\n# Using sorted() function (creates new list)\nnames = [\"Charlie\", \"Alice\", \"Bob\"]\nsorted_names = sorted(names)\nprint(f\"Original: {names}\")\nprint(f\"Sorted: {sorted_names}\")\n\n# Custom sorting with key\nwords = [\"apple\", \"banana\", \"cherry\", \"date\"]\nsorted_by_length = sorted(words, key=len)\nprint(f\"Sorted by length: {sorted_by_length}\")\n\n# Sorting complex objects\npeople = [\n    {\"name\": \"Alice\", \"age\": 30},\n    {\"name\": \"Bob\", \"age\": 25},\n    {\"name\": \"Charlie\", \"age\": 35}\n]\n\n# Sort by age\nsorted_by_age = sorted(people, key=lambda x: x[\"age\"])\nprint(f\"Sorted by age: {sorted_by_age}\")\n\n# Sort by name length\nsorted_by_name_length = sorted(people, key=lambda x: len(x[\"name\"]))\nprint(f\"Sorted by name length: {sorted_by_name_length}\")\n\n# Multiple sort criteria (age then name)\nsorted_people = sorted(people, key=lambda x: (x[\"age\"], x[\"name\"]))\nprint(f\"Sorted by age then name: {sorted_people}\")" 
    },
    { 
      "id": "py-snippet-40", 
      "title": "Counter Example", 
      "description": "Count occurrences with collections.Counter", 
      "language": "python", 
      "code": "from collections import Counter\n\n# Count occurrences in a string\nword = \"mississippi\"\nletter_counts = Counter(word)\nprint(f\"Letter counts in '{word}': {letter_counts}\")\n\n# Most common elements\nprint(f\"Most common letters: {letter_counts.most_common(3)}\")\n\n# Count occurrences in a list\nfruits = [\"apple\", \"banana\", \"apple\", \"orange\", \"banana\", \"apple\"]\nfruit_counts = Counter(fruits)\nprint(f\"Fruit counts: {fruit_counts}\")\n\n# Update counter\nmore_fruits = [\"apple\", \"orange\", \"grape\"]\nfruit_counts.update(more_fruits)\nprint(f\"Updated fruit counts: {fruit_counts}\")\n\n# Arithmetic operations\ncounter1 = Counter(a=3, b=1)\ncounter2 = Counter(a=1, b=2)\n\nprint(f\"Addition: {counter1 + counter2}\")\nprint(f\"Subtraction: {counter1 - counter2}\")\nprint(f\"Intersection: {counter1 & counter2}\")\nprint(f\"Union: {counter1 | counter2}\")" 
    },
    { 
      "id": "py-snippet-41", 
      "title": "NamedTuple Example", 
      "description": "Create lightweight object classes", 
      "language": "python", 
      "code": "from collections import namedtuple\n\n# Create a namedtuple type\nPoint = namedtuple(\"Point\", [\"x\", \"y\"])\n\n# Create instances\np1 = Point(10, 20)\np2 = Point(30, 40)\n\nprint(f\"Point 1: {p1}\")\nprint(f\"Point 2: {p2}\")\nprint(f\"p1.x: {p1.x}, p1.y: {p1.y}\")\n\n# Access by index (still works)\nprint(f\"p1[0]: {p1[0]}, p1[1]: {p1[1]}\")\n\n# Unpacking\nx, y = p1\nprint(f\"Unpacked: x={x}, y={y}\")\n\n# _replace method (creates new instance)\np3 = p1._replace(x=15)\nprint(f\"Modified point: {p3}\")\n\n# _asdict method\nprint(f\"As dictionary: {p1._asdict()}\")\n\n# More complex example\nPerson = namedtuple(\"Person\", [\"name\", \"age\", \"city\"])\npeople = [\n    Person(\"Alice\", 30, \"New York\"),\n    Person(\"Bob\", 25, \"London\"),\n    Person(\"Charlie\", 35, \"Paris\")\n]\n\nfor person in people:\n    print(f\"{person.name} is {person.age} years old and lives in {person.city}\")" 
    },
    { 
      "id": "py-snippet-42", 
      "title": "Dataclass Example", 
      "description": "Create classes with automatically generated methods", 
      "language": "python", 
      "code": "from dataclasses import dataclass, field\nfrom typing import List\n\n@dataclass\nclass Person:\n    name: str\n    age: int\n    city: str = \"Unknown\"  # Default value\n    hobbies: List[str] = field(default_factory=list)  # Default factory\n    \n    def greet(self):\n        return f\"Hello, my name is {self.name} and I'm {self.age} years old\"\n\n# Create instances\nperson1 = Person(\"Alice\", 30, \"New York\", [\"reading\", \"hiking\"])\nperson2 = Person(\"Bob\", 25)\n\nprint(person1)\nprint(person2)\nprint(person1.greet())\n\n# Comparison (automatically implemented)\nperson3 = Person(\"Alice\", 30, \"New York\", [\"reading\", \"hiking\"])\nprint(f\"person1 == person3: {person1 == person3}\")\n\n# Immutable dataclass\n@dataclass(frozen=True)\nclass Point:\n    x: int\n    y: int\n\np = Point(10, 20)\nprint(f\"Point: {p}\")\n# p.x = 15  # This would raise an error because frozen=True" 
    },
    { 
      "id": "py-snippet-43", 
      "title": "Contextlib Example", 
      "description": "Create context managers with contextlib", 
      "language": "python", 
      "code": "from contextlib import contextmanager\nimport time\n\n@contextmanager\ndef timer():\n    \"\"\"Context manager to measure execution time\"\"\"\n    start_time = time.time()\n    try:\n        yield\n    finally:\n        end_time = time.time()\n        print(f\"Execution time: {end_time - start_time:.4f} seconds\")\n\n# Using the context manager\nwith timer():\n    # Simulate some work\n    time.sleep(1)\n    print(\"Work completed\")\n\n@contextmanager\ndef open_file(filename, mode):\n    \"\"\"Custom context manager for file handling\"\"\"\n    file = open(filename, mode)\n    try:\n        yield file\n    finally:\n        file.close()\n\n# Using the custom file context manager\nwith open_file(\"test.txt\", \"w\") as f:\n    f.write(\"Hello, context manager!\")\n\n# Using multiple context managers\nwith timer(), open_file(\"test.txt\", \"r\") as f:\n    content = f.read()\n    print(f\"File content: {content}\")" 
    },
    { 
      "id": "py-snippet-44", 
      "title": "Asyncio Example", 
      "description": "Write asynchronous code with asyncio", 
      "language": "python", 
      "code": "import asyncio\nimport time\n\nasync def say_after(delay, message):\n    \"\"\"Coroutine that says a message after a delay\"\"\"\n    await asyncio.sleep(delay)\n    print(message)\n    return f\"Completed: {message}\"\n\nasync def main():\n    print(f\"Started at {time.strftime('%X')}\")\n    \n    # Run coroutines concurrently\n    task1 = asyncio.create_task(say_after(1, \"Hello\"))\n    task2 = asyncio.create_task(say_after(2, \"World\"))\n    \n    # Wait for both tasks to complete\n    results = await asyncio.gather(task1, task2)\n    \n    print(f\"Finished at {time.strftime('%X')}\")\n    print(f\"Results: {results}\")\n\n# Run the main coroutine\nasyncio.run(main())\n\n# Asynchronous HTTP request example\nasync def fetch_data():\n    \"\"\"Simulate fetching data from an API\"\"\"\n    print(\"Fetching data...\")\n    await asyncio.sleep(2)  # Simulate network delay\n    return {\"data\": [1, 2, 3]}\n\nasync def process_data():\n    \"\"\"Process the fetched data\"\"\"\n    data = await fetch_data()\n    print(f\"Processing data: {data}\")\n    return [x * 2 for x in data[\"data\"]]\n\n# Run the data processing pipeline\nresult = asyncio.run(process_data())\nprint(f\"Final result: {result}\")" 
    },
    { 
      "id": "py-snippet-45", 
      "title": "Logging Example", 
      "description": "Use logging module for professional logging", 
      "language": "python", 
      "code": "import logging\n\n# Basic configuration\nlogging.basicConfig(\n    level=logging.DEBUG,\n    format=\"%(asctime)s - %(name)s - %(levelname)s - %(message)s\",\n    handlers=[\n        logging.FileHandler(\"app.log\"),\n        logging.StreamHandler()\n    ]\n)\n\n# Create logger\nlogger = logging.getLogger(__name__)\n\n# Log messages at different levels\ndef divide(a, b):\n    logger.debug(f\"Dividing {a} by {b}\")\n    try:\n        result = a / b\n        logger.info(f\"Division successful: {result}\")\n        return result\n    except ZeroDivisionError:\n        logger.error(\"Division by zero!\")\n        return None\n    except Exception as e:\n        logger.exception(\"Unexpected error in division\")\n        return None\n\n# Test the function\nprint(\"Testing division function:\")\ndivide(10, 2)\ndivide(10, 0)\n\n# Advanced logging with different handlers\nlogger = logging.getLogger(\"my_app\")\nlogger.setLevel(logging.DEBUG)\n\n# Create handlers\nconsole_handler = logging.StreamHandler()\nconsole_handler.setLevel(logging.INFO)\n\nfile_handler = logging.FileHandler(\"debug.log\")\nfile_handler.setLevel(logging.DEBUG)\n\n# Create formatters\nconsole_format = logging.Formatter(\"%(levelname)s - %(message)s\")\nfile_format = logging.Formatter(\"%(asctime)s - %(name)s - %(levelname)s - %(message)s\")\n\n# Add formatters to handlers\nconsole_handler.setFormatter(console_format)\nfile_handler.setFormatter(file_format)\n\n# Add handlers to logger\nlogger.addHandler(console_handler)\nlogger.addHandler(file_handler)\n\n# Test advanced logging\nlogger.debug(\"This is a debug message\")\nlogger.info(\"This is an info message\")\nlogger.warning(\"This is a warning message\")\nlogger.error(\"This is an error message\")\nlogger.critical(\"This is a critical message\")" 
    },
    { 
      "id": "py-snippet-46", 
      "title": "Timeit Example", 
      "description": "Measure code execution time", 
      "language": "python", 
      "code": "import timeit\n\n# Time a simple expression\ntime_taken = timeit.timeit('\"-\".join(str(n) for n in range(100))', number=10000)\nprint(f\"Time taken: {time_taken:.4f} seconds\")\n\n# Compare two approaches\nsetup_code = \"\"\"\ndef list_comprehension():\n    return [x**2 for x in range(1000)]\n\ndef for_loop():\n    result = []\n    for x in range(1000):\n        result.append(x**2)\n    return result\n\"\"\"\n\nlist_comp_time = timeit.timeit('list_comprehension()', setup=setup_code, number=1000)\nfor_loop_time = timeit.timeit('for_loop()', setup=setup_code, number=1000)\n\nprint(f\"List comprehension: {list_comp_time:.4f} seconds\")\nprint(f\"For loop: {for_loop_time:.4f} seconds\")\nprint(f\"Difference: {abs(list_comp_time - for_loop_time):.4f} seconds\")\n\n# Using timeit with a function\ndef test_function():\n    return sum(range(10000))\n\n# Time the function\nt = timeit.Timer(test_function)\nprint(f\"Function execution time: {t.timeit(number=1000):.4f} seconds\")\n\n# Using timeit in Jupyter/IPython\n# %timeit sum(range(10000))\n# %timeit [x**2 for x in range(1000)]" 
    },
    { 
      "id": "py-snippet-47", 
      "title": "SQLite Example", 
      "description": "Work with SQLite databases", 
      "language": "python", 
      "code": "import sqlite3\nimport os\n\n# Remove existing database file if it exists\nif os.path.exists(\"example.db\"):\n    os.remove(\"example.db\")\n\n# Connect to SQLite database (creates if not exists)\nconn = sqlite3.connect(\"example.db\")\nc = conn.cursor()\n\n# Create table\nc.execute(\"\"\"\nCREATE TABLE IF NOT EXISTS users (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name TEXT NOT NULL,\n    email TEXT UNIQUE NOT NULL,\n    age INTEGER\n)\"\"\")\n\n# Insert data\nusers = [\n    (\"Alice\", \"alice@example.com\", 30),\n    (\"Bob\", \"bob@example.com\", 25),\n    (\"Charlie\", \"charlie@example.com\", 35)\n]\n\nc.executemany(\"INSERT INTO users (name, email, age) VALUES (?, ?, ?)\", users)\n\n# Commit the changes\nconn.commit()\n\n# Query data\nprint(\"All users:\")\nc.execute(\"SELECT * FROM users\")\nfor row in c.fetchall():\n    print(row)\n\nprint(\"\\nUsers older than 28:\")\nc.execute(\"SELECT name, age FROM users WHERE age > ?\", (28,))\nfor row in c.fetchall():\n    print(f\"Name: {row[0]}, Age: {row[1]}\")\n\n# Update data\nc.execute(\"UPDATE users SET age = ? WHERE name = ?\", (26, \"Bob\"))\nconn.commit()\n\nprint(\"\\nAfter update:\")\nc.execute(\"SELECT name, age FROM users WHERE name = ?\", (\"Bob\",))\nprint(c.fetchone())\n\n# Delete data\nc.execute(\"DELETE FROM users WHERE name = ?\", (\"Charlie\",))\nconn.commit()\n\nprint(\"\\nAfter deletion:\")\nc.execute(\"SELECT COUNT(*) FROM users\")\nprint(f\"Total users: {c.fetchone()[0]}\")\n\n# Close connection\nconn.close()" 
    },
    { 
      "id": "py-snippet-48", 
      "title": "Itertools Example", 
      "description": "Use itertools for advanced iteration", 
      "language": "python", 
      "code": "import itertools\n\n# Infinite iterators\nprint(\"Counting from 10:\")\nfor i in itertools.count(10):\n    print(i, end=\" \")\n    if i >= 15:\n        break\n\nprint(\"\\n\\nCycling through elements:\")\ncount = 0\nfor item in itertools.cycle([\"A\", \"B\", \"C\"]):\n    print(item, end=\" \")\n    count += 1\n    if count >= 6:\n        break\n\n# Combinatoric iterators\nprint(\"\\n\\nAll combinations of 2 letters:\")\ncombinations = list(itertools.combinations(\"ABC\", 2))\nprint(combinations)\n\nprint(\"\\nAll permutations of 2 letters:\")\npermutations = list(itertools.permutations(\"ABC\", 2))\nprint(permutations)\n\nprint(\"\\nCartesian product:\")\nproduct = list(itertools.product([1, 2], [\"A\", \"B\"]))\nprint(product)\n\n# Terminating iterators\nprint(\"\\nAccumulated sum:\")\naccumulated = list(itertools.accumulate([1, 2, 3, 4, 5]))\nprint(accumulated)\n\nprint(\"\\nGrouping data:\")\ndata = [(\"A\", 1), (\"A\", 2), (\"B\", 3), (\"B\", 4), (\"C\", 5)]\nfor key, group in itertools.groupby(data, lambda x: x[0]):\n    print(f\"{key}: {list(group)}\")\n\n# Chaining iterators\nprint(\"\\nChained iterators:\")\nchained = list(itertools.chain([1, 2, 3], [\"A\", \"B\", \"C\"], range(4, 7)))\nprint(chained)\n\n# Compressing data\nprint(\"\\nCompressed data:\")\nselector = [True, False, True, False, True]\ncompressed = list(itertools.compress(\"ABCDE\", selector))\nprint(compressed)" 
    },
    { 
      "id": "py-snippet-49", 
      "title": "Fibonacci Sequence", 
      "description": "Implement Fibonacci with different approaches", 
      "language": "python", 
      "code": "def fibonacci_recursive(n):\n    \"\"\"Fibonacci using recursion (inefficient for large n)\"\"\"\n    if n <= 1:\n        return n\n    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)\n\n# Memoization version\nfrom functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fibonacci_memoized(n):\n    \"\"\"Fibonacci with memoization (efficient)\"\"\"\n    if n <= 1:\n        return n\n    return fibonacci_memoized(n-1) + fibonacci_memoized(n-2)\n\ndef fibonacci_iterative(n):\n    \"\"\"Fibonacci using iteration (most efficient)\"\"\"\n    if n <= 1:\n        return n\n    \n    a, b = 0, 1\n    for _ in range(2, n+1):\n        a, b = b, a + b\n    return b\n\ndef fibonacci_generator():\n    \"\"\"Generator that yields Fibonacci numbers indefinitely\"\"\"\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\n# Test the functions\nprint(\"Fibonacci sequence:\")\nprint(\"Recursive (n=10):\", fibonacci_recursive(10))\nprint(\"Memoized (n=50):\", fibonacci_memoized(50))\nprint(\"Iterative (n=50):\", fibonacci_iterative(50))\n\nprint(\"\\nFirst 15 Fibonacci numbers from generator:\")\nfib_gen = fibonacci_generator()\nfor i in range(15):\n    print(next(fib_gen), end=\" \")" 
    },
    { 
      "id": "py-snippet-50", 
      "title": "Web Scraping", 
      "description": "Extract data from websites", 
      "language": "python", 
      "code": "import requests\nfrom bs4 import BeautifulSoup\n\n# Fetch webpage\nurl = \"https://httpbin.org/html\"  # Using a test URL\nheaders = {\n    \"User-Agent\": \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\"\n}\n\ntry:\n    response = requests.get(url, headers=headers, timeout=10)\n    response.raise_for_status()  # Raise exception for bad status codes\n    \n    # Parse HTML\n    soup = BeautifulSoup(response.text, \"html.parser\")\n    \n    # Extract title\n    title = soup.find(\"h1\")\n    if title:\n        print(f\"Title: {title.text}\")\n    \n    # Extract all paragraphs\n    paragraphs = soup.find_all(\"p\")\n    print(\"\\nParagraphs:\")\n    for i, p in enumerate(paragraphs, 1):\n        print(f\"{i}. {p.text}\")\n    \n    # Extract links\n    links = soup.find_all(\"a\", href=True)\n    print(\"\\nLinks:\")\n    for link in links:\n        print(f\"{link.text}: {link['href']}\")\n    \n    # Extract specific element by class\n    # specific_element = soup.find(\"div\", class_=\"some-class\")\n    \n    # Extract table data\n    tables = soup.find_all(\"table\")\n    for table in tables:\n        rows = table.find_all(\"tr\")\n        for row in rows:\n            cells = row.find_all([\"td\", \"th\"])\n            cell_data = [cell.text.strip() for cell in cells]\n            print(\" | \".join(cell_data))\n\nexcept requests.exceptions.RequestException as e:\n    print(f\"Request failed: {e}\")\nexcept Exception as e:\n    print(f\"An error occurred: {e}\")\n\n# Note: Always check website's robots.txt and terms of service before scraping\n# Consider using APIs instead of scraping when available" 
    },
    { 
      "id": "py-snippet-51", 
      "title": "Flask Web Application", 
      "description": "Create a simple web server with Flask", 
      "language": "python", 
      "code": "from flask import Flask, render_template, request, redirect, url_for, jsonify\n\napp = Flask(__name__)\n\n# In-memory storage for demonstration\nbooks = [\n    {\"id\": 1, \"title\": \"Python Crash Course\", \"author\": \"Eric Matthes\"},\n    {\"id\": 2, \"title\": \"Fluent Python\", \"author\": \"Luciano Ramalho\"},\n    {\"id\": 3, \"title\": \"Automate the Boring Stuff\", \"author\": \"Al Sweigart\"}\n]\n\n@app.route(\"/\")\ndef home():\n    return \"<h1>Welcome to the Book API!</h1><p>Visit /books to see all books.</p>\"\n\n@app.route(\"/books\")\ndef get_books():\n    return jsonify(books)\n\n@app.route(\"/books/<int:book_id>\")\ndef get_book(book_id):\n    book = next((b for b in books if b[\"id\"] == book_id), None)\n    if book:\n        return jsonify(book)\n    return jsonify({\"error\": \"Book not found\"}), 404\n\n@app.route(\"/books\", methods=[\"POST\"])\ndef add_book():\n    if not request.json or not \"title\" in request.json:\n        return jsonify({\"error\": \"Title is required\"}), 400\n    \n    new_book = {\n        \"id\": len(books) + 1,\n        \"title\": request.json[\"title\"],\n        \"author\": request.json.get(\"author\", \"\")\n    }\n    \n    books.append(new_book)\n    return jsonify(new_book), 201\n\n@app.route(\"/books/<int:book_id>\", methods=[\"PUT\"])\ndef update_book(book_id):\n    book = next((b for b in books if b[\"id\"] == book_id), None)\n    if not book:\n        return jsonify({\"error\": \"Book not found\"}), 404\n    \n    book[\"title\"] = request.json.get(\"title\", book[\"title\"])\n    book[\"author\"] = request.json.get(\"author\", book[\"author\"])\n    \n    return jsonify(book)\n\n@app.route(\"/books/<int:book_id>\", methods=[\"DELETE\"])\ndef delete_book(book_id):\n    global books\n    books = [b for b in books if b[\"id\"] != book_id]\n    return jsonify({\"result\": \"Book deleted\"})\n\n@app.route(\"/html\")\ndef books_html():\n    return render_template(\"books.html\", books=books)\n\nif __name__ == \"__main__\":\n    app.run(debug=True, host=\"0.0.0.0\", port=5000)" 
    },
    { 
      "id": "py-snippet-52", 
      "title": "Tkinter GUI Application", 
      "description": "Create a desktop application with Tkinter", 
      "language": "python", 
      "code": "import tkinter as tk\nfrom tkinter import ttk, messagebox, filedialog\n\nclass TodoApp:\n    def __init__(self, root):\n        self.root = root\n        self.root.title(\"Todo Application\")\n        self.root.geometry(\"500x400\")\n        \n        self.tasks = []\n        \n        self.create_widgets()\n        self.load_tasks()\n    \n    def create_widgets(self):\n        # Main frame\n        main_frame = ttk.Frame(self.root, padding=\"10\")\n        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))\n        \n        # Input area\n        ttk.Label(main_frame, text=\"New Task:\").grid(row=0, column=0, sticky=tk.W)\n        \n        self.task_var = tk.StringVar()\n        task_entry = ttk.Entry(main_frame, textvariable=self.task_var, width=40)\n        task_entry.grid(row=0, column=1, padx=5, sticky=(tk.W, tk.E))\n        task_entry.bind(\"<Return>\", lambda e: self.add_task())\n        \n        add_button = ttk.Button(main_frame, text=\"Add Task\", command=self.add_task)\n        add_button.grid(row=0, column=2, padx=5)\n        \n        # Task list\n        ttk.Label(main_frame, text=\"Tasks:\").grid(row=1, column=0, sticky=tk.W, pady=(10, 0))\n        \n        self.task_listbox = tk.Listbox(main_frame, width=50, height=15)\n        self.task_listbox.grid(row=2, column=0, columnspan=3, pady=5, sticky=(tk.W, tk.E, tk.N, tk.S))\n        \n        # Buttons\n        button_frame = ttk.Frame(main_frame)\n        button_frame.grid(row=3, column=0, columnspan=3, pady=10)\n        \n        complete_button = ttk.Button(button_frame, text=\"Mark Complete\", command=self.complete_task)\n        complete_button.pack(side=tk.LEFT, padx=5)\n        \n        delete_button = ttk.Button(button_frame, text=\"Delete Task\", command=self.delete_task)\n        delete_button.pack(side=tk.LEFT, padx=5)\n        \n        save_button = ttk.Button(button_frame, text=\"Save Tasks\", command=self.save_tasks)\n        save_button.pack(side=tk.LEFT, padx=5)\n        \n        # Configure grid weights\n        self.root.columnconfigure(0, weight=1)\n        self.root.rowconfigure(0, weight=1)\n        main_frame.columnconfigure(1, weight=1)\n        main_frame.rowconfigure(2, weight=1)\n    \n    def add_task(self):\n        task = self.task_var.get().strip()\n        if task:\n            self.tasks.append({\"task\": task, \"completed\": False})\n            self.update_listbox()\n            self.task_var.set(\"\")\n        else:\n            messagebox.showwarning(\"Warning\", \"Please enter a task!\")\n    \n    def complete_task(self):\n        selected = self.task_listbox.curselection()\n        if selected:\n            index = selected[0]\n            self.tasks[index][\"completed\"] = not self.tasks[index][\"completed\"]\n            self.update_listbox()\n        else:\n            messagebox.showwarning(\"Warning\", \"Please select a task!\")\n    \n    def delete_task(self):\n        selected = self.task_listbox.curselection()\n        if selected:\n            index = selected[0]\n            del self.tasks[index]\n            self.update_listbox()\n        else:\n            messagebox.showwarning(\"Warning\", \"Please select a task!\")\n    \n    def update_listbox(self):\n        self.task_listbox.delete(0, tk.END)\n        for task in self.tasks:\n            prefix = \"[✓] \" if task[\"completed\"] else \"[ ] \"\n            self.task_listbox.insert(tk.END, prefix + task[\"task\"])\n    \n    def save_tasks(self):\n        filename = filedialog.asksaveasfilename(\n            defaultextension=\".txt\",\n            filetypes=[(\"Text files\", \"*.txt\"), (\"All files\", \"*.*\")]\n        )\n        if filename:\n            with open(filename, \"w\") as f:\n                for task in self.tasks:\n                    status = \"completed\" if task[\"completed\"] else \"pending\"\n                    f.write(f\"{task['task']} ({status})\\n\")\n            messagebox.showinfo(\"Success\", f\"Tasks saved to {filename}\")\n    \n    def load_tasks(self):\n        # This would typically load from a file\n        self.tasks = [\n            {\"task\": \"Learn Python\", \"completed\": True},\n            {\"task\": \"Build a GUI app\", \"completed\": False},\n            {\"task\": \"Deploy to production\", \"completed\": False}\n        ]\n        self.update_listbox()\n\n# Create and run the application\nif __name__ == \"__main__\":\n    root = tk.Tk()\n    app = TodoApp(root)\n    root.mainloop()" 
    }
  ]
},
 
  /* JAVA */
{
  "id": "java",
  "slug": "java",
  "title": "Java Programming Mastery",
  "description": "Comprehensive Java programming journey from fundamentals to advanced enterprise development. Covers OOP principles, data structures, multithreading, Spring Framework, and real-world application development.",
  "icon": "FaJava",
  "color": "from-red-500 to-orange-500",
  "category": "Programming",
  "difficulty": "Intermediate",
  "tags": ["java", "backend", "oop", "spring", "android", "jvm", "enterprise", "microservices"],
  "image": "/images/java.jpg",
  "roadmap": [
    { 
      "id": "java-1", 
      "title": "Java Basics & Environment Setup", 
      "description": "Install JDK, configure development environment (IDE), understand Java syntax, variables, primitive data types, operators, and basic input/output operations. Learn about JVM, JRE, and JDK differences.",
      "duration": "2 weeks",
    },
    { 
      "id": "java-2", 
      "title": "Control Flow Statements", 
      "description": "Master decision-making structures (if-else, switch-case) and looping constructs (for, while, do-while). Understand break, continue, and nested control flow statements.",
      "duration": "1.5 weeks",
    },
    { 
      "id": "java-3", 
      "title": "Methods & Functions", 
      "description": "Learn to define methods, pass parameters, return values, and understand method overloading. Explore recursion, variable arguments (varargs), and method scope.",
      "duration": "1.5 weeks",
    },
    { 
      "id": "java-4", 
      "title": "Object-Oriented Programming Fundamentals", 
      "description": "Introduction to OOP concepts: classes, objects, fields, constructors, access modifiers (public, private, protected). Understand object creation and memory allocation.",
      "duration": "2 weeks",
    },
    { 
      "id": "java-5", 
      "title": "Encapsulation & Inheritance", 
      "description": "Implement encapsulation with getters/setters, understand inheritance hierarchies, super keyword, method overriding, and the instanceof operator.",
      "duration": "2 weeks",
    },
    { 
      "id": "java-6", 
      "title": "Polymorphism & Abstraction", 
      "description": "Master polymorphism through method overriding, understand abstract classes, interfaces, and the principles of abstraction in OOP design.",
      "duration": "2.5 weeks",
    },
    { 
      "id": "java-7", 
      "title": "Packages & Access Control", 
      "description": "Organize code with packages, understand import statements, classpath, and detailed access control mechanisms including module system (Java 9+).",
      "duration": "1.5 weeks",
    },
    { 
      "id": "java-8", 
      "title": "Exception Handling", 
      "description": "Comprehensive error handling with try-catch-finally blocks, throw/throws keywords, custom exceptions, and exception hierarchy best practices.",
      "duration": "2 weeks",
    },
    { 
      "id": "java-9", 
      "title": "Java Collections Framework", 
      "description": "In-depth study of Collections API: Lists, Sets, Maps, Queues, Iterators, Comparators, and generics for type-safe collections.",
      "duration": "3 weeks",
    },
    { 
      "id": "java-10", 
      "title": "Strings & Text Processing", 
      "description": "Master String manipulation, immutability, StringBuilder, StringBuffer, regular expressions, and text processing techniques.",
      "duration": "2 weeks",
    },
    { 
      "id": "java-11", 
      "title": "File I/O & Serialization", 
      "description": "Read/write files using various I/O classes, understand serialization/deserialization, NIO package, and file system operations.",
      "duration": "2.5 weeks",
    },
    { 
      "id": "java-12", 
      "title": "Multithreading & Concurrency", 
      "description": "Comprehensive concurrency programming: Thread class, Runnable interface, synchronization, thread pools, locks, and concurrent utilities.",
      "duration": "4 weeks",
    },
    { 
      "id": "java-13", 
      "title": "Java Streams & Functional Programming", 
      "description": "Modern Java features: lambda expressions, streams API, optional class, method references, and functional programming patterns.",
      "duration": "3 weeks",
    },
    { 
      "id": "java-14", 
      "title": "Java Memory Management", 
      "description": "Deep dive into JVM architecture, garbage collection algorithms, stack vs heap memory, performance tuning, and memory leaks prevention.",
      "duration": "2 weeks",
    },
    { 
      "id": "java-15", 
      "title": "Java Annotations & Reflection", 
      "description": "Create and use annotations, reflection API for meta-programming, dynamic class loading, and framework development basics.",
      "duration": "2.5 weeks",
    },
    { 
      "id": "java-16", 
      "title": "Database Connectivity (JDBC)", 
      "description": "Connect Java applications to databases using JDBC, perform CRUD operations, use prepared statements, connection pooling, and transactions.",
      "duration": "3.5 weeks",
    },
    { 
      "id": "java-17", 
      "title": "Build Tools & Dependency Management", 
      "description": "Master build automation with Maven and Gradle, manage dependencies, create multi-module projects, and understand repository management.",
      "duration": "2 weeks",
    },
    { 
      "id": "java-18", 
      "title": "Spring Framework Core", 
      "description": "Spring IoC container, dependency injection, bean configuration, aspect-oriented programming (AOP), and Spring expression language.",
      "duration": "4 weeks",
    },
    { 
      "id": "java-19", 
      "title": "Spring Boot & REST APIs", 
      "description": "Develop production-ready applications with Spring Boot, create RESTful web services, implement security, and integrate with JPA for data persistence.",
      "duration": "5 weeks",
    },
    { 
      "id": "java-20", 
      "title": "Capstone Project: Enterprise Application", 
      "description": "Build a complete Java enterprise application integrating all learned concepts: OOP design, database, REST API, security, and deployment.",
      "duration": "6 weeks",
      
    }
  ],
  "notes": [
    "Java is platform-independent through the Java Virtual Machine (JVM) which executes bytecode",
    "Strongly typed language with compile-time type checking for better code reliability",
    "Follows Write-Once-Run-Anywhere (WORA) philosophy enabling cross-platform compatibility",
    "Extensive ecosystem with over 5 million developers and vast library support",
    "Primary language for Android app development (though Kotlin is now preferred)",
    "Widely used in enterprise applications, web services, and large-scale systems",
    "Java syntax is C-style and similar to C++ but without pointers and multiple inheritance",
    "Automatic memory management through garbage collection reduces memory leaks",
    "Packages provide namespace management and access control for large codebases",
    "Collections Framework offers efficient, reusable data structures and algorithms",
    "Generics enable type safety at compile-time while maintaining runtime efficiency",
    "Multithreading capabilities allow concurrent programming for better resource utilization",
    "Streams API (Java 8+) enables functional-style operations on collections",
    "Checked exceptions enforce error handling at compile time for more robust code",
    "Annotations provide metadata that can be processed at compile-time or runtime",
    "Reflection allows runtime inspection and modification of classes and objects",
    "Build tools like Maven and Gradle automate dependency management and compilation",
    "JDBC provides database independence through standardized database connectivity",
    "Spring Framework revolutionized enterprise Java with dependency injection and AOP",
    "JUnit is the standard testing framework for writing and running unit tests",
    "Logging frameworks (SLF4J, Logback) provide flexible application logging capabilities",
    "Interfaces promote loose coupling and polymorphism in software design",
    "Immutable objects are inherently thread-safe and simplify concurrent programming",
    "Composition over inheritance principle leads to more flexible and maintainable code",
    "Try-with-resources (Java 7+) ensures automatic resource cleanup for AutoCloseable objects",
    "JVM memory model understanding is crucial for performance optimization",
    "Java Platform Module System (JPMS) introduced in Java 9 provides better encapsulation",
    "Just-In-Time (JIT) compilation optimizes bytecode to native code for performance",
    "Java has long-term support (LTS) versions that receive updates for extended periods",
    "Java Community Process (JCP) governs the evolution of the Java platform",
    "Deployment typically uses JAR files for applications and WAR files for web applications",
    "Java Native Interface (JNI) allows integration with native code written in other languages",
    "Java Management Extensions (JMX) provides tools for monitoring and managing applications",
    "Java has strong security features including sandboxing and security manager",
    "Java Performance Monitoring tools (jconsole, jvisualvm, jstack) help diagnose issues",
    "Lambda expressions (Java 8+) significantly reduced boilerplate code for functional interfaces",
    "Optional class helps avoid NullPointerException and makes null checks explicit",
    "Java continues to evolve with six-month release cycles bringing new features regularly",
    "Popular IDEs like IntelliJ IDEA, Eclipse, and NetBeans provide powerful development tools",
    "Java has extensive documentation (Javadoc) culture promoting self-documenting code"
  ],
  "codeSnippets": [
    {
      "id": "java-snippet-1",
      "title": "Hello World Program",
      "description": "Basic Java program structure with main method",
      "language": "java",
      "code": "public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, Java!\");\n  }\n}"
    },
    {
      "id": "java-snippet-2",
      "title": "If-Else Conditional",
      "description": "Decision making with if-else statement",
      "language": "java",
      "code": "int x = 10;\nif (x > 15) {\n  System.out.println(\"x is greater than 15\");\n} else if (x > 5) {\n  System.out.println(\"x is between 6 and 15\");\n} else {\n  System.out.println(\"x is 5 or less\");\n}"
    },
    {
      "id": "java-snippet-3",
      "title": "Switch Statement",
      "description": "Multi-way branching with switch-case",
      "language": "java",
      "code": "int day = 3;\nString dayName;\nswitch (day) {\n  case 1: dayName = \"Monday\"; break;\n  case 2: dayName = \"Tuesday\"; break;\n  case 3: dayName = \"Wednesday\"; break;\n  case 4: dayName = \"Thursday\"; break;\n  case 5: dayName = \"Friday\"; break;\n  case 6: dayName = \"Saturday\"; break;\n  case 7: dayName = \"Sunday\"; break;\n  default: dayName = \"Invalid day\";\n}\nSystem.out.println(dayName);"
    },
    {
      "id": "java-snippet-4",
      "title": "For Loop",
      "description": "Iteration with for loop",
      "language": "java",
      "code": "for (int i = 1; i <= 5; i++) {\n  System.out.println(\"Iteration: \" + i);\n}"
    },
    {
      "id": "java-snippet-5",
      "title": "Enhanced For Loop",
      "description": "Iterating over arrays/collections with for-each",
      "language": "java",
      "code": "int[] numbers = {1, 2, 3, 4, 5};\nfor (int num : numbers) {\n  System.out.println(\"Number: \" + num);\n}"
    },
    {
      "id": "java-snippet-6",
      "title": "While Loop",
      "description": "Condition-based iteration with while loop",
      "language": "java",
      "code": "int count = 1;\nwhile (count <= 5) {\n  System.out.println(\"Count: \" + count);\n  count++;\n}"
    },
    {
      "id": "java-snippet-7",
      "title": "Do-While Loop",
      "description": "Post-test loop that executes at least once",
      "language": "java",
      "code": "int i = 1;\ndo {\n  System.out.println(\"Value: \" + i);\n  i++;\n} while (i <= 5);"
    },
    {
      "id": "java-snippet-8",
      "title": "Method Definition",
      "description": "Creating reusable methods with parameters and return value",
      "language": "java",
      "code": "public class Calculator {\n  public static int add(int a, int b) {\n    return a + b;\n  }\n  \n  public static void main(String[] args) {\n    int result = add(5, 3);\n    System.out.println(\"Sum: \" + result);\n  }\n}"
    },
    {
      "id": "java-snippet-9",
      "title": "Method Overloading",
      "description": "Multiple methods with same name but different parameters",
      "language": "java",
      "code": "public class MathOperations {\n  public static int multiply(int a, int b) {\n    return a * b;\n  }\n  \n  public static double multiply(double a, double b) {\n    return a * b;\n  }\n  \n  public static void main(String[] args) {\n    System.out.println(\"Int multiplication: \" + multiply(5, 3));\n    System.out.println(\"Double multiplication: \" + multiply(5.5, 2.0));\n  }\n}"
    },
    {
      "id": "java-snippet-10",
      "title": "Class and Object Creation",
      "description": "Defining a class and creating objects",
      "language": "java",
      "code": "class Car {\n  String brand;\n  String model;\n  int year;\n  \n  public Car(String brand, String model, int year) {\n    this.brand = brand;\n    this.model = model;\n    this.year = year;\n  }\n  \n  void displayInfo() {\n    System.out.println(brand + \" \" + model + \" (\" + year + \")\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Car myCar = new Car(\"Toyota\", \"Camry\", 2022);\n    myCar.displayInfo();\n  }\n}"
    },
    {
      "id": "java-snippet-11",
      "title": "Getter and Setter Methods",
      "description": "Implementing encapsulation with accessor and mutator methods",
      "language": "java",
      "code": "class Person {\n  private String name;\n  private int age;\n  \n  public String getName() {\n    return name;\n  }\n  \n  public void setName(String name) {\n    this.name = name;\n  }\n  \n  public int getAge() {\n    return age;\n  }\n  \n  public void setAge(int age) {\n    if (age > 0) this.age = age;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Person person = new Person();\n    person.setName(\"John\");\n    person.setAge(25);\n    System.out.println(\"Name: \" + person.getName() + \", Age: \" + person.getAge());\n  }\n}"
    },
    {
      "id": "java-snippet-12",
      "title": "Inheritance Example",
      "description": "Creating subclass that extends a superclass",
      "language": "java",
      "code": "class Animal {\n  void eat() {\n    System.out.println(\"This animal eats food\");\n  }\n}\n\nclass Dog extends Animal {\n  void bark() {\n    System.out.println(\"The dog barks\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Dog myDog = new Dog();\n    myDog.eat();  // Inherited method\n    myDog.bark(); // Own method\n  }\n}"
    },
    {
      "id": "java-snippet-13",
      "title": "Method Overriding",
      "description": "Subclass providing specific implementation of superclass method",
      "language": "java",
      "code": "class Shape {\n  void draw() {\n    System.out.println(\"Drawing a shape\");\n  }\n}\n\nclass Circle extends Shape {\n  @Override\n  void draw() {\n    System.out.println(\"Drawing a circle\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Shape shape = new Circle();\n    shape.draw(); // Calls Circle's draw method\n  }\n}"
    },
    {
      "id": "java-snippet-14",
      "title": "Abstract Class",
      "description": "Defining abstract classes and methods",
      "language": "java",
      "code": "abstract class Vehicle {\n  abstract void start();\n  \n  void stop() {\n    System.out.println(\"Vehicle stopped\");\n  }\n}\n\nclass Car extends Vehicle {\n  @Override\n  void start() {\n    System.out.println(\"Car started with key\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Vehicle myCar = new Car();\n    myCar.start();\n    myCar.stop();\n  }\n}"
    },
    {
      "id": "java-snippet-15",
      "title": "Interface Implementation",
      "description": "Defining and implementing interfaces",
      "language": "java",
      "code": "interface Drawable {\n  void draw();\n  default void print() {\n    System.out.println(\"Printing drawing\");\n  }\n}\n\nclass Circle implements Drawable {\n  @Override\n  public void draw() {\n    System.out.println(\"Drawing a circle\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Drawable circle = new Circle();\n    circle.draw();\n    circle.print();\n  }\n}"
    },
    {
      "id": "java-snippet-16",
      "title": "Package Usage",
      "description": "Organizing classes into packages",
      "language": "java",
      "code": "package com.example.util;\n\npublic class StringUtil {\n  public static boolean isEmpty(String str) {\n    return str == null || str.trim().isEmpty();\n  }\n}\n\n// In another file\nimport com.example.util.StringUtil;\n\npublic class Main {\n  public static void main(String[] args) {\n    String test = \"\";\n    System.out.println(\"Is empty: \" + StringUtil.isEmpty(test));\n  }\n}"
    },
    {
      "id": "java-snippet-17",
      "title": "Exception Handling",
      "description": "Catching and handling exceptions with try-catch",
      "language": "java",
      "code": "public class ExceptionExample {\n  public static void main(String[] args) {\n    try {\n      int[] numbers = {1, 2, 3};\n      System.out.println(numbers[5]); // ArrayIndexOutOfBoundsException\n    } catch (ArrayIndexOutOfBoundsException e) {\n      System.out.println(\"Array index is out of bounds!\");\n    } catch (Exception e) {\n      System.out.println(\"Something went wrong: \" + e.getMessage());\n    } finally {\n      System.out.println(\"This block always executes\");\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-18",
      "title": "Custom Exception",
      "description": "Creating and throwing custom exceptions",
      "language": "java",
      "code": "class InsufficientFundsException extends Exception {\n  public InsufficientFundsException(String message) {\n    super(message);\n  }\n}\n\nclass BankAccount {\n  private double balance;\n  \n  public void withdraw(double amount) throws InsufficientFundsException {\n    if (amount > balance) {\n      throw new InsufficientFundsException(\"Insufficient funds. Current balance: \" + balance);\n    }\n    balance -= amount;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    BankAccount account = new BankAccount();\n    try {\n      account.withdraw(100);\n    } catch (InsufficientFundsException e) {\n      System.out.println(e.getMessage());\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-19",
      "title": "ArrayList Usage",
      "description": "Working with ArrayList collection",
      "language": "java",
      "code": "import java.util.ArrayList;\nimport java.util.Iterator;\n\npublic class ArrayListExample {\n  public static void main(String[] args) {\n    ArrayList<String> fruits = new ArrayList<>();\n    fruits.add(\"Apple\");\n    fruits.add(\"Banana\");\n    fruits.add(\"Orange\");\n    \n    System.out.println(\"First fruit: \" + fruits.get(0));\n    System.out.println(\"All fruits:\");\n    \n    // Using for-each loop\n    for (String fruit : fruits) {\n      System.out.println(fruit);\n    }\n    \n    // Using iterator\n    Iterator<String> iterator = fruits.iterator();\n    while (iterator.hasNext()) {\n      System.out.println(iterator.next());\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-20",
      "title": "HashMap Usage",
      "description": "Storing key-value pairs with HashMap",
      "language": "java",
      "code": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class HashMapExample {\n  public static void main(String[] args) {\n    HashMap<String, Integer> ageMap = new HashMap<>();\n    ageMap.put(\"John\", 25);\n    ageMap.put(\"Jane\", 30);\n    ageMap.put(\"Bob\", 35);\n    \n    System.out.println(\"John's age: \" + ageMap.get(\"John\"));\n    \n    // Iterating through HashMap\n    for (Map.Entry<String, Integer> entry : ageMap.entrySet()) {\n      System.out.println(entry.getKey() + \" is \" + entry.getValue() + \" years old\");\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-21",
      "title": "HashSet Usage",
      "description": "Working with HashSet for unique elements",
      "language": "java",
      "code": "import java.util.HashSet;\nimport java.util.Set;\n\npublic class HashSetExample {\n  public static void main(String[] args) {\n    Set<String> uniqueNames = new HashSet<>();\n    uniqueNames.add(\"John\");\n    uniqueNames.add(\"Jane\");\n    uniqueNames.add(\"John\"); // Duplicate, won't be added\n    \n    System.out.println(\"Unique names: \" + uniqueNames);\n    System.out.println(\"Size: \" + uniqueNames.size());\n    System.out.println(\"Contains Jane: \" + uniqueNames.contains(\"Jane\"));\n  }\n}"
    },
    {
      "id": "java-snippet-22",
      "title": "Generics Example",
      "description": "Using generics for type-safe collections",
      "language": "java",
      "code": "// Generic class\nclass Box<T> {\n  private T content;\n  \n  public void setContent(T content) {\n    this.content = content;\n  }\n  \n  public T getContent() {\n    return content;\n  }\n}\n\npublic class GenericsExample {\n  public static void main(String[] args) {\n    Box<String> stringBox = new Box<>();\n    stringBox.setContent(\"Hello Generics\");\n    \n    Box<Integer> integerBox = new Box<>();\n    integerBox.setContent(123);\n    \n    System.out.println(\"String box: \" + stringBox.getContent());\n    System.out.println(\"Integer box: \" + integerBox.getContent());\n  }\n}"
    },
    {
      "id": "java-snippet-23",
      "title": "String Manipulation",
      "description": "Common string operations and methods",
      "language": "java",
      "code": "public class StringOperations {\n  public static void main(String[] args) {\n    String str = \" Hello Java World \";\n    \n    System.out.println(\"Original: '\" + str + \"'\");\n    System.out.println(\"Trimmed: '\" + str.trim() + \"'\");\n    System.out.println(\"Uppercase: \" + str.toUpperCase());\n    System.out.println(\"Lowercase: \" + str.toLowerCase());\n    System.out.println(\"Length: \" + str.length());\n    System.out.println(\"Substring: \" + str.substring(7, 11));\n    System.out.println(\"Replace: \" + str.replace(\"Java\", \"Programming\"));\n    System.out.println(\"Contains 'Java': \" + str.contains(\"Java\"));\n    \n    // String comparison\n    String str1 = \"hello\";\n    String str2 = \"HELLO\";\n    System.out.println(\"Equals: \" + str1.equals(str2));\n    System.out.println(\"Equals ignore case: \" + str1.equalsIgnoreCase(str2));\n  }\n}"
    },
    {
      "id": "java-snippet-24",
      "title": "StringBuilder Example",
      "description": "Efficient string manipulation with StringBuilder",
      "language": "java",
      "code": "public class StringBuilderExample {\n  public static void main(String[] args) {\n    StringBuilder sb = new StringBuilder();\n    \n    sb.append(\"Hello\");\n    sb.append(\" \");\n    sb.append(\"World\");\n    \n    System.out.println(\"StringBuilder content: \" + sb.toString());\n    System.out.println(\"Length: \" + sb.length());\n    System.out.println(\"Capacity: \" + sb.capacity());\n    \n    sb.insert(5, \" Java\");\n    System.out.println(\"After insert: \" + sb.toString());\n    \n    sb.reverse();\n    System.out.println(\"Reversed: \" + sb.toString());\n  }\n}"
    },
    {
      "id": "java-snippet-25",
      "title": "Regular Expressions",
      "description": "Pattern matching with regular expressions",
      "language": "java",
      "code": "import java.util.regex.Pattern;\nimport java.util.regex.Matcher;\n\npublic class RegexExample {\n  public static void main(String[] args) {\n    String text = \"The quick brown fox jumps over the lazy dog 123.\";\n    String pattern = \"[a-z]+\\\";\n    \n    Pattern p = Pattern.compile(pattern);\n    Matcher m = p.matcher(text);\n    \n    System.out.println(\"Matching words:\");\n    while (m.find()) {\n      System.out.println(\"Found: \" + m.group() + \" at position \" + m.start());\n    }\n    \n    // Email validation\n    String email = \"test@example.com\";\n    String emailPattern = \"^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$\";\n    boolean isValidEmail = Pattern.matches(emailPattern, email);\n    System.out.println(\"Is valid email: \" + isValidEmail);\n  }\n}"
    },
    {
      "id": "java-snippet-26",
      "title": "File Reading",
      "description": "Reading text from a file",
      "language": "java",
      "code": "import java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\npublic class FileReadExample {\n  public static void main(String[] args) {\n    String fileName = \"sample.txt\";\n    \n    try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {\n      String line;\n      System.out.println(\"File content:\");\n      while ((line = reader.readLine()) != null) {\n        System.out.println(line);\n      }\n    } catch (IOException e) {\n      System.out.println(\"Error reading file: \" + e.getMessage());\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-27",
      "title": "File Writing",
      "description": "Writing text to a file",
      "language": "java",
      "code": "import java.io.BufferedWriter;\nimport java.io.FileWriter;\nimport java.io.IOException;\n\npublic class FileWriteExample {\n  public static void main(String[] args) {\n    String fileName = \"output.txt\";\n    \n    try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName))) {\n      writer.write(\"Hello, File I/O!\\n\");\n      writer.write(\"This is a second line.\\n\");\n      writer.write(\"Java file writing example.\\n\");\n      System.out.println(\"Data written to file successfully.\");\n    } catch (IOException e) {\n      System.out.println(\"Error writing to file: \" + e.getMessage());\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-28",
      "title": "Serialization",
      "description": "Converting objects to byte stream for storage/transmission",
      "language": "java",
      "code": "import java.io.*;\n\nclass Person implements Serializable {\n  private static final long serialVersionUID = 1L;\n  private String name;\n  private int age;\n  \n  public Person(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  @Override\n  public String toString() {\n    return \"Person{name='\" + name + \"', age=\" + age + \"}\";\n  }\n}\n\npublic class SerializationExample {\n  public static void main(String[] args) {\n    Person person = new Person(\"John\", 30);\n    \n    // Serialize object\n    try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(\"person.ser\"))) {\n      oos.writeObject(person);\n      System.out.println(\"Object serialized successfully\");\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n    \n    // Deserialize object\n    try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(\"person.ser\"))) {\n      Person deserializedPerson = (Person) ois.readObject();\n      System.out.println(\"Deserialized object: \" + deserializedPerson);\n    } catch (IOException | ClassNotFoundException e) {\n      e.printStackTrace();\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-29",
      "title": "Thread Creation",
      "description": "Creating threads by extending Thread class",
      "language": "java",
      "code": "class MyThread extends Thread {\n  @Override\n  public void run() {\n    for (int i = 1; i <= 5; i++) {\n      System.out.println(Thread.currentThread().getName() + \" - Count: \" + i);\n      try {\n        Thread.sleep(500); // Pause for 500 milliseconds\n      } catch (InterruptedException e) {\n        System.out.println(\"Thread interrupted\");\n      }\n    }\n  }\n}\n\npublic class ThreadExample {\n  public static void main(String[] args) {\n    MyThread thread1 = new MyThread();\n    MyThread thread2 = new MyThread();\n    \n    thread1.setName(\"Thread-1\");\n    thread2.setName(\"Thread-2\");\n    \n    thread1.start();\n    thread2.start();\n  }\n}"
    },
    {
      "id": "java-snippet-30",
      "title": "Runnable Interface",
      "description": "Creating threads by implementing Runnable interface",
      "language": "java",
      "code": "class MyRunnable implements Runnable {\n  @Override\n  public void run() {\n    for (int i = 1; i <= 5; i++) {\n      System.out.println(Thread.currentThread().getName() + \" - Count: \" + i);\n      try {\n        Thread.sleep(500);\n      } catch (InterruptedException e) {\n        System.out.println(\"Thread interrupted\");\n      }\n    }\n  }\n}\n\npublic class RunnableExample {\n  public static void main(String[] args) {\n    MyRunnable myRunnable = new MyRunnable();\n    \n    Thread thread1 = new Thread(myRunnable, \"Runnable-Thread-1\");\n    Thread thread2 = new Thread(myRunnable, \"Runnable-Thread-2\");\n    \n    thread1.start();\n    thread2.start();\n  }\n}"
    },
    {
      "id": "java-snippet-31",
      "title": "Synchronized Method",
      "description": "Thread synchronization for thread safety",
      "language": "java",
      "code": "class Counter {\n  private int count = 0;\n  \n  public synchronized void increment() {\n    count++;\n  }\n  \n  public synchronized int getCount() {\n    return count;\n  }\n}\n\nclass IncrementThread extends Thread {\n  private Counter counter;\n  \n  public IncrementThread(Counter counter) {\n    this.counter = counter;\n  }\n  \n  @Override\n  public void run() {\n    for (int i = 0; i < 1000; i++) {\n      counter.increment();\n    }\n  }\n}\n\npublic class SynchronizationExample {\n  public static void main(String[] args) throws InterruptedException {\n    Counter counter = new Counter();\n    \n    IncrementThread thread1 = new IncrementThread(counter);\n    IncrementThread thread2 = new IncrementThread(counter);\n    \n    thread1.start();\n    thread2.start();\n    \n    thread1.join();\n    thread2.join();\n    \n    System.out.println(\"Final count: \" + counter.getCount()); // Should be 2000\n  }\n}"
    },
    {
      "id": "java-snippet-32",
      "title": "Lambda Expression",
      "description": "Using lambda expressions for concise code",
      "language": "java",
      "code": "import java.util.Arrays;\nimport java.util.List;\n\npublic class LambdaExample {\n  public static void main(String[] args) {\n    List<String> names = Arrays.asList(\"John\", \"Jane\", \"Bob\", \"Alice\");\n    \n    // Traditional approach\n    System.out.println(\"Traditional for-each:\");\n    for (String name : names) {\n      System.out.println(name);\n    }\n    \n    // Lambda expression\n    System.out.println(\"\\nUsing lambda:\");\n    names.forEach(name -> System.out.println(name));\n    \n    // Method reference\n    System.out.println(\"\\nUsing method reference:\");\n    names.forEach(System.out::println);\n    \n    // Filtering with lambda\n    System.out.println(\"\\nNames starting with 'J':\");\n    names.stream()\n         .filter(name -> name.startsWith(\"J\"))\n         .forEach(System.out::println);\n  }\n}"
    },
    {
      "id": "java-snippet-33",
      "title": "Stream API",
      "description": "Processing collections with Stream API",
      "language": "java",
      "code": "import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class StreamExample {\n  public static void main(String[] args) {\n    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n    \n    // Filter even numbers and square them\n    List<Integer> result = numbers.stream()\n                                  .filter(n -> n % 2 == 0)\n                                  .map(n -> n * n)\n                                  .collect(Collectors.toList());\n    \n    System.out.println(\"Even numbers squared: \" + result);\n    \n    // Sum of all numbers\n    int sum = numbers.stream().reduce(0, Integer::sum);\n    System.out.println(\"Sum: \" + sum);\n    \n    // Find maximum\n    int max = numbers.stream().max(Integer::compare).get();\n    System.out.println(\"Max: \" + max);\n    \n    // Count elements\n    long count = numbers.stream().count();\n    System.out.println(\"Count: \" + count);\n  }\n}"
    },
    {
      "id": "java-snippet-34",
      "title": "Optional Class",
      "description": "Handling potential null values with Optional",
      "language": "java",
      "code": "import java.util.Optional;\n\npublic class OptionalExample {\n  public static void main(String[] args) {\n    String name = \"John\";\n    String nullName = null;\n    \n    // Creating Optional objects\n    Optional<String> optionalName = Optional.of(name);\n    Optional<String> optionalNull = Optional.ofNullable(nullName);\n    Optional<String> emptyOptional = Optional.empty();\n    \n    // Check if value is present\n    System.out.println(\"optionalName is present: \" + optionalName.isPresent());\n    System.out.println(\"optionalNull is present: \" + optionalNull.isPresent());\n    \n    // Get value or default\n    String result1 = optionalName.orElse(\"Default Name\");\n    String result2 = optionalNull.orElse(\"Default Name\");\n    \n    System.out.println(\"Result1: \" + result1);\n    System.out.println(\"Result2: \" + result2);\n    \n    // If present, do something\n    optionalName.ifPresent(n -> System.out.println(\"Name: \" + n));\n    optionalNull.ifPresent(n -> System.out.println(\"This won't print\"));\n    \n    // Filter and map\n    Optional<String> filtered = optionalName.filter(n -> n.length() > 3);\n    filtered.ifPresent(n -> System.out.println(\"Filtered name: \" + n));\n  }\n}"
    },
    {
      "id": "java-snippet-35",
      "title": "Date and Time API",
      "description": "Working with dates and times in Java 8+",
      "language": "java",
      "code": "import java.time.LocalDate;\nimport java.time.LocalDateTime;\nimport java.time.LocalTime;\nimport java.time.format.DateTimeFormatter;\nimport java.time.temporal.ChronoUnit;\n\npublic class DateTimeExample {\n  public static void main(String[] args) {\n    // Current date and time\n    LocalDate currentDate = LocalDate.now();\n    LocalTime currentTime = LocalTime.now();\n    LocalDateTime currentDateTime = LocalDateTime.now();\n    \n    System.out.println(\"Current Date: \" + currentDate);\n    System.out.println(\"Current Time: \" + currentTime);\n    System.out.println(\"Current DateTime: \" + currentDateTime);\n    \n    // Specific date\n    LocalDate specificDate = LocalDate.of(2023, 12, 25);\n    System.out.println(\"Christmas: \" + specificDate);\n    \n    // Date calculations\n    LocalDate tomorrow = currentDate.plusDays(1);\n    LocalDate nextWeek = currentDate.plusWeeks(1);\n    LocalDate nextMonth = currentDate.plusMonths(1);\n    LocalDate nextYear = currentDate.plusYears(1);\n    \n    System.out.println(\"Tomorrow: \" + tomorrow);\n    System.out.println(\"Next week: \" + nextWeek);\n    System.out.println(\"Next month: \" + nextMonth);\n    System.out.println(\"Next year: \" + nextYear);\n    \n    // Date difference\n    long daysBetween = ChronoUnit.DAYS.between(currentDate, specificDate);\n    System.out.println(\"Days until Christmas: \" + daysBetween);\n    \n    // Formatting\n    DateTimeFormatter formatter = DateTimeFormatter.ofPattern(\"yyyy-MM-dd HH:mm:ss\");\n    String formattedDateTime = currentDateTime.format(formatter);\n    System.out.println(\"Formatted DateTime: \" + formattedDateTime);\n  }\n}"
    },
    {
      "id": "java-snippet-36",
      "title": "JDBC Database Connection",
      "description": "Connecting to database using JDBC",
      "language": "java",
      "code": "import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.ResultSet;\nimport java.sql.SQLException;\nimport java.sql.Statement;\n\npublic class JdbcExample {\n  public static void main(String[] args) {\n    String url = \"jdbc:mysql://localhost:3306/mydatabase\";\n    String username = \"root\";\n    String password = \"password\";\n    \n    try (Connection connection = DriverManager.getConnection(url, username, password)) {\n      System.out.println(\"Database connected!\");\n      \n      // Create statement\n      Statement statement = connection.createStatement();\n      \n      // Create table\n      String createTableSQL = \"CREATE TABLE IF NOT EXISTS users (\" +\n                             \"id INT AUTO_INCREMENT PRIMARY KEY, \" +\n                             \"name VARCHAR(50) NOT NULL, \" +\n                             \"email VARCHAR(50) NOT NULL)\";\n      statement.execute(createTableSQL);\n      \n      // Insert data\n      String insertSQL = \"INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com')\";\n      int rowsInserted = statement.executeUpdate(insertSQL);\n      System.out.println(rowsInserted + \" row(s) inserted.\");\n      \n      // Query data\n      String selectSQL = \"SELECT * FROM users\";\n      ResultSet resultSet = statement.executeQuery(selectSQL);\n      \n      while (resultSet.next()) {\n        int id = resultSet.getInt(\"id\");\n        String name = resultSet.getString(\"name\");\n        String email = resultSet.getString(\"email\");\n        System.out.println(\"ID: \" + id + \", Name: \" + name + \", Email: \" + email);\n      }\n      \n    } catch (SQLException e) {\n      System.out.println(\"Database connection failed: \" + e.getMessage());\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-37",
      "title": "JDBC PreparedStatement",
      "description": "Using PreparedStatement for parameterized queries",
      "language": "java",
      "code": "import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.PreparedStatement;\nimport java.sql.ResultSet;\nimport java.sql.SQLException;\n\npublic class PreparedStatementExample {\n  public static void main(String[] args) {\n    String url = \"jdbc:mysql://localhost:3306/mydatabase\";\n    String username = \"root\";\n    String password = \"password\";\n    \n    try (Connection connection = DriverManager.getConnection(url, username, password)) {\n      System.out.println(\"Database connected!\");\n      \n      // Insert data with PreparedStatement\n      String insertSQL = \"INSERT INTO users (name, email) VALUES (?, ?)\";\n      PreparedStatement insertStatement = connection.prepareStatement(insertSQL);\n      \n      insertStatement.setString(1, \"Alice Smith\");\n      insertStatement.setString(2, \"alice@example.com\");\n      insertStatement.executeUpdate();\n      \n      insertStatement.setString(1, \"Bob Johnson\");\n      insertStatement.setString(2, \"bob@example.com\");\n      insertStatement.executeUpdate();\n      \n      System.out.println(\"Data inserted successfully.\");\n      \n      // Query with parameter\n      String selectSQL = \"SELECT * FROM users WHERE name = ?\";\n      PreparedStatement selectStatement = connection.prepareStatement(selectSQL);\n      selectStatement.setString(1, \"Alice Smith\");\n      \n      ResultSet resultSet = selectStatement.executeQuery();\n      while (resultSet.next()) {\n        System.out.println(\"ID: \" + resultSet.getInt(\"id\") + \n                          \", Name: \" + resultSet.getString(\"name\") + \n                          \", Email: \" + resultSet.getString(\"email\"));\n      }\n      \n    } catch (SQLException e) {\n      System.out.println(\"Database operation failed: \" + e.getMessage());\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-38",
      "title": "Enum Example",
      "description": "Defining and using enumerations",
      "language": "java",
      "code": "enum Day {\n  SUNDAY(\"Weekend\"),\n  MONDAY(\"Weekday\"),\n  TUESDAY(\"Weekday\"),\n  WEDNESDAY(\"Weekday\"),\n  THURSDAY(\"Weekday\"),\n  FRIDAY(\"Weekday\"),\n  SATURDAY(\"Weekend\");\n  \n  private String type;\n  \n  Day(String type) {\n    this.type = type;\n  }\n  \n  public String getType() {\n    return type;\n  }\n}\n\npublic class EnumExample {\n  public static void main(String[] args) {\n    Day today = Day.MONDAY;\n    \n    System.out.println(\"Today is: \" + today);\n    System.out.println(\"Type: \" + today.getType());\n    System.out.println(\"Ordinal: \" + today.ordinal());\n    \n    // Switch statement with enum\n    switch (today) {\n      case MONDAY:\n        System.out.println(\"Start of the work week\");\n        break;\n      case FRIDAY:\n        System.out.println(\"End of the work week\");\n        break;\n      default:\n        System.out.println(\"Midweek\");\n    }\n    \n    // Iterate through all enum values\n    System.out.println(\"\\nAll days:\");\n    for (Day day : Day.values()) {\n      System.out.println(day + \" (\" + day.getType() + \")\");\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-39",
      "title": "Annotation Example",
      "description": "Creating and using custom annotations",
      "language": "java",
      "code": "import java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\n// Custom annotation definition\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.METHOD)\n@interface MyAnnotation {\n  String value() default \"Default value\";\n  int count() default 0;\n}\n\nclass AnnotationTest {\n  // Using the custom annotation\n  @MyAnnotation(value = \"Test method\", count = 5)\n  public void testMethod() {\n    System.out.println(\"Testing custom annotation\");\n  }\n  \n  @MyAnnotation // Using default values\n  public void anotherMethod() {\n    System.out.println(\"Another method\");\n  }\n}\n\npublic class AnnotationExample {\n  public static void main(String[] args) {\n    AnnotationTest test = new AnnotationTest();\n    test.testMethod();\n    test.anotherMethod();\n    \n    // Reflection to read annotations\n    try {\n      Class<?> clazz = AnnotationTest.class;\n      java.lang.reflect.Method method = clazz.getMethod(\"testMethod\");\n      MyAnnotation annotation = method.getAnnotation(MyAnnotation.class);\n      \n      if (annotation != null) {\n        System.out.println(\"Annotation value: \" + annotation.value());\n        System.out.println(\"Annotation count: \" + annotation.count());\n      }\n    } catch (NoSuchMethodException e) {\n      e.printStackTrace();\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-40",
      "title": "Reflection Example",
      "description": "Inspecting classes at runtime using reflection",
      "language": "java",
      "code": "import java.lang.reflect.Constructor;\nimport java.lang.reflect.Field;\nimport java.lang.reflect.Method;\n\nclass Person {\n  private String name;\n  private int age;\n  \n  public Person() {}\n  \n  public Person(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  public String getName() {\n    return name;\n  }\n  \n  public void setName(String name) {\n    this.name = name;\n  }\n  \n  public int getAge() {\n    return age;\n  }\n  \n  public void setAge(int age) {\n    this.age = age;\n  }\n  \n  private void privateMethod() {\n    System.out.println(\"This is a private method\");\n  }\n}\n\npublic class ReflectionExample {\n  public static void main(String[] args) {\n    try {\n      // Get Class object\n      Class<?> personClass = Class.forName(\"Person\");\n      \n      // Get constructors\n      System.out.println(\"Constructors:\");\n      Constructor<?>[] constructors = personClass.getConstructors();\n      for (Constructor<?> constructor : constructors) {\n        System.out.println(\"  \" + constructor);\n      }\n      \n      // Get methods\n      System.out.println(\"\\nMethods:\");\n      Method[] methods = personClass.getMethods();\n      for (Method method : methods) {\n        System.out.println(\"  \" + method.getName());\n      }\n      \n      // Get declared fields (including private)\n      System.out.println(\"\\nFields:\");\n      Field[] fields = personClass.getDeclaredFields();\n      for (Field field : fields) {\n        System.out.println(\"  \" + field.getName() + \" (\" + field.getType() + \")\");\n      }\n      \n      // Create instance using reflection\n      Constructor<?> constructor = personClass.getConstructor(String.class, int.class);\n      Person person = (Person) constructor.newInstance(\"John\", 30);\n      System.out.println(\"\\nCreated person: \" + person.getName() + \", \" + person.getAge());\n      \n      // Access private method\n      Method privateMethod = personClass.getDeclaredMethod(\"privateMethod\");\n      privateMethod.setAccessible(true);\n      privateMethod.invoke(person);\n      \n    } catch (Exception e) {\n      e.printStackTrace();\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-41",
      "title": "Varargs Example",
      "description": "Using variable arguments in methods",
      "language": "java",
      "code": "public class VarargsExample {\n  \n  // Method with varargs\n  public static void printNumbers(int... numbers) {\n    System.out.println(\"Number of arguments: \" + numbers.length);\n    for (int num : numbers) {\n      System.out.print(num + \" \");\n    }\n    System.out.println();\n  }\n  \n  // Method with normal parameter and varargs\n  public static void printValues(String message, double... values) {\n    System.out.print(message + \": \");\n    for (double val : values) {\n      System.out.print(val + \" \");\n    }\n    System.out.println();\n  }\n  \n  public static void main(String[] args) {\n    // Calling with different number of arguments\n    printNumbers(1);\n    printNumbers(1, 2);\n    printNumbers(1, 2, 3, 4, 5);\n    printNumbers(); // Empty varargs\n    \n    printValues(\"Values\", 1.1, 2.2, 3.3);\n    printValues(\"No values\");\n    \n    // Passing array to varargs\n    int[] arr = {10, 20, 30};\n    printNumbers(arr);\n  }\n}"
    },
    {
      "id": "java-snippet-42",
      "title": "Singleton Pattern",
      "description": "Implementing singleton design pattern",
      "language": "java",
      "code": "class Singleton {\n  // Private static instance\n  private static Singleton instance;\n  \n  // Private constructor to prevent instantiation\n  private Singleton() {\n    System.out.println(\"Singleton instance created\");\n  }\n  \n  // Public static method to get instance\n  public static Singleton getInstance() {\n    if (instance == null) {\n      instance = new Singleton();\n    }\n    return instance;\n  }\n  \n  // Instance method\n  public void showMessage() {\n    System.out.println(\"Hello from Singleton!\");\n  }\n}\n\npublic class SingletonExample {\n  public static void main(String[] args) {\n    // Get the singleton instance\n    Singleton singleton1 = Singleton.getInstance();\n    singleton1.showMessage();\n    \n    // Try to get another instance\n    Singleton singleton2 = Singleton.getInstance();\n    singleton2.showMessage();\n    \n    // Check if both references point to the same object\n    System.out.println(\"Are both instances the same? \" + (singleton1 == singleton2));\n    \n    // Try to create instance using reflection (will fail due to private constructor)\n    try {\n      // This would throw an exception\n      // Singleton illegalInstance = new Singleton();\n    } catch (Exception e) {\n      System.out.println(\"Cannot instantiate Singleton: \" + e.getMessage());\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-43",
      "title": "Factory Pattern",
      "description": "Implementing factory design pattern",
      "language": "java",
      "code": "// Product interface\ninterface Shape {\n  void draw();\n}\n\n// Concrete products\nclass Circle implements Shape {\n  @Override\n  public void draw() {\n    System.out.println(\"Drawing a Circle\");\n  }\n}\n\nclass Rectangle implements Shape {\n  @Override\n  public void draw() {\n    System.out.println(\"Drawing a Rectangle\");\n  }\n}\n\nclass Square implements Shape {\n  @Override\n  public void draw() {\n    System.out.println(\"Drawing a Square\");\n  }\n}\n\n// Factory class\nclass ShapeFactory {\n  // Factory method\n  public Shape getShape(String shapeType) {\n    if (shapeType == null) {\n      return null;\n    }\n    \n    if (shapeType.equalsIgnoreCase(\"CIRCLE\")) {\n      return new Circle();\n    } else if (shapeType.equalsIgnoreCase(\"RECTANGLE\")) {\n      return new Rectangle();\n    } else if (shapeType.equalsIgnoreCase(\"SQUARE\")) {\n      return new Square();\n    }\n    \n    return null;\n  }\n}\n\npublic class FactoryPatternExample {\n  public static void main(String[] args) {\n    ShapeFactory shapeFactory = new ShapeFactory();\n    \n    // Get Circle object and call its draw method\n    Shape shape1 = shapeFactory.getShape(\"CIRCLE\");\n    shape1.draw();\n    \n    // Get Rectangle object and call its draw method\n    Shape shape2 = shapeFactory.getShape(\"RECTANGLE\");\n    shape2.draw();\n    \n    // Get Square object and call its draw method\n    Shape shape3 = shapeFactory.getShape(\"SQUARE\");\n    shape3.draw();\n  }\n}"
    },
    {
      "id": "java-snippet-44",
      "title": "Observer Pattern",
      "description": "Implementing observer design pattern",
      "language": "java",
      "code": "import java.util.ArrayList;\nimport java.util.List;\n\n// Observer interface\ninterface Observer {\n  void update(String message);\n}\n\n// Subject interface\ninterface Subject {\n  void registerObserver(Observer observer);\n  void removeObserver(Observer observer);\n  void notifyObservers();\n}\n\n// Concrete subject\nclass NewsAgency implements Subject {\n  private List<Observer> observers;\n  private String news;\n  \n  public NewsAgency() {\n    observers = new ArrayList<>();\n  }\n  \n  @Override\n  public void registerObserver(Observer observer) {\n    observers.add(observer);\n  }\n  \n  @Override\n  public void removeObserver(Observer observer) {\n    observers.remove(observer);\n  }\n  \n  @Override\n  public void notifyObservers() {\n    for (Observer observer : observers) {\n      observer.update(news);\n    }\n  }\n  \n  public void setNews(String news) {\n    this.news = news;\n    notifyObservers();\n  }\n}\n\n// Concrete observers\nclass NewsChannel implements Observer {\n  private String name;\n  private String news;\n  \n  public NewsChannel(String name) {\n    this.name = name;\n  }\n  \n  @Override\n  public void update(String news) {\n    this.news = news;\n    display();\n  }\n  \n  public void display() {\n    System.out.println(name + \" broadcasting: \" + news);\n  }\n}\n\npublic class ObserverPatternExample {\n  public static void main(String[] args) {\n    NewsAgency agency = new NewsAgency();\n    \n    NewsChannel channel1 = new NewsChannel(\"CNN\");\n    NewsChannel channel2 = new NewsChannel(\"BBC\");\n    NewsChannel channel3 = new NewsChannel(\"Al Jazeera\");\n    \n    agency.registerObserver(channel1);\n    agency.registerObserver(channel2);\n    agency.registerObserver(channel3);\n    \n    agency.setNews(\"Breaking: Java 17 released with new features!\");\n    \n    System.out.println(\"\\nRemoving BBC from observers...\");\n    agency.removeObserver(channel2);\n    \n    agency.setNews(\"Update: Java developers excited about new release!\");\n  }\n}"
    },
    {
      "id": "java-snippet-45",
      "title": "Java NIO File Operations",
      "description": "Using Java NIO for file operations",
      "language": "java",
      "code": "import java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\nimport java.nio.file.StandardCopyOption;\nimport java.util.List;\n\npublic class NioExample {\n  public static void main(String[] args) {\n    try {\n      // Create directory\n      Path dirPath = Paths.get(\"test_dir\");\n      if (!Files.exists(dirPath)) {\n        Files.createDirectory(dirPath);\n        System.out.println(\"Directory created: \" + dirPath.toAbsolutePath());\n      }\n      \n      // Create file\n      Path filePath = Paths.get(\"test_dir/test_file.txt\");\n      if (!Files.exists(filePath)) {\n        Files.createFile(filePath);\n        System.out.println(\"File created: \" + filePath.toAbsolutePath());\n      }\n      \n      // Write to file\n      String content = \"Hello Java NIO!\\nThis is a test file.\";\n      Files.write(filePath, content.getBytes());\n      System.out.println(\"Content written to file\");\n      \n      // Read from file\n      List<String> lines = Files.readAllLines(filePath);\n      System.out.println(\"File content:\");\n      for (String line : lines) {\n        System.out.println(line);\n      }\n      \n      // Copy file\n      Path copyPath = Paths.get(\"test_dir/test_file_copy.txt\");\n      Files.copy(filePath, copyPath, StandardCopyOption.REPLACE_EXISTING);\n      System.out.println(\"File copied to: \" + copyPath.getFileName());\n      \n      // Get file information\n      System.out.println(\"File size: \" + Files.size(filePath) + \" bytes\");\n      System.out.println(\"Is readable: \" + Files.isReadable(filePath));\n      System.out.println(\"Is writable: \" + Files.isWritable(filePath));\n      \n      // Delete file\n      Files.deleteIfExists(copyPath);\n      System.out.println(\"Copy file deleted\");\n      \n    } catch (IOException e) {\n      System.out.println(\"IO Error: \" + e.getMessage());\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-46",
      "title": "Java Networking",
      "description": "Basic networking with sockets",
      "language": "java",
      "code": "import java.io.BufferedReader;\nimport java.io.IOException;\nimport java.io.InputStreamReader;\nimport java.io.PrintWriter;\nimport java.net.ServerSocket;\nimport java.net.Socket;\n\nclass SimpleServer {\n  public static void main(String[] args) {\n    try (ServerSocket serverSocket = new ServerSocket(8080)) {\n      System.out.println(\"Server started on port 8080\");\n      \n      while (true) {\n        try (Socket clientSocket = serverSocket.accept();\n             PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);\n             BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()))) {\n          \n          System.out.println(\"Client connected: \" + clientSocket.getInetAddress());\n          \n          String inputLine;\n          while ((inputLine = in.readLine()) != null) {\n            System.out.println(\"Received: \" + inputLine);\n            out.println(\"Echo: \" + inputLine);\n            \n            if (inputLine.equals(\"exit\")) {\n              break;\n            }\n          }\n        } catch (IOException e) {\n          System.out.println(\"Error handling client: \" + e.getMessage());\n        }\n      }\n    } catch (IOException e) {\n      System.out.println(\"Could not start server: \" + e.getMessage());\n    }\n  }\n}\n\nclass SimpleClient {\n  public static void main(String[] args) {\n    try (Socket socket = new Socket(\"localhost\", 8080);\n         PrintWriter out = new PrintWriter(socket.getOutputStream(), true);\n         BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));\n         BufferedReader stdIn = new BufferedReader(new InputStreamReader(System.in))) {\n      \n      System.out.println(\"Connected to server\");\n      \n      String userInput;\n      while ((userInput = stdIn.readLine()) != null) {\n        out.println(userInput);\n        System.out.println(\"Server response: \" + in.readLine());\n        \n        if (userInput.equals(\"exit\")) {\n          break;\n        }\n      }\n    } catch (IOException e) {\n      System.out.println(\"Could not connect to server: \" + e.getMessage());\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-47",
      "title": "Java Logging",
      "description": "Using Java's built-in logging framework",
      "language": "java",
      "code": "import java.util.logging.Level;\nimport java.util.logging.Logger;\n\npublic class LoggingExample {\n  // Create a logger\n  private static final Logger logger = Logger.getLogger(LoggingExample.class.getName());\n  \n  public static void main(String[] args) {\n    // Log messages at different levels\n    logger.severe(\"This is a severe message\");\n    logger.warning(\"This is a warning message\");\n    logger.info(\"This is an info message\");\n    logger.config(\"This is a config message\");\n    logger.fine(\"This is a fine message\");\n    logger.finer(\"This is a finer message\");\n    logger.finest(\"This is the finest message\");\n    \n    // Log with parameters\n    String user = \"John\";\n    int age = 30;\n    logger.log(Level.INFO, \"User {0} is {1} years old\", new Object[]{user, age});\n    \n    // Log an exception\n    try {\n      int result = 10 / 0;\n    } catch (Exception e) {\n      logger.log(Level.SEVERE, \"An error occurred\", e);\n    }\n    \n    // Conditional logging\n    if (logger.isLoggable(Level.FINE)) {\n      logger.fine(\"This is expensive to compute: \" + expensiveOperation());\n    }\n  }\n  \n  private static String expensiveOperation() {\n    // Simulate expensive operation\n    try {\n      Thread.sleep(100);\n    } catch (InterruptedException e) {\n      logger.warning(\"Sleep interrupted\");\n    }\n    return \"Expensive result\";\n  }\n}"
    },
    {
      "id": "java-snippet-48",
      "title": "JUnit Testing",
      "description": "Writing unit tests with JUnit",
      "language": "java",
      "code": "import org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.DisplayName;\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass Calculator {\n  public int add(int a, int b) {\n    return a + b;\n  }\n  \n  public int subtract(int a, int b) {\n    return a - b;\n  }\n  \n  public int multiply(int a, int b) {\n    return a * b;\n  }\n  \n  public double divide(int a, int b) {\n    if (b == 0) {\n      throw new IllegalArgumentException(\"Cannot divide by zero\");\n    }\n    return (double) a / b;\n  }\n}\n\nclass CalculatorTest {\n  private Calculator calculator;\n  \n  @BeforeEach\n  void setUp() {\n    calculator = new Calculator();\n  }\n  \n  @Test\n  @DisplayName(\"Test addition\")\n  void testAdd() {\n    assertEquals(5, calculator.add(2, 3), \"2 + 3 should equal 5\");\n    assertEquals(0, calculator.add(-2, 2), \"-2 + 2 should equal 0\");\n  }\n  \n  @Test\n  @DisplayName(\"Test subtraction\")\n  void testSubtract() {\n    assertEquals(1, calculator.subtract(3, 2), \"3 - 2 should equal 1\");\n    assertEquals(-5, calculator.subtract(2, 7), \"2 - 7 should equal -5\");\n  }\n  \n  @Test\n  @DisplayName(\"Test multiplication\")\n  void testMultiply() {\n    assertEquals(6, calculator.multiply(2, 3), \"2 * 3 should equal 6\");\n    assertEquals(0, calculator.multiply(5, 0), \"5 * 0 should equal 0\");\n  }\n  \n  @Test\n  @DisplayName(\"Test division\")\n  void testDivide() {\n    assertEquals(2.0, calculator.divide(4, 2), \"4 / 2 should equal 2.0\");\n    assertEquals(2.5, calculator.divide(5, 2), \"5 / 2 should equal 2.5\");\n  }\n  \n  @Test\n  @DisplayName(\"Test division by zero\")\n  void testDivideByZero() {\n    Exception exception = assertThrows(IllegalArgumentException.class, () -> {\n      calculator.divide(5, 0);\n    });\n    \n    String expectedMessage = \"Cannot divide by zero\";\n    String actualMessage = exception.getMessage();\n    \n    assertTrue(actualMessage.contains(expectedMessage));\n  }\n  \n  @Test\n  @DisplayName(\"Test multiple operations\")\n  void testMultipleOperations() {\n    assertAll(\"Multiple operations\",\n      () -> assertEquals(5, calculator.add(2, 3)),\n      () -> assertEquals(6, calculator.multiply(2, 3)),\n      () -> assertEquals(1, calculator.subtract(3, 2)),\n      () -> assertEquals(2.0, calculator.divide(4, 2))\n    );\n  }\n}"
    },
    {
      "id": "java-snippet-49",
      "title": "Java Records",
      "description": "Using records (Java 14+) for data classes",
      "language": "java",
      "code": "// Record declaration (compact class for data)\nrecord Person(String name, int age, String email) {\n  // Compact constructor for validation\n  public Person {\n    if (age < 0) {\n      throw new IllegalArgumentException(\"Age cannot be negative\");\n    }\n    if (email == null || !email.contains(\"@\")) {\n      throw new IllegalArgumentException(\"Invalid email\");\n    }\n  }\n  \n  // Additional method\n  public String greet() {\n    return \"Hello, \" + name + \"!\";\n  }\n}\n\npublic class RecordExample {\n  public static void main(String[] args) {\n    try {\n      // Create record instance\n      Person person = new Person(\"John Doe\", 30, \"john@example.com\");\n      \n      // Access components\n      System.out.println(\"Name: \" + person.name());\n      System.out.println(\"Age: \" + person.age());\n      System.out.println(\"Email: \" + person.email());\n      \n      // Call custom method\n      System.out.println(person.greet());\n      \n      // toString() is automatically implemented\n      System.out.println(\"Person details: \" + person);\n      \n      // equals() and hashCode() are automatically implemented\n      Person person2 = new Person(\"John Doe\", 30, \"john@example.com\");\n      System.out.println(\"Are persons equal? \" + person.equals(person2));\n      \n      // This will throw an exception\n      // Person invalidPerson = new Person(\"Invalid\", -5, \"invalid\");\n      \n    } catch (IllegalArgumentException e) {\n      System.out.println(\"Error creating person: \" + e.getMessage());\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-50",
      "title": "Sealed Classes",
      "description": "Using sealed classes (Java 17+) for controlled inheritance",
      "language": "java",
      "code": "// Sealed class declaration\nsealed abstract class Shape permits Circle, Rectangle, Square {\n  public abstract double area();\n}\n\n// Permitted subclasses\nfinal class Circle extends Shape {\n  private final double radius;\n  \n  public Circle(double radius) {\n    this.radius = radius;\n  }\n  \n  @Override\n  public double area() {\n    return Math.PI * radius * radius;\n  }\n}\n\nfinal class Rectangle extends Shape {\n  private final double width;\n  private final double height;\n  \n  public Rectangle(double width, double height) {\n    this.width = width;\n    this.height = height;\n  }\n  \n  @Override\n  public double area() {\n    return width * height;\n  }\n}\n\nnon-sealed class Square extends Shape {\n  private final double side;\n  \n  public Square(double side) {\n    this.side = side;\n  }\n  \n  @Override\n  public double area() {\n    return side * side;\n  }\n}\n\n// Can extend non-sealed class\nclass ColoredSquare extends Square {\n  private final String color;\n  \n  public ColoredSquare(double side, String color) {\n    super(side);\n    this.color = color;\n  }\n  \n  public String getColor() {\n    return color;\n  }\n}\n\npublic class SealedClassesExample {\n  public static void main(String[] args) {\n    Shape circle = new Circle(5.0);\n    Shape rectangle = new Rectangle(4.0, 6.0);\n    Shape square = new Square(4.0);\n    Shape coloredSquare = new ColoredSquare(3.0, \"Red\");\n    \n    System.out.println(\"Circle area: \" + circle.area());\n    System.out.println(\"Rectangle area: \" + rectangle.area());\n    System.out.println(\"Square area: \" + square.area());\n    System.out.println(\"Colored square area: \" + coloredSquare.area());\n    \n    // Pattern matching with instanceof (Java 16+)\n    if (coloredSquare instanceof ColoredSquare cs) {\n      System.out.println(\"Square color: \" + cs.getColor());\n    }\n    \n    // Using switch expression with pattern matching (Java 17+)\n    String shapeDescription = switch (square) {\n      case Circle c -> \"Circle with area \" + c.area();\n      case Rectangle r -> \"Rectangle with area \" + r.area();\n      case Square s -> \"Square with area \" + s.area();\n      case ColoredSquare cs -> \"Colored square with area \" + cs.area() + \" and color \" + cs.getColor();\n      default -> \"Unknown shape\";\n    };\n    \n    System.out.println(shapeDescription);\n  }\n}"
    },
    {
      "id": "java-snippet-51",
      "title": "Pattern Matching",
      "description": "Using pattern matching with instanceof",
      "language": "java",
      "code": "abstract class Animal {\n  public abstract String makeSound();\n}\n\nclass Dog extends Animal {\n  @Override\n  public String makeSound() {\n    return \"Woof!\";\n  }\n  \n  public String fetch() {\n    return \"Fetching the ball!\";\n  }\n}\n\nclass Cat extends Animal {\n  @Override\n  public String makeSound() {\n    return \"Meow!\";\n  }\n  \n  public String climb() {\n    return \"Climbing the tree!\";\n  }\n}\n\npublic class PatternMatchingExample {\n  public static void main(String[] args) {\n    Animal[] animals = {new Dog(), new Cat(), new Dog()};\n    \n    // Traditional approach\n    System.out.println(\"Traditional approach:\");\n    for (Animal animal : animals) {\n      if (animal instanceof Dog) {\n        Dog dog = (Dog) animal;\n        System.out.println(dog.fetch());\n      } else if (animal instanceof Cat) {\n        Cat cat = (Cat) animal;\n        System.out.println(cat.climb());\n      }\n    }\n    \n    // Pattern matching (Java 16+)\n    System.out.println(\"\\nPattern matching:\");\n    for (Animal animal : animals) {\n      if (animal instanceof Dog dog) {\n        System.out.println(dog.fetch());\n      } else if (animal instanceof Cat cat) {\n        System.out.println(cat.climb());\n      }\n    }\n    \n    // Using pattern matching in switch (Java 17+)\n    System.out.println(\"\\nPattern matching in switch:\");\n    for (Animal animal : animals) {\n      String result = switch (animal) {\n        case Dog dog -> dog.fetch();\n        case Cat cat -> cat.climb();\n        default -> \"Unknown animal\";\n      };\n      System.out.println(result);\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-52",
      "title": "Text Blocks",
      "description": "Using text blocks (Java 15+) for multiline strings",
      "language": "java",
      "code": "public class TextBlocksExample {\n  public static void main(String[] args) {\n    // Traditional approach with concatenation\n    String traditionalHtml = \"<html>\\n\" +\n                           \"    <body>\\n\" +\n                           \"        <h1>Hello, World!</h1>\\n\" +\n                           \"    </body>\\n\" +\n                           \"</html>\";\n    \n    System.out.println(\"Traditional HTML:\");\n    System.out.println(traditionalHtml);\n    \n    // Using text blocks\n    String textBlockHtml = \"\"\"\n                          <html>\n                              <body>\n                                  <h1>Hello, Text Blocks!</h1>\n                              </body>\n                          </html>\n                          \"\"\";\n    \n    System.out.println(\"\\nText Block HTML:\");\n    System.out.println(textBlockHtml);\n    \n    // Text blocks with interpolation\n    String name = \"John\";\n    int age = 30;\n    \n    String message = \"\"\"\n                    Hello, %s!\n                    You are %d years old.\n                    \"\"\".formatted(name, age);\n    \n    System.out.println(\"\\nFormatted message:\");\n    System.out.println(message);\n    \n    // JSON example\n    String json = \"\"\"\n                 {\n                   \"name\": \"John Doe\",\n                   \"age\": 30,\n                   \"email\": \"john@example.com\",\n                   \"hobbies\": [\"reading\", \"gaming\", \"coding\"]\n                 }\n                 \"\"\";\n    \n    System.out.println(\"\\nJSON example:\");\n    System.out.println(json);\n    \n    // SQL query example\n    String sql = \"\"\"\n                SELECT id, name, email\n                FROM users\n                WHERE age > 18\n                ORDER BY name ASC\n                \"\"\";\n    \n    System.out.println(\"\\nSQL example:\");\n    System.out.println(sql);\n  }\n}"
    },
    {
      "id": "java-snippet-53",
      "title": "HTTP Client",
      "description": "Making HTTP requests with Java 11+ HttpClient",
      "language": "java",
      "code": "import java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.time.Duration;\n\npublic class HttpClientExample {\n  public static void main(String[] args) {\n    // Create HttpClient\n    HttpClient client = HttpClient.newBuilder()\n        .version(HttpClient.Version.HTTP_2)\n        .connectTimeout(Duration.ofSeconds(10))\n        .build();\n    \n    // Create HTTP GET request\n    HttpRequest request = HttpRequest.newBuilder()\n        .uri(URI.create(\"https://jsonplaceholder.typicode.com/posts/1\"))\n        .GET()\n        .header(\"Accept\", \"application/json\")\n        .build();\n    \n    try {\n      // Send request and get response\n      HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n      \n      // Print response details\n      System.out.println(\"Status Code: \" + response.statusCode());\n      System.out.println(\"Response Body:\");\n      System.out.println(response.body());\n      \n    } catch (Exception e) {\n      System.out.println(\"Error making HTTP request: \" + e.getMessage());\n    }\n    \n    // Async request example\n    System.out.println(\"\\nMaking async request...\");\n    HttpRequest asyncRequest = HttpRequest.newBuilder()\n        .uri(URI.create(\"https://jsonplaceholder.typicode.com/posts/2\"))\n        .GET()\n        .build();\n    \n    client.sendAsync(asyncRequest, HttpResponse.BodyHandlers.ofString())\n        .thenApply(HttpResponse::body)\n        .thenAccept(body -> {\n          System.out.println(\"Async Response:\");\n          System.out.println(body);\n        })\n        .join(); // Wait for async operation to complete\n    \n    // POST request example\n    System.out.println(\"\\nMaking POST request...\");\n    String jsonBody = \"\"\"\n                    {\n                      \"title\": \"foo\",\n                      \"body\": \"bar\",\n                      \"userId\": 1\n                    }\n                    \"\"\";\n    \n    HttpRequest postRequest = HttpRequest.newBuilder()\n        .uri(URI.create(\"https://jsonplaceholder.typicode.com/posts\"))\n        .POST(HttpRequest.BodyPublishers.ofString(jsonBody))\n        .header(\"Content-Type\", \"application/json\")\n        .build();\n    \n    try {\n      HttpResponse<String> postResponse = client.send(postRequest, HttpResponse.BodyHandlers.ofString());\n      System.out.println(\"POST Response Status: \" + postResponse.statusCode());\n      System.out.println(\"POST Response Body:\");\n      System.out.println(postResponse.body());\n    } catch (Exception e) {\n      System.out.println(\"Error making POST request: \" + e.getMessage());\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-54",
      "title": "Process API",
      "description": "Working with processes using Process API",
      "language": "java",
      "code": "import java.io.IOException;\nimport java.time.Duration;\nimport java.time.Instant;\nimport java.util.Optional;\nimport java.util.stream.Stream;\n\npublic class ProcessApiExample {\n  public static void main(String[] args) {\n    // Get current process information\n    ProcessHandle currentProcess = ProcessHandle.current();\n    System.out.println(\"Current Process ID: \" + currentProcess.pid());\n    System.out.println(\"Is alive: \" + currentProcess.isAlive());\n    \n    // Get process info\n    Optional<ProcessHandle.Info> info = currentProcess.info();\n    info.ifPresent(processInfo -> {\n      System.out.println(\"Command: \" + processInfo.command().orElse(\"Unknown\"));\n      System.out.println(\"Arguments: \" + \n          String.join(\" \", processInfo.arguments().orElse(new String[]{})));\n      System.out.println(\"Start time: \" + processInfo.startInstant().orElse(Instant.now()));\n      System.out.println(\"CPU duration: \" + processInfo.totalCpuDuration().orElse(Duration.ZERO));\n      System.out.println(\"User: \" + processInfo.user().orElse(\"Unknown\"));\n    });\n    \n    // List all processes\n    System.out.println(\"\\nAll processes:\");\n    Stream<ProcessHandle> allProcesses = ProcessHandle.allProcesses();\n    allProcesses.limit(10).forEach(process -> {\n      System.out.println(\"PID: \" + process.pid() + \n          \", Command: \" + process.info().flatMap(ProcessHandle.Info::command).orElse(\"Unknown\"));\n    });\n    \n    // Start a new process\n    try {\n      ProcessBuilder processBuilder = new ProcessBuilder(\"java\", \"-version\");\n      Process process = processBuilder.start();\n      \n      // Wait for process to complete\n      int exitCode = process.waitFor();\n      System.out.println(\"\\nProcess exited with code: \" + exitCode);\n      \n    } catch (IOException | InterruptedException e) {\n      System.out.println(\"Error starting process: \" + e.getMessage());\n    }\n    \n    // Process destruction and termination\n    try {\n      ProcessBuilder sleepProcessBuilder = new ProcessBuilder(\"sleep\", \"30\");\n      Process sleepProcess = sleepProcessBuilder.start();\n      \n      System.out.println(\"Started sleep process with PID: \" + sleepProcess.pid());\n      \n      // Check if process is alive\n      if (sleepProcess.isAlive()) {\n        System.out.println(\"Sleep process is alive\");\n        \n        // Destroy process\n        sleepProcess.destroy();\n        System.out.println(\"Sleep process destroyed\");\n        \n        // Wait for process to terminate\n        sleepProcess.waitFor();\n        System.out.println(\"Sleep process terminated with exit code: \" + sleepProcess.exitValue());\n      }\n      \n    } catch (IOException | InterruptedException e) {\n      System.out.println(\"Error with sleep process: \" + e.getMessage());\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-55",
      "title": "CompletableFuture",
      "description": "Asynchronous programming with CompletableFuture",
      "language": "java",
      "code": "import java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.ExecutionException;\nimport java.util.concurrent.TimeUnit;\n\npublic class CompletableFutureExample {\n  public static void main(String[] args) {\n    // Simple CompletableFuture\n    CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {\n      try {\n        TimeUnit.SECONDS.sleep(1);\n      } catch (InterruptedException e) {\n        throw new IllegalStateException(e);\n      }\n      return \"Result of the asynchronous computation\";\n    });\n    \n    // Block and get the result\n    try {\n      String result = future.get();\n      System.out.println(result);\n    } catch (InterruptedException | ExecutionException e) {\n      e.printStackTrace();\n    }\n    \n    // ThenApply - transforming result\n    CompletableFuture<String> welcomeText = CompletableFuture.supplyAsync(() -> {\n      try {\n        TimeUnit.SECONDS.sleep(1);\n      } catch (InterruptedException e) {\n        throw new IllegalStateException(e);\n      }\n      return \"John\";\n    }).thenApply(name -> {\n      return \"Hello \" + name;\n    }).thenApply(greeting -> {\n      return greeting + \", Welcome to CompletableFuture\";\n    });\n    \n    try {\n      System.out.println(welcomeText.get());\n    } catch (InterruptedException | ExecutionException e) {\n      e.printStackTrace();\n    }\n    \n    // ThenAccept - consuming result\n    CompletableFuture.supplyAsync(() -> {\n      return \"Some result\";\n    }).thenAccept(result -> {\n      System.out.println(\"Received result: \" + result);\n    });\n    \n    // ThenRun - running after completion\n    CompletableFuture.supplyAsync(() -> {\n      return \"Some result\";\n    }).thenRun(() -> {\n      System.out.println(\"Task completed\");\n    });\n    \n    // Combining CompletableFutures\n    CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> {\n      return \"Hello\";\n    });\n    \n    CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> {\n      return \"World\";\n    });\n    \n    CompletableFuture<String> combined = future1.thenCombine(future2, (s1, s2) -> {\n      return s1 + \" \" + s2;\n    });\n    \n    try {\n      System.out.println(combined.get());\n    } catch (InterruptedException | ExecutionException e) {\n      e.printStackTrace();\n    }\n    \n    // Multiple futures with allOf\n    CompletableFuture<String> future3 = CompletableFuture.supplyAsync(() -> {\n      try {\n        TimeUnit.SECONDS.sleep(2);\n      } catch (InterruptedException e) {\n        throw new IllegalStateException(e);\n      }\n      return \"Future 3\";\n    });\n    \n    CompletableFuture<String> future4 = CompletableFuture.supplyAsync(() -> {\n      try {\n        TimeUnit.SECONDS.sleep(1);\n      } catch (InterruptedException e) {\n        throw new IllegalStateException(e);\n      }\n      return \"Future 4\";\n    });\n    \n    CompletableFuture<Void> allFutures = CompletableFuture.allOf(future3, future4);\n    \n    allFutures.thenRun(() -> {\n      try {\n        System.out.println(\"All futures completed: \" + future3.get() + \", \" + future4.get());\n      } catch (InterruptedException | ExecutionException e) {\n        e.printStackTrace();\n      }\n    });\n    \n    // Exception handling\n    CompletableFuture<String> exceptionalFuture = CompletableFuture.supplyAsync(() -> {\n      if (true) {\n        throw new RuntimeException(\"Exception occurred!\");\n      }\n      return \"Success\";\n    }).exceptionally(ex -> {\n      System.out.println(\"Exception: \" + ex.getMessage());\n      return \"Recovered value\";\n    });\n    \n    try {\n      System.out.println(exceptionalFuture.get());\n    } catch (InterruptedException | ExecutionException e) {\n      e.printStackTrace();\n    }\n    \n    // Wait for all operations to complete\n    try {\n      TimeUnit.SECONDS.sleep(5);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-56",
      "title": "Java Modules",
      "description": "Creating and using Java modules (JPMS)",
      "language": "java",
      "code": "// module-info.java (for com.example.app module)\n/*\nmodule com.example.app {\n    requires java.logging;\n    requires java.sql;\n    requires transitive com.example.utils;\n    \n    exports com.example.app.service;\n    exports com.example.app.model to com.example.client;\n    \n    opens com.example.app.internal to com.example.framework;\n    \n    uses com.example.spi.ServiceProvider;\n    provides com.example.spi.ServiceProvider with com.example.app.provider.MyServiceProvider;\n}\n*/\n\n// Example service interface in com.example.app module\npackage com.example.app.service;\n\npublic interface CalculatorService {\n    double add(double a, double b);\n    double subtract(double a, double b);\n}\n\n// Service implementation\npackage com.example.app.service;\n\npublic class BasicCalculatorService implements CalculatorService {\n    @Override\n    public double add(double a, double b) {\n        return a + b;\n    }\n    \n    @Override\n    public double subtract(double a, double b) {\n        return a - b;\n    }\n}\n\n// Service provider in another package\npackage com.example.app.provider;\n\nimport com.example.app.service.CalculatorService;\n\npublic class AdvancedCalculatorService implements CalculatorService {\n    @Override\n    public double add(double a, double b) {\n        return a + b;\n    }\n    \n    @Override\n    public double subtract(double a, double b) {\n        return a - b;\n    }\n    \n    public double multiply(double a, double b) {\n        return a * b;\n    }\n    \n    public double divide(double a, double b) {\n        if (b == 0) {\n            throw new ArithmeticException(\"Division by zero\");\n        }\n        return a / b;\n    }\n}\n\n// Main class using the module system\npackage com.example.app;\n\nimport com.example.app.service.CalculatorService;\nimport java.util.ServiceLoader;\n\npublic class ModuleApp {\n    public static void main(String[] args) {\n        System.out.println(\"Java Module System Example\");\n        \n        // Using ServiceLoader to load services\n        Iterable<CalculatorService> services = ServiceLoader.load(CalculatorService.class);\n        \n        for (CalculatorService service : services) {\n            System.out.println(\"Service: \" + service.getClass().getName());\n            System.out.println(\"5 + 3 = \" + service.add(5, 3));\n            System.out.println(\"5 - 3 = \" + service.subtract(5, 3));\n            \n            // Check if it's the advanced service\n            if (service instanceof com.example.app.provider.AdvancedCalculatorService) {\n                com.example.app.provider.AdvancedCalculatorService advancedService = \n                    (com.example.app.provider.AdvancedCalculatorService) service;\n                System.out.println(\"5 * 3 = \" + advancedService.multiply(5, 3));\n                System.out.println(\"6 / 3 = \" + advancedService.divide(6, 3));\n            }\n        }\n        \n        // Module information\n        Module appModule = ModuleApp.class.getModule();\n        System.out.println(\"\\nModule name: \" + appModule.getName());\n        System.out.println(\"Is named module: \" + appModule.isNamed());\n        \n        if (appModule.isNamed()) {\n            System.out.println(\"Descriptor: \" + appModule.getDescriptor());\n        }\n    }\n}"
    },
    {
      "id": "java-snippet-57",
      "title": "Java Security",
      "description": "Basic security operations in Java",
      "language": "java",
      "code": "import java.security.MessageDigest;\nimport java.security.NoSuchAlgorithmException;\nimport java.security.SecureRandom;\nimport java.util.Base64;\nimport javax.crypto.Cipher;\nimport javax.crypto.KeyGenerator;\nimport javax.crypto.SecretKey;\nimport javax.crypto.spec.GCMParameterSpec;\n\npublic class SecurityExample {\n  public static void main(String[] args) {\n    try {\n      // Hashing with SHA-256\n      String input = \"Hello, Security!\";\n      MessageDigest digest = MessageDigest.getInstance(\"SHA-256\");\n      byte[] hash = digest.digest(input.getBytes());\n      \n      System.out.println(\"Input: \" + input);\n      System.out.println(\"SHA-256 Hash: \" + bytesToHex(hash));\n      \n      // Base64 encoding/decoding\n      String original = \"Hello, Base64!\";\n      String encoded = Base64.getEncoder().encodeToString(original.getBytes());\n      String decoded = new String(Base64.getDecoder().decode(encoded));\n      \n      System.out.println(\"\\nOriginal: \" + original);\n      System.out.println(\"Encoded: \" + encoded);\n      System.out.println(\"Decoded: \" + decoded);\n      \n      // Generate random numbers\n      SecureRandom random = SecureRandom.getInstanceStrong();\n      byte[] randomBytes = new byte[16];\n      random.nextBytes(randomBytes);\n      \n      System.out.println(\"\\nRandom bytes: \" + bytesToHex(randomBytes));\n      \n      // AES encryption (simplified example)\n      KeyGenerator keyGen = KeyGenerator.getInstance(\"AES\");\n      keyGen.init(256);\n      SecretKey secretKey = keyGen.generateKey();\n      \n      Cipher cipher = Cipher.getInstance(\"AES/GCM/NoPadding\");\n      byte[] iv = new byte[12]; // 96 bits IV for GCM\n      random.nextBytes(iv);\n      \n      GCMParameterSpec parameterSpec = new GCMParameterSpec(128, iv);\n      \n      // Encryption\n      cipher.init(Cipher.ENCRYPT_MODE, secretKey, parameterSpec);\n      byte[] plaintext = \"Secret message\".getBytes();\n      byte[] ciphertext = cipher.doFinal(plaintext);\n      \n      System.out.println(\"\\nPlaintext: \" + new String(plaintext));\n      System.out.println(\"Ciphertext: \" + bytesToHex(ciphertext));\n      \n      // Decryption\n      cipher.init(Cipher.DECRYPT_MODE, secretKey, parameterSpec);\n      byte[] decryptedText = cipher.doFinal(ciphertext);\n      \n      System.out.println(\"Decrypted: \" + new String(decryptedText));\n      \n    } catch (Exception e) {\n      System.out.println(\"Security error: \" + e.getMessage());\n      e.printStackTrace();\n    }\n  }\n  \n  private static String bytesToHex(byte[] bytes) {\n    StringBuilder result = new StringBuilder();\n    for (byte b : bytes) {\n      result.append(String.format(\"%02x\", b));\n    }\n    return result.toString();\n  }\n}"
    },
    {
      "id": "java-snippet-58",
      "title": "Java Native Interface",
      "description": "Basic JNI example",
      "language": "java",
      "code": "public class JNIExample {\n  \n  // Load native library\n  static {\n    System.loadLibrary(\"nativeLibrary\");\n  }\n  \n  // Native method declarations\n  public native String getNativeMessage();\n  public native int addNumbers(int a, int b);\n  public native void printArray(int[] array);\n  \n  public static void main(String[] args) {\n    JNIExample example = new JNIExample();\n    \n    // Call native method\n    String message = example.getNativeMessage();\n    System.out.println(\"Native message: \" + message);\n    \n    // Call native method with parameters\n    int sum = example.addNumbers(5, 3);\n    System.out.println(\"5 + 3 = \" + sum);\n    \n    // Call native method with array\n    int[] numbers = {1, 2, 3, 4, 5};\n    example.printArray(numbers);\n  }\n}\n\n/*\n// Corresponding C code (nativeLibrary.c):\n#include <jni.h>\n#include <stdio.h>\n#include \"JNIExample.h\"\n\nJNIEXPORT jstring JNICALL Java_JNIExample_getNativeMessage(JNIEnv *env, jobject obj) {\n    return (*env)->NewStringUTF(env, \"Hello from Native Code!\");\n}\n\nJNIEXPORT jint JNICALL Java_JNIExample_addNumbers(JNIEnv *env, jobject obj, jint a, jint b) {\n    return a + b;\n}\n\nJNIEXPORT void JNICALL Java_JNIExample_printArray(JNIEnv *env, jobject obj, jintArray array) {\n    jsize length = (*env)->GetArrayLength(env, array);\n    jint *elements = (*env)->GetIntArrayElements(env, array, NULL);\n    \n    printf(\"Array from native code: \");\n    for (int i = 0; i < length; i++) {\n        printf(\"%d \", elements[i]);\n    }\n    printf(\"\\n\");\n    \n    (*env)->ReleaseIntArrayElements(env, array, elements, 0);\n}\n*/"
    },
    {
      "id": "java-snippet-59",
      "title": "Java Management Extensions",
      "description": "Using JMX for monitoring and management",
      "language": "java",
      "code": "import java.lang.management.ManagementFactory;\nimport javax.management.MBeanServer;\nimport javax.management.ObjectName;\n\n// MBean interface\ninterface SystemConfigMBean {\n  void setThreadCount(int threadCount);\n  int getThreadCount();\n  \n  void setSchemaName(String schemaName);\n  String getSchemaName();\n  \n  String doConfig();\n}\n\n// MBean implementation\nclass SystemConfig implements SystemConfigMBean {\n  private int threadCount = 10;\n  private String schemaName = \"default\";\n  \n  @Override\n  public void setThreadCount(int threadCount) {\n    this.threadCount = threadCount;\n  }\n  \n  @Override\n  public int getThreadCount() {\n    return threadCount;\n  }\n  \n  @Override\n  public void setSchemaName(String schemaName) {\n    this.schemaName = schemaName;\n  }\n  \n  @Override\n  public String getSchemaName() {\n    return schemaName;\n  }\n  \n  @Override\n  public String doConfig() {\n    return \"Config set to: ThreadCount=\" + threadCount + \", SchemaName=\" + schemaName;\n  }\n}\n\npublic class JMXExample {\n  public static void main(String[] args) {\n    try {\n      // Get the MBean server\n      MBeanServer mbs = ManagementFactory.getPlatformMBeanServer();\n      \n      // Create object name\n      ObjectName name = new ObjectName(\"com.example:type=SystemConfig\");\n      \n      // Create MBean and register it\n      SystemConfig mbean = new SystemConfig();\n      mbs.registerMBean(mbean, name);\n      \n      System.out.println(\"MBean registered. Use JConsole or VisualVM to connect.\");\n      System.out.println(\"Current config: \" + mbean.doConfig());\n      \n      // Keep the application running\n      System.out.println(\"Waiting for connections...\");\n      Thread.sleep(Long.MAX_VALUE);\n      \n    } catch (Exception e) {\n      System.out.println(\"JMX error: \" + e.getMessage());\n      e.printStackTrace();\n    }\n  }\n}"
    },
    {
      "id": "java-snippet-60",
      "title": "Java Flight Recorder",
      "description": "Using JFR for performance monitoring",
      "language": "java",
      "code": "import jdk.jfr.Configuration;\nimport jdk.jfr.FlightRecorder;\nimport jdk.jfr.consumer.RecordingStream;\nimport java.time.Duration;\nimport java.util.concurrent.TimeUnit;\n\npublic class JFRExample {\n  public static void main(String[] args) {\n    System.out.println(\"Java Flight Recorder Example\");\n    \n    // Check if Flight Recorder is available\n    if (!FlightRecorder.isAvailable()) {\n      System.out.println(\"Flight Recorder is not available\");\n      return;\n    }\n    \n    // List available configurations\n    System.out.println(\"\\nAvailable JFR configurations:\");\n    try {\n      for (Configuration config : Configuration.getConfigurations()) {\n        System.out.println(\"  \" + config.getName() + \" - \" + config.getDescription());\n      }\n    } catch (Exception e) {\n      System.out.println(\"Error getting configurations: \" + e.getMessage());\n    }\n    \n    // Start a recording\n    System.out.println(\"\\nStarting JFR recording for 30 seconds...\");\n    \n    try (RecordingStream rs = new RecordingStream()) {\n      // Enable specific events\n      rs.enable(\"jdk.CPULoad\").withPeriod(Duration.ofSeconds(1));\n      rs.enable(\"jdk.GarbageCollection\").withPeriod(Duration.ofSeconds(1));\n      rs.enable(\"jdk.JavaMonitorEnter\").withThreshold(Duration.ofMillis(10));\n      \n      // Add event handlers\n      rs.onEvent(\"jdk.CPULoad\", event -> {\n        System.out.printf(\"CPU Load: JVM=%.2f%%, System=%.2f%%%n\",\n            event.getFloat(\"jvmUser\") * 100 + event.getFloat(\"jvmSystem\") * 100,\n            event.getFloat(\"machineTotal\") * 100);\n      });\n      \n      rs.onEvent(\"jdk.GarbageCollection\", event -> {\n        System.out.printf(\"GC: %s, duration=%.2fms%n\",\n            event.getString(\"name\"),\n            event.getDuration(\"duration\").toMillis());\n      });\n      \n      rs.onEvent(\"jdk.JavaMonitorEnter\", event -> {\n        if (event.getDuration(\"duration\").toMillis() > 10) {\n          System.out.printf(\"Monitor contention: %s, duration=%.2fms%n\",\n              event.getString(\"monitorClass\"),\n              event.getDuration(\"duration\").toMillis());\n        }\n      });\n      \n      // Start the recording stream\n      rs.startAsync();\n      \n      // Generate some load\n      generateLoad();\n      \n      // Wait for a while\n      TimeUnit.SECONDS.sleep(30);\n      \n    } catch (Exception e) {\n      System.out.println(\"JFR error: \" + e.getMessage());\n      e.printStackTrace();\n    }\n    \n    System.out.println(\"JFR recording completed\");\n  }\n  \n  private static void generateLoad() {\n    // Start some threads to generate load\n    for (int i = 0; i < 5; i++) {\n      new Thread(() -> {\n        while (true) {\n          // Some computation\n          Math.sin(Math.random());\n          \n          // Occasionally sleep\n          if (Math.random() > 0.8) {\n            try {\n              Thread.sleep(10);\n            } catch (InterruptedException e) {\n              Thread.currentThread().interrupt();\n              break;\n            }\n          }\n        }\n      }).start();\n    }\n  }\n}"
    }
  ]
},

  /* JAVASCRIPT */

  /* WEB DEVELOPMENT */
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
