import { Router } from 'express';
import * as votesController from '../controllers/votesController.js';

const router = Router();

router
    .post('/', votesController.insertVote);

export default router;