const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

require('dotenv').config();

//got auth information on mailGun website
const auth = {
  auth: {
    api_key: process.env.API_KEY || 'MAIL_GUN_API_KEY',
    domain: process.env.DOMAIN || 'MAIL_GUN_DOMAIN'
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: 'gussstavo95@gmail.com',
    to: email,
    subject,
    text
    /*
    attachments: [
      {
        filename: 'pic.JPG',
        path: './pic.JPG'
      }
    ]
    */
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
/*
  const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
*/
