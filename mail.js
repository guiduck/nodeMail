const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

require('dotenv').config();

//got auth information on mailGun website
const auth = {
  auth: {
    api_key: '52f7fdb6a8fecd802d12bcb6915aefd9-52b6835e-2e0ba181',
    domain: 'sandboxd769c72574e44cce8ac4de84aee413ba.mailgun.org'
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
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
    console.log('Mail sent!');
  }
});
/*
  const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
*/
