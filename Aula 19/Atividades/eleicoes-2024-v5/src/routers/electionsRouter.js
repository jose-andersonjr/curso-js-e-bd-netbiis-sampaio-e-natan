import { Router } from 'express';
import * as electionsController from '../controllers/electionsController.js';

const router = Router();

router
    .get('/resumo', electionsController.getElectionsResume)
    .get('/', electionsController.getElections)
    .get('/:id', electionsController.getElectionById)
    .post('/', electionsController.createElection)
    .put('/:id', electionsController.updateElection)
    .delete('/:id', electionsController.deleteElection)
    .put('/:id/:candidato_id', electionsController.registerCandidate)
    .delete('/:id/:candidato_id', electionsController.removeCandidate);

export default router;