import pkg from 'pg';
const { Pool } = pkg;
import 'dotenv/config';

export const pool = new Pool({
  connectionString: process.env.DB_URL,
});

export async function createTable() {
  try {
    const result = pool.query(`CREATE TABLE IF NOT EXISTS todo(
      todo_id SERIAL PRIMARY KEY,
      description VARCHAR(255)`);
    if (result) {
      console.log('sql table successfully created');
    }
  } catch (error) {
    console.error('create sql table error -- ', error);
  }
}
