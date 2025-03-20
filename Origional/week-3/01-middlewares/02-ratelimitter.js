const express = require('express');
const app = express();

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

app.use((req, res, next) => {
    const userId = req.headers['user-id']; // Correct way to access header

    if (!userId) {
        return res.status(400).send('User ID required');
    }

    numberOfRequestsForUser['user-id'] = (numberOfRequestsForUser[userId] || 0) + 1;

    if (numberOfRequestsForUser[userId] > 5) {
        return res.status(404).send('Too many requests');
    }

    next();
});

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
