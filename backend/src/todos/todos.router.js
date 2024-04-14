import express from 'express';
import {
  deleteTodo,
  getTodo,
  getTodos,
  postTodo,
  updateTodo,
} from './todos.controller.js';

export const router = new express.Router();

router.post('/', postTodo);
router.get('/', getTodos);
router.get('/:id', getTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
