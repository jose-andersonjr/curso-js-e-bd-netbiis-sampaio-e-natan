import * as electionsRepository from '../repositories/electionsRepository.js';

export async function getElections(eleicao_id) {
    if(eleicao_id){
        return await electionsRepository.getElectionById(eleicao_id);
    }
    return await electionsRepository.getElections();
}

export async function getElectionById(id) {
    return await electionsRepository.getElectionById(id);
}

export async function createElection(election) {
    return await electionsRepository.createElection(election);
}

export async function updateElection(id, election) {
    const voterExists = await electionsRepository.getElectionById(id);
    if (voterExists) {
        return await electionsRepository.updateElection(id, election);
    }
    return false;
}

export async function deleteElection(id) {
    return await electionsRepository.deleteElection(id);
}

export async function registerCandidate(eleicao_id, candidato_id){
    return await electionsRepository.registerCandidate(eleicao_id, candidato_id);
}

export async function deleteCandidate(eleicao_id, candidato_id) {
    return await electionsRepository.deleteCandidate(eleicao_id, candidato_id);
}

export async function getElectionsResume(){
    return await electionsRepository.getElectionsResume();
}