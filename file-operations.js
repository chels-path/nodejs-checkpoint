// file-operations.js
const fs = require('fs');

// Create welcome.txt with content
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('welcome.txt has been created successfully!');
    
    // Read and console.log from hello.txt
    fs.readFile('hello.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading hello.txt:', err.message);
        } else {
            console.log('Content of hello.txt:', data);
        }
    });
});
