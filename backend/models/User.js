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

  static async findUserById(userId) {
    try {
      const user = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
      return user.rows[0];
    } catch (error) {
      throw new Error('Error fetching user');
    }
  }

  static async findUserByEmail(email) {
    try {
      const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      return user.rows[0];
    } catch (error) {
      throw new Error('Error fetching user by email');
    }
  }

  static async updateUserProfile(userId, username, email) {
    try {
      const updatedUser = await pool.query(
        'UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *',
        [username, email, userId]
      );
      return updatedUser.rows[0];
    } catch (error) {
      throw new Error('Error updating user profile');
    }
  }
}

module.exports = User;
