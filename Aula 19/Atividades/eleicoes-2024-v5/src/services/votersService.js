import * as votersRepository from '../repositories/votersRepository.js';

export async function getVoters(eleicao_id) {
    if (eleicao_id) {
        return await votersRepository.getVotersByElection(eleicao_id);
    }
    return await votersRepository.getVoters();
}

export async function createVoter(voter) {
    return await votersRepository.createVoter(voter);
}

export async function getVoterById(id) {
    return await votersRepository.getVoterById(id);
}

export async function updateVoter(id, voter) {
    const voterExists = await votersRepository.getVoterById(id);
    if (voterExists) {
        return await votersRepository.updateVoter(id, voter);
    }
    return false;
}

export async function deleteVoter(id) {
    return await votersRepository.deleteVoter(id);
}

