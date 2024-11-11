import alunosRouter from './alunosRouter.js';
import Joi from 'joi';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    let teste = Joi.assert(5, Joi.number());
    console.log(teste);
    res.send('Hello World');
});

router.use('/alunos', alunosRouter);

export default router;