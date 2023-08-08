const pool = require('../db');

class User {
  static async createUser(username, email, password) {
    try {
      const newUser = await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, password]
      );
      return newUser.rows[0];
    } catch (error) {
      throw new Error('Error creating user');
    }
  }


}

module.exports = User;
