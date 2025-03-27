const fs = require("fs");

// List of questions
const questions = [
  "What is the purpose of the filter() function?",
  "How does filter() work in JavaScript?",
  "What does filter() return?",
  "What is the difference between filter() and map()?",
  "How can you use filter() to remove falsy values from an array?",
  "Can filter() modify the original array?",
  "How does filter() behave with an array containing undefined values?",
  "How do you filter an array of objects based on a specific property value?",
  "How can you use filter() to remove duplicate values from an array?",
  "What happens if filter() doesn’t find any matching elements?",
  "How can you combine filter() and map() together?",
  "What is the time complexity of filter()?"
];

// Function to sanitize filenames (remove illegal characters)
const sanitizeFilename = (name) => {
  return name.replace(/[<>:"/\\|?*]/g, "");
};

// Create Markdown files
questions.forEach((question, index) => {
  const number = (index + 20).toString().padStart(2, "0"); // Format as two-digit number
  const filename = `${number}. ${sanitizeFilename(question)}.md`;

  fs.writeFileSync(filename, `# ${question}\n\n`, "utf8");
  console.log(`Created: ${filename}`);
});

console.log("All files created successfully.");
