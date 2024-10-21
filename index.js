require('dotenv').config();
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');

// Log to verify environment variables
console.log('Email ID:', process.env.EMAIL_ID);
console.log('Email Password:', process.env.EMAIL_PASSWORD);

// Generate OTP
const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Email options
const mailOptions = {
  from: process.env.EMAIL_ÌD,
  to: 'enter reciver email',
  subject: 'Your OTP Code',
  text: `Your OTP code is ${otp}`,
};

// Send email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log('Error occurred while sending OTP:', error);
  } else {
    console.log('OTP sent successfully:', info.response);
    console.log('OTP:', otp);
  }
});
