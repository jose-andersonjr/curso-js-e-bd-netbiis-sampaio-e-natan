import express from 'express';
import appRouter from './router/index.js';

const app = express();

app.use(express.json());

app.use('/', appRouter);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000!');
});
