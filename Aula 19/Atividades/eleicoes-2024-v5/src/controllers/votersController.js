import * as votersService from '../services/votersService.js';
import validateNumber from '../validators/numbersValidator.js';
import votersValidator from '../validators/votersValidator.js';

export async function getVoters(req, res) {
    if (req.query.eleicao_id && !validateNumber(req.query.eleicao_id)) {
        res.status(400).send('A eleição inserida é inválida');
        return;
    }
    const voters = await votersService.getVoters(req.query.eleicao_id);
    if (voters) {
        res.status(200).send(voters);
        return;
    }
    req.status(404).send(`Nenhum candidato foi encontrado para a eleição ${req.query.eleicao_id}`)
}

export async function createVoter(req, res) {
    const body = req.body;
    const validator = votersValidator.validate(body);
    if (validator.error) {
        res.status(400).send(`Erro: ${validator.error.details[0].message}`);
        return;
    }
    await votersService.createVoter(body);
    res.status(201).send('O eleitor foi criado');
}


export async function getVoterById(req, res) {
    const id = req.params.id;
    if (validateNumber(id)) {
        const voter = await votersService.getVoterById(id);
        if (voter) {
            res.status(200).send(voter);
            return;
        }
        res.status(404).send(`Nenhum eleitor foi encontrado com o ID ${id}`);
        return;
    }
    res.status(400).send('O ID inserido para o eleitor é inválido');
}

export async function updateVoter(req, res) {
    const id = req.params.id;
    const body = req.body;
    const validator = votersValidator.validate(body);
    if (validateNumber(id)) {
        if (validator.error) {
            res.status(400).send(`Error: ${validator.error.details[0].message}`);
            return;
        }
        const voter = await votersService.updateVoter(id, body);
        if (voter) {
            res.status(200).send('O eleitor foi alterado com sucesso');
            return;
        }
        res.status(404).send('O eleitor não foi encontrado');
        return;
    }
    res.status(400).send('O ID inserido é inválido');
}

export function deleteVoter(req, res) {
    const id = validateNumber(req.params.id);
    if (id) {
        votersService.deleteVoter(id);
        res.status(200).send('O eleitor foi removido com sucesso');
    } else {
        res.status(400).send('O ID inserido é inválido');
    }
}