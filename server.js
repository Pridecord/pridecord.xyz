const express = require('express');
const path = require('path');
const app = express();

// Serve static assets from /public (adjust if your folder is different)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve only allowed pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/rules', (req, res) => {
  res.sendFile(path.join(__dirname, 'rules.html'));
});

// Add more allowed routes here as needed

// All other requests: 403 Forbidden
app.use((req, res) => {
  res.status(403).send('403 Forbidden');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
console.warn('This server is for development purposes only. Do not use otherwise.');