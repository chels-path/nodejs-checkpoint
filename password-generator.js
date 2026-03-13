// password-generator.js
const generator = require('generate-password');

// Function to generate random passwords
function generateRandomPassword() {
    const password = generator.generate({
        length: 12,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
        excludeSimilarCharacters: true
    });
    
    console.log('Generated Password:', password);
    return password;
}

// Generate multiple passwords
function generateMultiplePasswords(count) {
    console.log(`Generating ${count} random passwords:`);
    for (let i = 0; i < count; i++) {
        const password = generator.generate({
            length: 10,
            numbers: true,
            symbols: false
        });
        console.log(`Password ${i + 1}:`, password);
    }
}

// Generate and display a single password
generateRandomPassword();

// Uncomment to generate multiple passwords
// generateMultiplePasswords(5);
