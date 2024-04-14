import { app } from './server';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import { pool } from './db';

app.use(cors({ origin: process.env.ALLOWED_ORIGIN })); // ? credentials: true
app.use(express.json());
app.use(morgan('dev'));
