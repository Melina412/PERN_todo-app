import express from 'express';
import 'dotenv/config';

export const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('express server on port', PORT);
});
