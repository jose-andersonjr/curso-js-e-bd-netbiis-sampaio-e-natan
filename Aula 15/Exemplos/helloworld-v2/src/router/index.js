import alunosRouter from './alunosRouter.js';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use('/alunos', alunosRouter);

export default router;