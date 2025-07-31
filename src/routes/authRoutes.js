const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', (req, res) => {
        res.send('Login route');
    });

router.post('/logout', (req, res) => {
        res.send('Logout route');
    });

module.exports = router;
