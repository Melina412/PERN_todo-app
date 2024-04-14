import express from 'express';
import { getTodo, getTodos, postTodo } from './todos.controller.js';

export const router = new express.Router();

router.post('/', postTodo);
router.get('/', getTodos);
router.get('/:id', getTodo);
