const pool = require('../db');

class ClothingItem {
  static async createClothingItem(userId, type, imageUrl) {
    try {
      const newClothingItem = await pool.query(
        'INSERT INTO clothing_items (user_id, type, image_url) VALUES ($1, $2, $3) RETURNING *',
        [userId, type, imageUrl]
      );
      return newClothingItem.rows[0];
    } catch (error) {
      throw new Error('Error creating clothing item');
    }
  }

  static async getClothingItems(userId) {
    try {
      const clothingItems = await pool.query(
        'SELECT * FROM clothing_items WHERE user_id = $1',
        [userId]
      );
      return clothingItems.rows;
    } catch (error) {
      throw new Error('Error fetching clothing items');
    }
  }

  static async getClothingItemById(itemId) {
    try {
      const clothingItem = await pool.query(
        'SELECT * FROM clothing_items WHERE id = $1',
        [itemId]
      );
      return clothingItem.rows[0];
    } catch (error) {
      throw new Error('Error fetching clothing item');
    }
  }

  static async updateClothingItem(itemId, type, imageUrl) {
    try {
      const updatedClothingItem = await pool.query(
        'UPDATE clothing_items SET type = $1, image_url = $2 WHERE id = $3 RETURNING *',
        [type, imageUrl, itemId]
      );
      return updatedClothingItem.rows[0];
    } catch (error) {
      throw new Error('Error updating clothing item');
    }
  }

  static async deleteClothingItem(itemId) {
    try {
      await pool.query('DELETE FROM clothing_items WHERE id = $1', [itemId]);
    } catch (error) {
      throw new Error('Error deleting clothing item');
    }
  }
}

module.exports = ClothingItem;
