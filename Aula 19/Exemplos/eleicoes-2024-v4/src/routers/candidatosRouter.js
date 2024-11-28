import { Router } from 'express';
import * as candidatosController from '../controllers/candidatosController.js';

const router = Router();
//  router = '/candidatos'
router
    .get('/', candidatosController.getCandidates)
    .get('/:id', candidatosController.getCandidateById)
    .post('/', candidatosController.createCandidate)
    .put('/:id', candidatosController.updateCandidate)
    .delete('/:id', candidatosController.deleteCandidate)
    
export default router;