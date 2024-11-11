import express from 'express';
import appRouter from './routers/index.js';
import * as candidatosController from './controllers/candidatosController.js';


const app = express();

app.use(express.json());

app.use('/', appRouter);

app.post('/votar/:numero', candidatosController.votar)
    .delete('/votar', candidatosController.excluirVotos);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000!');
});
