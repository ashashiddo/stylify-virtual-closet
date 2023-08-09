const express = require('express');
const router = express.Router();
const clothesController = require('../controllers/clothesController');

// Create a New Clothing Item
router.post('/', clothesController.createClothingItem);

// Fetch All Clothing Items for a User
router.get('/:userId', clothesController.getAllClothingItems);

// Fetch Single Clothing Item by ID
router.get('/item/:itemId', clothesController.getClothingItemById);

// Update Clothing Item by ID
router.put('/item/:itemId', clothesController.updateClothingItem);

// Delete Clothing Item by ID
router.delete('/item/:itemId', clothesController.deleteClothingItem);

module.exports = router;
