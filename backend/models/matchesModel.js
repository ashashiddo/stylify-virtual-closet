const pool = require('../db');

class Matches {
  static async createMatch(user_id, clothing_id) {
    try {
      const newMatch = await pool.query(
        'INSERT INTO matches (user_id, clothing_id) VALUES ($1, $2) RETURNING *',
        [user_id, clothing_id]
      );
      return newMatch.rows[0];
    } catch (error) {
      throw new Error('Error creating match');
    }
  }

  // Add other methods for handling matches here
}

module.exports = Matches;
