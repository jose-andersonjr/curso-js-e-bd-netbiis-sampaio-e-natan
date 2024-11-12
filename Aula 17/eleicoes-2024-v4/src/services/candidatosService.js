import * as candidatosRepository from '../repositories/candidatosRepository.js';

export function listarCandidatos(){
    return candidatosRepository.listarCandidatos();
}

export function pegarCandidatoPorID(id){
    return candidatosRepository.pegarCandidatoPorID(id);
}

export function criarCandidato(candidato){
    return candidatosRepository.criarCandidato(candidato);
}

export function editarCandidato(candidato){
    return candidatosRepository.editarCandidato(candidato);
}

export function excluirCandidato(id){
    return candidatosRepository.excluirCandidato(id);
}

export function votar(numero){
    return candidatosRepository.votar(numero);
}

export function reiniciarVotacao(){
    return candidatosRepository.reiniciarVotacao();
}
