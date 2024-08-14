const express = require('express');
const path = require('path');
const timeCheck = require('./middleware/timeCheck');

const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname,
  'public')));


// Apply time check middleware
app.use(timeCheck);

// Routes
app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(port, () => {
  console.log(`Server   
 listening on port ${port}`);
});