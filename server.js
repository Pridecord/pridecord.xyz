const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Custom routes for specific pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/rules', (req, res) => {
  res.sendFile(path.join(__dirname, 'rules.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// API routes
app.use('/api', require('./api/login'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));