const fs = require("fs");

// List of questions
const questions = [
  "What are IIFEs (Immediately Invoked Function Expressions), and how do they use closures?",
  "Can you explain the classic for loop closure issue and how to fix it?",
  "How do closures work inside JavaScript classes?",
  "What is the difference between closures and the this keyword?",
  "How do closures work in map(), filter(), and reduce() functions?",
  "Can closures be used to create a singleton pattern in JavaScript?",
  "How can closures be used to implement a module pattern?",
  "What is a lexical environment, and how does it relate to closures?",
  "How do closures affect garbage collection in JavaScript?",
  "Can you explain how closures help in function composition?",
  "How do closures behave in asynchronous JavaScript (Promises, async/await)?",
  "Can closures be used to memoize functions? Provide an example.",
  "How can closures be used to throttle or debounce functions?",
  "What is the difference between a closure and a block scope?",
  "How do closures work in functional programming concepts?"
];

// Function to sanitize filenames (remove illegal characters)
const sanitizeFilename = (name) => {
  return name.replace(/[<>:"/\\|?*]/g, "");
};

// Create Markdown files
questions.forEach((question, index) => {
  const number = (index + 21).toString().padStart(2, "0"); // Format as two-digit number
  const filename = `${number}. ${sanitizeFilename(question)}.md`;

  fs.writeFileSync(filename, `# ${question}\n\n`, "utf8");
  console.log(`Created: ${filename}`);
});

console.log("All files created successfully.");
