const pool = require('../db/database');

const createMatch = async (user_id, clothing_id) => {
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
//   async getUserMatches (user_id) {
//     const userMatches = await pool.query (
//         `SELECT * FROM matches WHERE user_id = $1;`, 
//         [user_id]
//     )
// return userMatches.rows[0]
// //return array of objects that has that user_id //will hapen in frontend 
// new Set {userMatches.map(match => match.randomString) // will return a list of random strings 
//   }
// }
//have req and res here 

module.exports = {
    createMatch
}
