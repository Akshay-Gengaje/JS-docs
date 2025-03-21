const fs = require("fs");

// List of questions
const questions = [
  "How can closures be used to create private variables?",
  "How do closures retain access to variables outside their function scope?",
  "What are some practical use cases of closures in JavaScript?",
  "How do closures help in event handling?",
  "Can you explain how closures are used in callback functions?",
  "What happens when you return a function inside another function?",
  "Can you demonstrate a closure with a counter function?",
  "Why do closures cause memory leaks, and how can we avoid them?",
  "What is the role of closures in JavaScript timers (setTimeout, setInterval)?",
  "How does a closure help in currying functions?",
];

// Function to sanitize filenames (remove illegal characters)
const sanitizeFilename = (name) => {
  return name.replace(/[<>:"/\\|?*]/g, "");
};

// Create Markdown files
questions.forEach((question, index) => {
  const number = (index + 11).toString().padStart(2, "0"); // Format as two-digit number
  const filename = `${number}. ${sanitizeFilename(question)}.md`;

  fs.writeFileSync(filename, `# ${question}\n\n`, "utf8");
  console.log(`Created: ${filename}`);
});

console.log("All files created successfully.");
