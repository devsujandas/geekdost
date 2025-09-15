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
