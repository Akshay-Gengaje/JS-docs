const fs = require("fs");

// List of questions
const questions = [
  "What is the purpose of the map() function?",
  "How does map() work in JavaScript?",
  "What does map() return?",
  "What is the difference between map() and a for loop?",
  "How can you use map() to transform an array of numbers by doubling each value?",
  "Can map() modify the original array?",
  "How does map() handle empty slots in an array?",
  "Can you use map() with an object instead of an array?",
  "What happens if you return undefined inside map()?",
  "How would you use map() to extract specific properties from an array of objects?",
  "How does map() behave when used with async functions?",
  "What is the time complexity of map()?"
];

// Function to sanitize filenames (remove illegal characters)
const sanitizeFilename = (name) => {
  return name.replace(/[<>:"/\\|?*]/g, "");
};

// Create Markdown files
questions.forEach((question, index) => {
  const number = (index + 8).toString().padStart(2, "0"); // Format as two-digit number
  const filename = `${number}. ${sanitizeFilename(question)}.md`;

  fs.writeFileSync(filename, `# ${question}\n\n`, "utf8");
  console.log(`Created: ${filename}`);
});

console.log("All files created successfully.");
