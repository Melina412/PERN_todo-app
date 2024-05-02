import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';

import { router as todoRouter } from './todos/todos.router.js';

export const app = express();

app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json());
app.use(morgan('dev'));

const FRONTEND_DIR = new URL('../frontend/dist', import.meta.url).pathname;
app.use(express.static(FRONTEND_DIR));

app.use('/api/todos', todoRouter);
