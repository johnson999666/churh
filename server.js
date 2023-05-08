// Import dependencies
const express = require('express');
const path = require('path');

// Create Express app
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the path to the views folder
app.set('views', path.join(__dirname, 'views'));

// Define a route for the home page
app.get('/', (req, res) => {
  // Render the index.ejs file
  res.render('index');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
