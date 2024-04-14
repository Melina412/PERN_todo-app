import { pool } from '../config/db.js';

//$ post Todo ---------------------------------------------
export async function postTodo(req, res) {
  console.log(req.body);
  try {
    const { description } = req.body;
    const todo = await pool.query('INSERT INTO todo (description) VALUES($1)', [
      description,
    ]);
    res.json(todo);
  } catch (error) {
    console.error(error);
    console.log(error.message);
    res.status(500).end();
  }
}

//$ get all Todos ---------------------------------------------
export async function getTodos(req, res) {
  try {
    const todos = await pool.query('SELECT * FROM todo');
    res.json(todos.rows);
  } catch (error) {
    console.error(error);
    console.log(error.message);
    res.status(500).end();
  }
}

//$ get one Todo ---------------------------------------------
export async function getTodo(req, res) {
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

//$ update Todo ---------------------------------------------
export async function updateTodo(req, res) {
  console.log(req.body);
  try {
    const { id } = req.params;
    const { description } = req.body;
    const todo = await pool.query(
      'UPDATE todo SET description = $1 WHERE todo_id = $2',
      [description, id]
    );
    res.json({ todo: todo, status: 'updated' });
  } catch (error) {
    console.error(error);
    console.log(error.message);
    res.status(500).end();
  }
}

//$ delete Todo ---------------------------------------------
export async function deleteTodo(req, res) {
  try {
    const { id } = req.params;
    const todo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
    res.json({ todo: todo, status: 'deleted' });
  } catch (error) {
    console.error(error);
    console.log(error.message);
    res.status(500).end();
  }
}
