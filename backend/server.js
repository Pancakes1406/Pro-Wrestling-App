const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Sample data
let wrestlers = [];
let events = [];
let matches = [];

// Routes for wrestlers
app.get('/wrestlers', (req, res) => {
    res.json(wrestlers);
});

app.post('/wrestlers', (req, res) => {
    const wrestler = req.body;
    wrestlers.push(wrestler);
    res.status(201).json(wrestler);
});

// Routes for events
app.get('/events', (req, res) => {
    res.json(events);
});

app.post('/events', (req, res) => {
    const event = req.body;
    events.push(event);
    res.status(201).json(event);
});

// Routes for matches
app.get('/matches', (req, res) => {
    res.json(matches);
});

app.post('/matches', (req, res) => {
    const match = req.body;
    matches.push(match);
    res.status(201).json(match);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
