const fs = require("fs");

// List of questions
const questions = [
  "What will be the output of console.log(typeof function() {});?",
  "What is the output of?",
  "What is the difference between setTimeout and setImmediate?",
  "How does function execution order work in Event Loop?",
  "What happens when you define a function inside a loop?",
  "What are anonymous self-executing functions?",
  "How do you determine the arity of a function?",
  "How does JavaScript handle stack overflow with recursive functions?",
  "What happens if a function has two return statements?",
  "How does function binding work with setTimeout and this?",
  "How does the new keyword affect function execution?",
  "How does JavaScript handle function execution in strict mode?",
  "How does the super keyword work in functions?",
  "Can you create private functions in JavaScript?",
  "What is a proxy function, and how do you use it?",
  "What happens if you call bind() twice on a function?",
  "How does eval() work with functions?",
  "What is the use of Function.prototype.toString()?",
  "Can functions be serialized in JavaScript?",
  "What is the difference between typeof function and instanceof Function?"
];

// Function to sanitize filenames (remove illegal characters)
const sanitizeFilename = (name) => {
  return name.replace(/[<>:"/\\|?*]/g, "");
};

// Create Markdown files
questions.forEach((question, index) => {
  const number = (index + 61).toString().padStart(2, "0"); // Format as two-digit number
  const filename = `${number}. ${sanitizeFilename(question)}.md`;

  fs.writeFileSync(filename, `# ${question}\n\n`, "utf8");
  console.log(`Created: ${filename}`);
});

console.log("All files created successfully.");
