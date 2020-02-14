require('dotenv').config();
const express = require('express');
const path = require('path');
const sendMail = require('./mail.js');

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
  const { subject, email, text } = req.body;

  console.log('Data: ', req.body);

  //should probably make sure the user sends me the right format b4 doind this
  sendMail(email, subject, text, function(err, data) {
    if (err) {
      console.log('ERROR ', err);
      return res.status(500).json({ message: err.message || 'Internal error' });
    } else {
      console.log('email sent!');
      return res.json({ message: 'email sent!' });
    }
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.get('/email/sent', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'emailMessage.html'));
});

app.listen(PORT, () => {
  console.log('server starting on PORT, ', 3333);
});
