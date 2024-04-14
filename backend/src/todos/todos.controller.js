import { pool } from '../../db.js';

//$ post Todo ---------------------------------------------
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

//$ get all Todos ---------------------------------------------
export async function getTodos(req, res) {
  console.log(req.body);
  try {
    const allTodos = await pool.query('SELECT * FROM todo');
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error);
    console.log(error.message);
    res.status(500).end();
  }
}

//$ get one Todo ---------------------------------------------
export async function getTodo(req, res) {
  console.log(req.body);
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error);
    console.log(error.message);
    res.status(500).end();
  }
}
