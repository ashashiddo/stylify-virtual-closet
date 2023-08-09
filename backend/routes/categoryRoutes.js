const express = require('express');
const router = express.Router();
const CategoryClothsController = require('../controllers/categoryClothsController');

// Fetch Clothing Items by Category
router.get('/:category', CategoryClothsController.getClothingItemsByCategory);

module.exports = router;
