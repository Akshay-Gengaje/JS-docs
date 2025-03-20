const fs = require("fs");

// List of questions
const questions = [
  "What is a closure in JavaScript?",
  "How do closures work in JavaScript?",
  "Can you give a simple example of a closure?",
  "Why do we use closures?",
  "What are the advantages of using closures?",
  "Are closures the same as lexical scope?",
  "What is the difference between a closure and a normal function?",
  "How does a closure help in data encapsulation?",
  "What is the scope chain, and how is it related to closures?",
  "How do closures interact with global and local scope?"
];

// Function to sanitize filenames (remove illegal characters)
const sanitizeFilename = (name) => {
  return name.replace(/[<>:"/\\|?*]/g, "");
};

// Create Markdown files
questions.forEach((question, index) => {
  const number = (index + 1).toString().padStart(2, "0"); // Format as two-digit number
  const filename = `${number}. ${sanitizeFilename(question)}.md`;

  fs.writeFileSync(filename, `# ${question}\n\n`, "utf8");
  console.log(`Created: ${filename}`);
});

console.log("All files created successfully.");
