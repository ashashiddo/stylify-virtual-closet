const pool = require('../db');

class ClothingItem {
  static async createClothingItem(user_id, image_url, name, description, category_id) {
    try {
      const newClothingItem = await pool.query(
        'INSERT INTO Clothing (user_id, image_url, name, description, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [user_id, image_url, name, description, category_id]
      );
      return newClothingItem.rows[0];
    } catch (error) {
      throw new Error('Error creating clothing item');
    }
  }

  static async getClothingItemsByUser(user_id) {
    try {
      const clothingItems = await pool.query(
        'SELECT * FROM Clothing WHERE user_id = $1',
        [user_id]
      );
      return clothingItems.rows;
    } catch (error) {
      throw new Error('Error fetching clothing items');
    }
  }

  static async getClothingItemById(clothing_id) {
    try {
      const clothingItem = await pool.query(
        'SELECT * FROM Clothing WHERE clothing_id = $1',
        [clothing_id]
      );
      return clothingItem.rows[0];
    } catch (error) {
      throw new Error('Error fetching clothing item');
    }
  }

  static async updateClothingItem(clothing_id, image_url, name, description, category_id) {
    try {
      const updatedClothingItem = await pool.query(
        'UPDATE Clothing SET image_url = $1, name = $2, description = $3, category_id = $4 WHERE clothing_id = $5 RETURNING *',
        [image_url, name, description, category_id, clothing_id]
      );
      return updatedClothingItem.rows[0];
    } catch (error) {
      throw new Error('Error updating clothing item');
    }
  }

  static async deleteClothingItem(clothing_id) {
    try {
      await pool.query('DELETE FROM Clothing WHERE clothing_id = $1', [clothing_id]);
    } catch (error) {
      throw new Error('Error deleting clothing item');
    }
  }
}

module.exports = ClothingItem;
