const ClothingItem = require('../models/ClothingItem');

class ClothesController {
  static async createClothingItem(req, res) {
    try {
      const { user_id, type, imageUrl } = req.body;
      const newClothingItem = await ClothingItem.createClothingItem(user_id, type, imageUrl);
      res.json(newClothingItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }

  static async getClothingItems(req, res) {
    try {
      const user_id = req.params.user_id;
      const clothingItems = await ClothingItem.getClothingItems(user_id);
      res.json(clothingItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }

  static async getClothingItemById(req, res) {
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
  }

  static async updateClothingItem(req, res) {
    try {
      const itemId = req.params.itemId;
      const { type, imageUrl } = req.body;

      const updatedClothingItem = await ClothingItem.updateClothingItem(itemId, type, imageUrl);

      res.json(updatedClothingItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }

  static async deleteClothingItem(req, res) {
    try {
      const itemId = req.params.itemId;
      await ClothingItem.deleteClothingItem(itemId);
      res.json({ message: 'Clothing item deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }
}

module.exports = ClothesController;
