import { alunosValidator } from '../validators/alunosValidator.js';
import db from '../configs/dbConfig.js';
import * as alunosService from '../services/alunosService.js';


export function listarAlunos(req, res){
    const alunos = alunosService.listarAlunos();
    res.send(alunos);
}

export function buscarAlunoPorID(req, res){
    let id = req.params.id;
    console.log('id ', id);
    if(parseInt(id) <= 0 || isNaN(parseInt(id))){
        res.status(400).send('ID inválido');
        return;
    }
    const aluno = alunosService.buscarAlunoPorID(id);
    res.send(aluno);
}

export function criarAluno(req, res){
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
    alunosService.criarAluno(body);
    res.status(201).send('Aluno novo criado');
}

export function editarAluno(req, res){
    let id = req.params.id;
    if(parseInt(id) <= 0 || isNaN(parseInt(id))){
        res.status(400).send('ID inválido');
        return;
    }
    const body = req.body;
    alunosService.atualizarAluno(body);
    res.send(`Aluno foi ${req.params.id} editado`);
}   

export function excluirAluno(req, res){
    const id = req.params.id;
    alunosService.deletarAluno(id);
    res.send('Aluno deletado com sucesso!');
}

