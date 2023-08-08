const express = require('express');
const router = express.Router();
const ClothingItem = require('../models/ClothingItem');

// Create a New Clothing Item
router.post('/', async (req, res) => {
  try {
    const { userId, type, imageUrl } = req.body;

    // Create the clothing item in the database
    const newClothingItem = await ClothingItem.createClothingItem(
      userId,
      type,
      imageUrl
    );

    res.json(newClothingItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add more clothing item-related API endpoints (e.g., get all clothing items, delete clothing item, etc.)

module.exports = router;
