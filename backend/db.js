import pkg from 'pg';
const { Pool } = pkg;
import 'dotenv/config';

export const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const user = process.env.DB_USER;
console.log({ user });