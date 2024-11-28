import * as votosRepository from '../repositories/votosRepository.js';

export async function insertVote(vote) {
    const { eleicao_id, eleitor_id } = vote;
    const alreadVoted = await votosRepository.checkAlreadyVoted(eleicao_id, eleitor_id);
    if(alreadVoted){
        return false;
    }
    return await votosRepository.insertVote(vote);
}