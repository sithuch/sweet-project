const { Pool } = require('pg');
const express = require('express');
const app = express();
const PORT = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'erp_clone',
  password: '123',
  port: 5432,
});

// app.get('/users', (req, res) => {
//     try
//     {
//         pool.connect((err, client, done) => {
//             if (err) {
//               console.error('Error connecting to the database:', err);
//               return res.status(500).send({ message: 'Error connecting to the database' });
//             }
//             console.log('Connected to the database!');
        
//             client.query('SELECT * FROM ma_user where id =456', (err, result) => {
//               done(); // release the client back to the pool
        
//               if (err) {
//                 console.error('Error executing query:', err);
//                 return res.status(500).send({ message: 'Error executing query' });
//               }
//               console.log('Query result:', result.rows);
//               res.json(result.rows);
//             });
//           });
//     }catch (error) {
//         // handle the error
//         await client.query('ROLLBACK');
//         res.status(500).json({ message: 'Internal Server Error' });
//       }
//         });     
    

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

app.get('/users', async (req, res) => {
  try {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM ma_user where id = $1', [456]);
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query:', error);
      await client.query('ROLLBACK');
      res.status(500).json({ message: 'Error executing query' });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ message: 'Error connecting to the database' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});