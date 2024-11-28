import { Router } from 'express';
import * as votersController from '../controllers/votersController.js';

const router = Router();

router
    .post('/', votersController.createVoter);

export default router;