const express = require('express');
const router = express.Router();
const authController = require('../controllers/registerController');

router.get('/user', (req, res) => {
        res.send('/register/user route');
    });

router.post('/professional', (req, res) => {
        res.send('/register/professional route');
    });

module.exports = router;