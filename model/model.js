const { Pool } = require('pg');
const dbConfig = require('../config/database');

const pool = new Pool(dbConfig);

exports.getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM ma_user where id =456');
  return result.rows;
};

// exports.getUserById = async (id) => {
//   const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
//   return result.rows[0];
// };