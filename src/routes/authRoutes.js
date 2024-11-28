const express = require('express');
const { login } = require('../controllers/authController');
const { signup } = require('../controllers/authController'); // Import the signup controller

const router = express.Router();

router.post('/login', login);

// Signup route
router.post('/signup', signup);

module.exports = router;
