import { Router } from 'express';
import candidatesRouter from './candidatesRouter.js'
import electionsRouter from './electionsRouter.js';
import votesRouter from './votesRouter.js';
import votersRouter from './votersRouter.js'

const router = Router();

router.get('/', (req, res) => {
    res.send('Página principal do projeto');
});

router.use('/eleicoes', electionsRouter);

router.use('/candidatos', candidatesRouter);

router.use('/votos', votesRouter);

router.use('/eleitores', votersRouter);

export default router;