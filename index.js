const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');  // Import the cors middleware

const app = express();
const port = 3001;

const pool = new Pool({
   user: 'postgres',
   host: 'localhost',
   database: 'todo',
   password: 'khaouitipostgresql',
   port: 5432,
});

app.use(bodyParser.json());
app.use(cors());  // Use cors middleware to enable CORS

app.get('/api/notes', async (req, res) => {
   try {
      const result = await pool.query('SELECT * FROM notes');
      res.json(result.rows);
   } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Internal server error' });
   }
});

app.post('/api/notes', async (req, res) => {
   const { title, content } = req.body;
   try {
      const result = await pool.query('INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
      res.json(result.rows[0]);
   } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Internal server error' });
   }
});

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
