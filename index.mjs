import express from 'express';
import config from './src/config/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json(config);
});

app.listen(PORT, () => {
  console.log('> unubo-poc - 0.0.1-alpha');
  console.log(`> Ready on http://localhost:${PORT}...`);
});
