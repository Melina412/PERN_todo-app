import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
// import { pool } from '../db.js';

import { router as todoRouter } from './todos/todos.router.js';

export const app = express();

app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/todos', todoRouter);
