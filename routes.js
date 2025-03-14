const express = require('express');
const { addEvent, getEvents, getEventsByCategory } = require('./events');
const { registerUser, loginUser } = require('./users');

const router = express.Router();

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    res.json({ message: registerUser(username, password) });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.json({ message: loginUser(username, password) });
});

router.post('/events', (req, res) => {
    const { name, description, date, time, category, reminder } = req.body;
    res.json(addEvent(name, description, date, time, category, reminder));
});

router.get('/events', (req, res) => {
    res.json(getEvents());
});

router.get('/events/:category', (req, res) => {
    res.json(getEventsByCategory(req.params.category));
});

module.exports = router;
