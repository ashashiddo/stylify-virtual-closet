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

  // Add more methods for clothing item-related operations
}

module.exports = ClothingItem;
