require('dotenv').config();

const nodemailer = require('nodemailer');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3333;

//get data from html
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());

app.post('/email', (req, res) => {
  //will send mail here
  console.log('Data', req.body);
  res.json({ message: 'email route response message boy' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
  console.log('server starting on port, ', 3333);
});

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

let mailOptions = {
  from: 'guiduck02@gmail.com',
  to: 'gussstavo95@gmail.com',
  subject: 'nnodemailer test',
  text: 'fuck me in the ass daddy please',
  attachments: [
    {
      filename: 'pic.JPG',
      path: './pic.JPG'
    }
  ]
};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log('error occurs:', err);
  } else {
    console.log('Email sent!');
  }
});
