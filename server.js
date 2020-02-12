require("dotenv").config();

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

let mailOptions = {
  from: "guiduck02@gmail.com",
  to: "gussstavo95@gmail.com",
  subject: "nnodemailer test",
  text: "fuck me in the ass daddy please"
};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("error occurs:", err);
  } else {
    console.log("Email sent!");
  }
});
