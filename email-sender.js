// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter using Gmail (you'll need to use an app password)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-app-password'     // Replace with your app password
    }
});

// Email options
const mailOptions = {
    from: 'your-email@gmail.com',      // Sender address
    to: 'recipient-email@gmail.com',   // List of recipients
    subject: 'Test Email from Node.js', // Subject line
    text: 'Hello! This is a test email sent from my Node.js application!',
    html: '<h1>Hello!</h1><p>This is a test email sent from my Node.js application!</p>'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error);
    } else {
        console.log('Email sent successfully!');
        console.log('Message ID:', info.messageId);
    }
});
