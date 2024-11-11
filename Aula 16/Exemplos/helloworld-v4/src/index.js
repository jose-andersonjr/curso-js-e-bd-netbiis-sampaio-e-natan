import express from 'express';
import appRouter from './routers/index.js';

const app = express();

app.use(express.json());

app.use('/', appRouter);

app.use('/static', express.static('public'));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});