const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Registration
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    // You can implement this logic based on your database schema

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const newUser = await User.createUser(username, email, hashedPassword);

    // Create and return a JWT token
    const token = jwt.sign({ userId: newUser.id }, 'your-secret-key');

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add more user-related API endpoints (e.g., login, get user profile, etc.)

module.exports = router;
