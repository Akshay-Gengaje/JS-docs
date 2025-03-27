const fs = require('fs');
const path = require('path');

// Get the current directory
const directoryPath = __dirname;

// Read all files in the directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        // Check if the file is a Markdown file
        if (path.extname(file) === '.md') {
            const newFileName = file.replace(/\s+/g, '_');
            
            // Rename the file if needed
            if (newFileName !== file) {
                fs.rename(path.join(directoryPath, file), path.join(directoryPath, newFileName), (err) => {
                    if (err) {
                        console.error(`Error renaming file ${file}:`, err);
                    } else {
                        console.log(`Renamed: ${file} -> ${newFileName}`);
                    }
                });
            }
        }
    });
});
