import { Router } from 'express';
import * as votersController from '../controllers/votersController.js';

const router = Router();

router
    .get('/', votersController.getVoters)
    .get('/:id', votersController.getVoterById)
    .post('/', votersController.createVoter)
    .put('/:id', votersController.updateVoter)
    .delete('/:id', votersController.deleteVoter);

export default router;