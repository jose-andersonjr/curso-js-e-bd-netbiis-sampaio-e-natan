import { Router } from 'express';
import * as candidatesController from '../controllers/candidatesController.js';

const router = Router();

router
    .get('/', candidatesController.getCandidates)
    .get('/:id', candidatesController.getCandidateById)
    .post('/', candidatesController.createCandidate)
    .put('/:id', candidatesController.updateCandidate)
    .delete('/:id', candidatesController.deleteCandidate);
    
export default router;