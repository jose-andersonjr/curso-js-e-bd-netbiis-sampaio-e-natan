import * as electionsService from '../services/electionsService.js';
import * as candidatesService from '../services/candidatesService.js';
import validateNumber from '../validators/numbersValidator.js';
import electionsValidator from '../validators/electionsValidator.js';

export async function getElections(req, res) {
    const eleicao_id = req.query.eleicao_id;
    const result = await electionsService.getElections(eleicao_id);
    res.status(200).send(result);
}

export async function getElectionById(req, res) {
    const id = req.params.id;
    if (validateNumber(id)) {
        const voter = await electionsService.getElectionById(id);
        if (voter) {
            res.status(200).send(voter);
            return;
        }
        res.status(404).send(`Nenhuma eleição foi encontrada com o ID ${id}`);
        return;
    }
    res.status(400).send('O ID inserido para a eleição é inválido');
}

export async function createElection(req, res) {
    const body = req.body;
    const validator = electionsValidator.validate(body);
    if (validator.error) {
        res.status(400).send(`Erro: ${validator.error.details[0].message}`);
        return;
    }
    await electionsService.createElection(body);
    res.status(201).send('A eleição foi criada');
}

export async function updateElection(req, res) {
    const id = req.params.id;
    const body = req.body;
    const validator = electionsValidator.validate(body);
    if (validateNumber(id)) {
        if (validator.error) {
            res.status(400).send(`Error: ${validator.error.details[0].message}`);
            return;
        }
        const voter = await electionsService.updateElection(id, body);
        if (voter) {
            res.status(200).send('A eleição foi alterada com sucesso');
            return;
        }
        res.status(404).send('A eleição não foi encontrada');
        return;
    }
    res.status(400).send('O ID inserido é inválido');
}

export function deleteElection(req, res) {
    const id = validateNumber(req.params.id);
    if (id) {
        electionsService.deleteElection(id);
        res.status(200).send('A eleição foi removida com sucesso');
    } else {
        res.status(400).send('O ID inserido é inválido');
    }
}


export async function registerCandidate(req, res) {
    const eleicao_id = req.params.id;
    const candidato_id = req.params.candidato_id;
    if (validateNumber(eleicao_id) && validateNumber(candidato_id)) {
        const election = await electionsService.getElectionById(eleicao_id);
        const candidate = await candidatesService.getCandidateById(candidato_id);
        if (!election) {
            res.status(404).send('O ID da eleição não existe');
            return;
        }
        if (!candidate) {
            res.status(404).send('O ID do candidato não existe');
            return;
        }
        const candidateAlreadyRegistered = await candidatesService.getCandidateByElection(candidato_id, eleicao_id);
        if (candidateAlreadyRegistered) {
            res.status(400).send(`Candidato ${candidate.nome} já existe na eleicao ${election.descricao}`);
            return;
        }
        await electionsService.registerCandidate(eleicao_id, candidato_id);
        res.status(200).send(`Candidato ${candidate.nome} foi inserido na eleicao ${election.descricao}`);
        return;
    }
    res.status(400).send('Verifique se o ID do candidato e da eleição são válidos');
}

export async function removeCandidate(req, res) {
    const eleicao_id = req.params.id;
    const candidato_id = req.params.candidato_id;
    if (validateNumber(eleicao_id) && validateNumber(candidato_id)) {
        const election = await electionsService.getElectionById(eleicao_id);
        if (!election) {
            res.status(404).send('O ID da eleição não existe');
            return;
        }
        await electionsService.deleteCandidate(eleicao_id, candidato_id);
        res.send(`Candidato ${candidato_id} excluido com sucesso da eleição ${election.descricao}`);
        return;
    }
    res.status(400).send('Verifique se o ID do candidato e da eleição são válidos');
}

export async function getElectionsResume(req, res){
    const result = await electionsService.getElectionsResume();
    res.status(200).send(result);
}