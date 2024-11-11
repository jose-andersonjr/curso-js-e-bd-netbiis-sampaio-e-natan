import * as alunosRepository from '../repositories/alunosRepository.js';

export function listarAlunos() {
    return alunosRepository.listarAlunos();
}

export function buscarAlunoPorID(id) {
    return alunosRepository.buscarAlunoPorID(id);
}

export function criarAluno(aluno) {
    return alunosRepository.criarAluno(aluno);
}

export function atualizarAluno(aluno) {
    return alunosRepository.atualizarAluno(aluno);
}

export function deletarAluno(id) {
    return alunosRepository.deletarAluno(id);
}