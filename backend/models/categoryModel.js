const pool = require('../db');

class CategoryCloth {
  static async createCategoryCloth(clothingItemId, category) {
    try {
      const newCategoryCloth = await pool.query(
        'INSERT INTO category_cloths (clothing_item_id, category) VALUES ($1, $2) RETURNING *',
        [clothingItemId, category]
      );
      return newCategoryCloth.rows[0];
    } catch (error) {
      throw new Error('Error creating category cloth');
    }
  }

  static async getClothingItemsByCategory(category) {
    try {
      const clothingItems = await pool.query(
        'SELECT * FROM clothing_items ci JOIN category_cloths cc ON ci.id = cc.clothing_item_id WHERE cc.category = $1',
        [category]
      );
      return clothingItems.rows;
    } catch (error) {
      throw new Error('Error fetching clothing items by category');
    }
  }
}

module.exports = CategoryCloth;
