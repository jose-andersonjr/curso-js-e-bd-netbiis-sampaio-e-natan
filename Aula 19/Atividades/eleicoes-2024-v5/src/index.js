import express from 'express';
import appRouter from './routers/index.js';
import * as candidatesController from './controllers/candidatesController.js';


const app = express();

app.use(express.json());

app.use('/', appRouter);

app.post('/votar/:numero', candidatesController.votar)
    .delete('/votar', candidatesController.excluirVotos);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000!');
});
