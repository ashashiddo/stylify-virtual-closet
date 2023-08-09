const express = require('express');
const router = express.Router();
const MatchesController = require('../controllers/matchesController');

// Create a match
router.post('/', async (req, res) => {
  try {
    const { user_id, clothing_id } = req.body;

    const newMatch = await MatchesController.createMatch(user_id, clothing_id);

    res.json(newMatch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add other routes for handling matches here

module.exports = router;
