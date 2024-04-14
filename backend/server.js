import 'dotenv/config';
import { app } from './src/app.js';

const PORT = process.env.PORT;

app.get('/', (_, res) => {
  res.json({ message: `express server on port ${PORT} ✅` });
});

app.listen(PORT, () => {
  console.log(`express server on port ${PORT} ✅`);
});
