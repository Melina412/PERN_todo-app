import 'dotenv/config';
import { app } from './src/app.js';

const PORT = process.env.PORT;

const FRONTEND_INDEX = new URL('./frontend/dist/index.html', import.meta.url)
  .pathname;

app.get('*', (_, res) => {
  res.sendFile(FRONTEND_INDEX);
});

app.get('/', (_, res) => {
  res.json({ message: `express server on port ${PORT} ✅` });
});

app.listen(PORT, () => {
  console.log(`express server on port ${PORT} ✅`);
});
