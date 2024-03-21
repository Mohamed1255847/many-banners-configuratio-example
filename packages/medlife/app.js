// app.js

// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello, Node Moon with Express!');
});

// Define the port to listen on
const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Medlife Server running at http://localhost:${port}/`);
});
