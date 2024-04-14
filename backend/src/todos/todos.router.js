import express from 'express';
import { postTodo } from './todos.controller.js';

export const router = new express.Router();

router.post('/', postTodo);
