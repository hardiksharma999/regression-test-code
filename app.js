const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON

let lastResponse = null; // Variable to hold the last response

// Endpoint to check the integer
app.post('/check', (req, res) => {
    const integer = req.body.integer;
    const status = integer < 100 ? 'low' : 'high';
    lastResponse = { integer, status };
    res.json(lastResponse);
});

// Endpoint to get the latest response
app.get('/latest', (req, res) => {
    res.json(lastResponse);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
