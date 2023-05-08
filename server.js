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

// Serve static files with correct MIME types
app.use(express.static('public', {
  setHeaders: function(res, path) {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'text/javascript');
    } else if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
