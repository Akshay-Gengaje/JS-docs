const fs = require("fs");

// List of questions
const questions = [
  "What is function composition?",
  "How do JavaScript functions behave as first-class citizens?",
  "What is the difference between prototype methods and function methods?",
  "How do you optimize function performance in JavaScript?",
  "What is tail call optimization, and how does JavaScript handle it?",
  "How does JavaScript handle function context (this)?",
  "How can you implement a custom debounce function?",
  "How can you implement a custom throttle function?",
  "What is event delegation, and how does it relate to functions?",
  "What is the difference between imperative and declarative function styles?",
  "What is function arity?",
  "What are named vs unnamed function expressions?",
  "How do you create a function that only runs once (once function)?",
  "What is method chaining, and how is it implemented?",
  "What is the difference between private and public functions in JavaScript?",
  "What is the difference between var, let, and const when declaring functions?",
  "What is tail recursion, and does JavaScript support it?",
  "How does JavaScript handle infinite recursion?",
  "How does Promise chaining work?",
  "How do you create a polyfill for bind()?",
  "How do you implement a polyfill for call() and apply()?",
  "How do function decorators work in JavaScript?",
  "How does the new keyword affect functions?",
  "What are function mixins, and how are they used?",
  "How can you implement a lazy evaluation function?"
];

// Function to sanitize filenames (remove illegal characters)
const sanitizeFilename = (name) => {
  return name.replace(/[<>:"/\\|?*]/g, "");
};

// Create Markdown files
questions.forEach((question, index) => {
  const number = (index + 36).toString().padStart(2, "0"); // Format as two-digit number
  const filename = `${number}. ${sanitizeFilename(question)}.md`;

  fs.writeFileSync(filename, `# ${question}\n\n`, "utf8");
  console.log(`Created: ${filename}`);
});

console.log("All files created successfully.");
