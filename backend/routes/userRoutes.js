const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usersController');

// User Registration
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = await UserController.createUser(username, email, password);

    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// User Login
// Implement your login logic here

// Fetch User Profile
// Implement your fetch user profile logic here

// Update User Profile
// Implement your update user profile logic here

module.exports = router;

