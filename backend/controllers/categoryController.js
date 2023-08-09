const ClothingItem = require('../models/ClothingItem');

class CategoryClothsController {
  static async getClothingItemsByCategory(req, res) {
    try {
      const category = req.params.category;
      const clothingItems = await ClothingItem.getClothingItemsByCategory(category);
      res.json(clothingItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }
}

module.exports = CategoryClothsController;
