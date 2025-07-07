import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Try to read .env file directly
try {
  const envPath = path.join(__dirname, '.env');
  console.log('Looking for .env file at:', envPath);
  
  if (fs.existsSync(envPath)) {
    console.log('.env file exists!');
    const envContents = fs.readFileSync(envPath, 'utf8');
    console.log('Contents of .env file:', envContents);
  } else {
    console.log('.env file not found at:', envPath);
  }
} catch (error) {
  console.error('Error reading .env file:', error);
}

// Load environment variables
dotenv.config();

// Email configuration from environment variables
const EMAIL_FROM = process.env.EMAIL_FROM || 'shoferps@gmail.com';
const EMAIL_TO = process.env.EMAIL_TO || 'shoferps@gmail.com';

// Verify environment variables
console.log('Environment variables loaded:', {
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? 'Password is set' : 'Password is missing',
  EMAIL_FROM: EMAIL_FROM,
  EMAIL_TO: EMAIL_TO,
  PORT: process.env.PORT || 'Using default port 3001'
});

if (!process.env.EMAIL_PASSWORD) {
  console.error('ERROR: EMAIL_PASSWORD is not set in .env file!');
  process.exit(1);
}

const app = express();

// Configure CORS for production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://nativeagency.info'  // Only allow requests from your domain in production
    : 'http://localhost:5173',     // Allow localhost in development
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(express.json());

// Create a transporter using Zoho Mail EU SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.eu',
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_FROM,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === 'production'  // Only verify SSL in production
  }
});

// Verify SMTP connection configuration
const verifyConnection = async () => {
  try {
    console.log('Verifying SMTP connection...');
    console.log('Environment:', process.env.NODE_ENV || 'development');
    console.log('Using email:', EMAIL_FROM);
    
    await transporter.verify();
    console.log('SMTP connection verified successfully!');
  } catch (error) {
    console.error('SMTP Connection failed:', error.message);
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);  // Exit in production if email setup fails
    }
  }
};

// Email endpoint
app.post('/api/book-meeting', async (req, res) => {
  const { name, email, company, phone, message } = req.body;

  try {
    // Email to business (sent from EMAIL_FROM to EMAIL_TO)
    console.log('Attempting to send business email...');
    const businessEmail = await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
              subject: 'New Meeting Booking Request from Website',
      html: `
                  <h2>New Meeting Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    console.log('Business email sent successfully:', businessEmail.messageId);

    // Confirmation email to user
    console.log('Attempting to send confirmation email...');
    const confirmationEmail = await transporter.sendMail({
      from: EMAIL_FROM,
      to: email,
      subject: 'Thank you for contacting NΛTIVE Agency',
      html: `
        <h2>Thank you for contacting NΛTIVE Agency</h2>
        <p>Dear ${name},</p>
        <p>We have received your meeting booking request and will get back to you shortly.</p>
        <p>Here's a summary of your request:</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Best regards,</p>
        <p>The NΛTIVE Agency Team</p>
      `
    });
    console.log('Confirmation email sent successfully:', confirmationEmail.messageId);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Detailed error information:', {
      message: error.message,
      code: error.code,
      command: error.command,
      stack: error.stack
    });
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;

// Verify SMTP connection before starting the server
verifyConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });
}); 