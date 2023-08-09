const pool = require('../db');

class UserModel {
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

  static async findUserById(user_id) {
    try {
      const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [user_id]);
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

  static async updateUserProfile(user_id, username, email) {
    try {
      const updatedUser = await pool.query(
        'UPDATE users SET username = $1, email = $2 WHERE user_id = $3 RETURNING *',
        [username, email, user_id]
      );
      return updatedUser.rows[0];
    } catch (error) {
      throw new Error('Error updating user profile');
    }
  }
}

module.exports = UserModel;
