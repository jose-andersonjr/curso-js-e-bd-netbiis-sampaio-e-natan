import { Router } from 'express';
import candidatosRouter from './candidatosRouter.js'
import eleicoesRouter from './eleicoesRouter.js';
import votosRouter from './votosRouter.js';
import votersRouter from './votersRouter.js'

const router = Router();

router.get('/', (req, res) => {
    res.send('Página principal do projeto');
});

router.use('/eleicoes', eleicoesRouter);

router.use('/candidatos', candidatosRouter);

router.use('/votos', votosRouter);

router.use('/eleitores', votersRouter);

export default router;