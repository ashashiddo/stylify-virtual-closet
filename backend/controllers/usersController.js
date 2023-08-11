const pool = require('../db/database');

 const createUser = async (req, res) => {
    try {
      const newUser = await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, password]
      );
      return newUser.rows[0];
    } catch (error) {
      throw new Error('Error creating user');
    }
  };

  const findUserById = async (req, res) => {
    try {
      const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [user_id]);
      return user.rows[0];
    } catch (error) {
      throw new Error('Error fetching user');
    }
  }; 

  const findUserByEmail = async (req, res) => {
    try {
      const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      return user.rows[0];
    } catch (error) {
      throw new Error('Error fetching user by email');
    }
  };

  const updateUserProfile = async (req, res) => {
    try {
      const updatedUser = await pool.query(
        'UPDATE users SET username = $1, email = $2 WHERE user_id = $3 RETURNING *',
        [username, email, user_id]
      );
      return updatedUser.rows[0];
    } catch (error) {
      throw new Error('Error updating user profile');
    }
  };


module.exports = {
    createUser,
    findUserById,
    findUserByEmail, 
    updateUserProfile

};
