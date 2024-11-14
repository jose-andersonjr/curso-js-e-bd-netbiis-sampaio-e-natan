import { Router } from 'express';
import * as candidatosController from '../controllers/candidatosController.js';

const router = Router();

router
    .get('/', candidatosController.listarCandidatos)
    .get('/:id', candidatosController.pegarCandidatoPorID)
    .post('/', candidatosController.criarCandidato)
    .put('/', candidatosController.editarCandidato)
    .delete('/:id', candidatosController.excluirCandidato)
    
export default router;