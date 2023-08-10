// const { Pool } = require('pg');

// Create a new pool instance with your database configuration
// const pool = new Pool({
//   user: 'your_db_user',
//   host: 'your_db_host',
//   database: 'your_db_name',
//   password: 'your_db_password',
//   port: 5432, // Default PostgreSQL port
// });

// Export the pool instance to be used in other parts of your application
// module.exports = pool;
require("dotenv").config();
const { Pool } = require("pg");

const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD,PGPORT } = process.env;

// PGHOST=localhost
// PGUSER=ashashiddo
// PGDATABASE=wardrobe
// PGPASSWORD=labber
// PGPORT=5432


const pool = new Pool({
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  database: PGDATABASE,
});
const connectDB = () => {
  return pool
    .connect()
    .then(() =>
      console.log(`The application is connected to ${PGDATABASE} database`)
    )
    .catch((err) => console.error("connection error", err));

  // return pool
};



module.exports = { connectDB, pool };
