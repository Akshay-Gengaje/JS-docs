const fs = require("fs");

// List of questions
const questions = [
  "What is the difference between call(), apply(), and bind()?",
  "How does function scope work in JavaScript?",
  "What is lexical scope in JavaScript?",
  "What is closure in JavaScript? Can you give an example?",
  "How can closures be used in JavaScript?",
  "What are immediately invoked function expressions (IIFE)?",
  "What is currying in JavaScript? Provide an example.",
  "What is memoization, and how does it improve function performance?",
  "What is a recursive function? Can you write an example?",
  "What is the difference between synchronous and asynchronous functions?",
  "What is an async function, and how does async/await work?",
  "How do generators (function*) work in JavaScript?",
  "How do you handle errors in async functions?",
  "What is debouncing and throttling? How are they used?",
  "What is partial application in JavaScript?",
  "What is a factory function?",
  "What is monkey patching, and should you use it?"
];

// Function to sanitize filenames (remove illegal characters)
const sanitizeFilename = (name) => {
  return name.replace(/[<>:"/\\|?*]/g, "");
};

// Create Markdown files
questions.forEach((question, index) => {
  const number = (index + 19).toString().padStart(2, "0"); // Format as two-digit number
  const filename = `${number}. ${sanitizeFilename(question)}.md`;

  fs.writeFileSync(filename, `# ${question}\n\n`, "utf8");
  console.log(`Created: ${filename}`);
});

console.log("All files created successfully.");
