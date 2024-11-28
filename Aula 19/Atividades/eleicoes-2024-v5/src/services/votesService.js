import * as votesRepository from '../repositories/votesRepository.js';

export async function insertVote(vote) {
    const { eleicao_id, eleitor_id } = vote;
    const alreadVoted = await votesRepository.checkAlreadyVoted(eleicao_id, eleitor_id);
    if(alreadVoted){
        return false;
    }
    return await votesRepository.insertVote(vote);
}