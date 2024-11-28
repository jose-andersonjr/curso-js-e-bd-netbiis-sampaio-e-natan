import * as candidatesRepository from '../repositories/candidatesRepository.js';

export async function getCandidates(eleicao_id = false, numero = false){
    if(numero && eleicao_id){
        return await candidatesRepository.getCandidateByNumberAndElection(eleicao_id, numero);
    }
    if(eleicao_id){
        return await candidatesRepository.getCandidatesByElection(eleicao_id);
    }
    return await candidatesRepository.getCandidates();
}

export async function getCandidateById(id){
    return await candidatesRepository.getCandidateById(id);
}

export async function getCandidateByElection(id, eleicao_id){
    return await candidatesRepository.getCandidateByElection(id, eleicao_id);
}

export async function createCandidate(candidate){
    return await candidatesRepository.createCandidate(candidate);
}

export async function updateCandidate(id, candidate){
    return await candidatesRepository.updateCandidate(id, candidate);
}

export async function deleteCandidate(id){
    return await candidatesRepository.deleteCandidate(id);
}

export function votar(numero){
    return candidatesRepository.votar(numero);
}

export function reiniciarVotacao(){
    return candidatesRepository.reiniciarVotacao();
}
