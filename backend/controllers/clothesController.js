const express = require('express');
const router = express.Router();
const ClothingItem = require('../models/ClothingItem');

// Create a New Clothing Item
router.post('/', async (req, res) => {
  try {
    const { user_id, type, imageUrl } = req.body;

    const newClothingItem = await ClothingItem.createClothingItem(user_id, type, imageUrl);

    res.json(newClothingItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Fetch All Clothing Items for a User
router.get('/:user_id', async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const clothingItems = await ClothingItem.getClothingItems(user_id);

    res.json(clothingItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Fetch Single Clothing Item by ID
router.get('/item/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const clothingItem = await ClothingItem.getClothingItemById(itemId);

    if (!clothingItem) {
      return res.status(404).json({ error: 'Clothing item not found' });
    }

    res.json(clothingItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update Clothing Item by ID
router.put('/item/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const { type, imageUrl } = req.body;

    const updatedClothingItem = await ClothingItem.updateClothingItem(itemId, type, imageUrl);

    res.json(updatedClothingItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete Clothing Item by ID
router.delete('/item/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;

    await ClothingItem.deleteClothingItem(itemId);

    res.json({ message: 'Clothing item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
