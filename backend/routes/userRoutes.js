const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// User Registration
router.post('/register', usersController.registerUser);

// User Login
router.post('/login', usersController.loginUser);

// Fetch User Profile
router.get('/profile/:userId', usersController.getUserProfile);

// Update User Profile
router.put('/profile/:userId', usersController.updateUserProfile);

module.exports = router;
