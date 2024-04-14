import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: process.env.ALLOWED_ORIGIN })); // ? credentials: true
app.use(express.json());
app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log('express server on port', PORT);
});
