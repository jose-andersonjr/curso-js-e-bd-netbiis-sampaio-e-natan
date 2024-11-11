import { Router } from 'express';
import candidatosRouter from './candidatosRouter.js'

const router = Router();

router.get('/', (req, res) => {
    res.send('Página principal do projeto');
});

router.use('/candidatos', candidatosRouter);

export default router;