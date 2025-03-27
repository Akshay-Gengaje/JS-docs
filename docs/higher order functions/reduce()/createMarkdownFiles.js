const fs = require("fs");

// List of questions
const questions = [
  "What is the purpose of the reduce() function?",
  "How does reduce() work in JavaScript?",
  "What does reduce() return?",
  "What are the parameters of the reduce() function?",
  "How does the initial value affect reduce()?",
  "What happens if the initial value is not provided in reduce()?",
  "How would you use reduce() to find the sum of all elements in an array?",
  "How can you use reduce() to flatten a nested array?",
  "Can reduce() be used to implement map() or filter()?",
  "How can reduce() be used to count occurrences of elements in an array?",
  "How do you use reduce() to group elements in an array by a property?",
  "What are some common mistakes when using reduce()?",
  "How can reduce() be used to implement a left-fold or right-fold operation?",
  "What is the time complexity of reduce()?",
];

// Function to sanitize filenames (remove illegal characters)
const sanitizeFilename = (name) => {
  return name.replace(/[<>:"/\\|?*]/g, "");
};

// Create Markdown files
questions.forEach((question, index) => {
  const number = (index + 32).toString().padStart(2, "0"); // Format as two-digit number
  const filename = `${number}. ${sanitizeFilename(question)}.md`;

  fs.writeFileSync(filename, `# ${question}\n\n`, "utf8");
  console.log(`Created: ${filename}`);
});

console.log("All files created successfully.");
