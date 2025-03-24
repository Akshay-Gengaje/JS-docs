const fs = require("fs");

// List of questions
const questions = [
  "What are higher-order functions in JavaScript?",
  "How do higher-order functions improve code reusability and readability?",
  "Can you provide an example of a higher-order function?",
  "How do higher-order functions differ from first-class functions?",
  "How do closures relate to higher-order functions?",
  "What are some real-world use cases of higher-order functions?",
  "What are the advantages and disadvantages of using higher-order functions?",
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
