import candidatesValidator from '../validators/candidatesValidator.js';
import * as candidatesService from '../services/candidatesService.js';
import validateNumber from '../validators/numbersValidator.js';

export async function getCandidates(req, res) {
    const numero = req.query.numero;
    const eleicao_id = req.query.eleicao_id;
    if (validateNumber(eleicao_id) && validateNumber(numero)) {
        const candidates = await candidatesService.getCandidates(eleicao_id, numero);
        if (candidates) {
            res.send(candidates);
            return;
        }
        res.status(404).send('Candidato não encontrado na eleição selecionada');
        return;
    }
    if (validateNumber(eleicao_id)) {
        const candidates = await candidatesService.getCandidates(eleicao_id);
        res.send(candidates);
        return;
    }
    const candidates = await candidatesService.getCandidates();
    res.send(candidates);
}

export async function getCandidateById(req, res) {
    const id = req.params.id;
    if (validateNumber(id)) {
        let candidato = await candidatesService.getCandidateById(id);
        if (candidato) {
            res.json(candidato);
            return;
        } else {
            res.status(404).send(`Candidato ${id} não encontrado`);
            return;
        }
    } else {
        res.status(400).send('O ID inserido é inválido');
    }
}


export async function createCandidate(req, res) {
    let validator = candidatesValidator.validate(req.body);
    if (validator.error) {
        res.status(400).send({ 'error': validator.error.details[0].message });
        return;
    }
    const candidate = req.body;
    await candidatesService.createCandidate(candidate);
    res.status(201).send('Candidato criado com sucesso');
}

export async function updateCandidate(req, res) {
    let validator = candidatesValidator.validate(req.body);
    let id = validateNumber(req.params.id) ? validateNumber(req.params.id) : validateNumber(req.query.id);
    if (validator.error) {
        res.status(400).send({ "error": `${validator.error.details[0].message}` });
        return;
    }
    if (id) {
        let candidatoExists = await candidatesService.getCandidateById(req.body.id);
        if (candidatoExists) {
            await candidatesService.updateCandidate(id, req.body);
            res.status(200).send('O candidato foi editado com sucesso');
            return;
        }
        res.status(404).send('Candidato não encontrado');
    } else {
        res.status(400).send('O ID inserido é inválido');
    }
}

export function deleteCandidate(req, res) {
    const id = validateNumber(req.params.id);
    if (id) {
        candidatesService.deleteCandidate(id);
        res.status(200).send('O candidato foi removido com sucesso');
    } else {
        res.status(400).send('O ID inserido é inválido');
    }
}

// Ainda não foi implementado com o banco de dados

export function votar(req, res) {
    const numero = validateNumber(req.params.numero);
    if (numero) {
        let voted = candidatesService.votar(numero);
        if (voted) {
            res.status(200).send('Voto contabilizado com sucesso');
        } else {
            res.status(404).send(`Não existe candidato com o numero ${numero}`);
        }
        return;
    } else {
        res.status(400).send('O número inserido é inválido');
    }
}

export function excluirVotos(req, res) {
    candidatesService.reiniciarVotacao();
    res.status(200).send({ message: 'A votação foi reiniciada!' });

}
