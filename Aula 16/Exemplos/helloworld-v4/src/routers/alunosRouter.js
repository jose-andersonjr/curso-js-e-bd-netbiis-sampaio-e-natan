import { Router } from 'express';
import * as alunosController from '../controllers/alunosController.js';

const router = Router();

router
    .get('/', alunosController.listarAlunos)
    .get('/:id', alunosController.buscarAlunoPorID)
    .post('/', alunosController.criarAluno)
    .put('/:id', alunosController.editarAluno)
    .delete('/:id', alunosController.excluirAluno);

export default router;