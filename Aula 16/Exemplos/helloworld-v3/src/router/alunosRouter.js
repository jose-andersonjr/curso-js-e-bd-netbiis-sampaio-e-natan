import { Router } from 'express';
import { alunosValidator } from '../validators/alunosValidator.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Página de alunos');
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    if(parseInt(id) <= 0 || isNaN(parseInt(id))){
        res.status(400).send('ID inválido');
        return;
    }
    res.send(`O aluno ${id} foi encontrado`);
});

router.post('/', (req, res) => {
    const headers = req.headers;
    console.log(headers);
    const body = req.body;
    console.log(body);
    res.header('Content-Type', 'application/json');
    res.header('X-Powered-By', 'Express');
    const validacao = alunosValidator.validate(body);
    if (validacao.error){
        res.status(400).send({message: `Erro: ${validacao.error.details[0].message}`});
        return;
    }
    res.status(201).send('Aluno novo criado');
});

router.put('/:id', (req, res) => {
    console.log(req.body);
    let id = req.params.id;
    if(parseInt(id) <= 0 || isNaN(parseInt(id))){
        res.status(400).send('ID inválido');
        return;
    }
    res.header('Content-Type', 'application/json');
    res.send(`Aluno foi ${req.params.id} editado`);
})

router.delete('/', (req, res) => {
    res.send('Aluno deletado com sucesso!');
});

export default router;