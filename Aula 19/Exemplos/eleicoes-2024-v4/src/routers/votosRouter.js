import { Router } from 'express';
import * as votosController from '../controllers/votosController.js';

const router = Router();

router
    .post('/', votosController.insertVote);

export default router;