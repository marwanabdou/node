const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

const mailOptions = {
  from: 'youremail@gmail.com',
  to: 'youremail@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
