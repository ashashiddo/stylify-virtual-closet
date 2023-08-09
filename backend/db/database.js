const { Pool } = require('pg');

// Create a new pool instance with your database configuration
const pool = new Pool({
  user: 'your_db_user',
  host: 'your_db_host',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432, // Default PostgreSQL port
});

// Export the pool instance to be used in other parts of your application
module.exports = pool;
