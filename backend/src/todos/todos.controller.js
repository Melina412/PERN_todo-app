import { pool } from '../../db.js';

export async function postTodo(req, res) {
  console.log(req.body);
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1)',
      [description]
    );
    res.json(newTodo);
  } catch (error) {
    console.error(error);
    console.log(error.message);
    res.status(500).end();
  }
}
