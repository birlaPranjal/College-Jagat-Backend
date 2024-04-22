const nodemailer = require('nodemailer');

// Create transporter instance
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // Gmail SMTP server
    port: process.env.EMAIL_PORT, // Port for TLS/STARTTLS
    secure: false, // Set to true for SSL, false for TLS/STARTTLS
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail email address
        pass: process.env.EMAIL_PASS, // App-specific password generated for your Gmail account
    },
});

// Function to send feedback email
exports.sendFeedbackEmail = async (name, email, feedbackType, message) => {
    const mailOptions = {
        from: 'birlapranjal420@gmail.com', // Sender email address
        to: ['birlapranjal460@gmail.com', 'pranjalbcse2283@svvv.edu.in'], // Recipient email address
        subject: 'Feedback Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nFeedback Type: ${feedbackType}\nMessage: ${message}`,
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Feedback email sent successfully');
    } catch (error) {
        console.error('Error sending feedback email:', error);
        throw new Error('Failed to send feedback email');
    }
};
    
// Function to submit contact form
exports.submitContact = async (name, email, message) => {
    try {
        // Send contact email
        await transporter.sendMail({
            from: 'birlapranjal420@gmail.com', // Sender email address
            to: ['birlapranjal460@gmail.com','pranjalbcse2283@svvv.edu.in'] ,// Recipient email address
            subject: 'Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });
        console.log('Contact email sent successfully');
    } catch (error) {
        console.error('Error sending feedback email:', error);
        throw new Error('Failed to send feedback email');
    }


};
