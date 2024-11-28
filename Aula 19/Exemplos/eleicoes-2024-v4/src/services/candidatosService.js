import * as candidatosRepository from '../repositories/candidatosRepository.js';

export async function getCandidates(){
    return await candidatosRepository.getCandidates();
}

export async function getCandidateById(id){
    return await candidatosRepository.getCandidateById(id);
}

export async function createCandidate(candidate){
    return await candidatosRepository.createCandidate(candidate);
}

export async function updateCandidate(id, candidate){
    return await candidatosRepository.updateCandidate(id, candidate);
}

export async function deleteCandidate(id){
    return await candidatosRepository.deleteCandidate(id);
}

export function votar(numero){
    return candidatosRepository.votar(numero);
}

export function reiniciarVotacao(){
    return candidatosRepository.reiniciarVotacao();
}
