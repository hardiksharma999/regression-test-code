// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the form
app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <label for="integer">Enter an integer:</label>
            <input type="number" id="integer" name="integer" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle form submission
app.post('/submit', (req, res) => {
    const integerValue = req.body.integer;

    let status = 'low';
    if (integerValue >= 100) {
        status = 'high';
    }

    res.json({ integer: integerValue, status: status });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
