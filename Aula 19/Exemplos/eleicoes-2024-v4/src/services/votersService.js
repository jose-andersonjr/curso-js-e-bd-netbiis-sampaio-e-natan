import * as votersRepository from '../repositories/votersRepository.js';

export async function createVoter(voter){
    return await votersRepository.createVoter(voter);
}