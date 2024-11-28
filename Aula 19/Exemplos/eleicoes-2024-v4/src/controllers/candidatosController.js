import candidatosValidator from '../validators/candidatosValidator.js';
import * as candidatosService from '../services/candidatosService.js';
import validateNumberParam from '../validators/numbersValidator.js';

export async function getCandidates(req, res) {
    const candidatos = await candidatosService.getCandidates();
    res.send(candidatos);
}

export async function getCandidateById(req, res) {
    let id = validateNumberParam(req.params.id) ? validateNumberParam(req.params.id) : validateNumberParam(req.query.id);
    if (id) {
        let candidato = await candidatosService.getCandidateById(id);
        if (candidato) {
            res.json(candidato);
        } else {
            res.status(404).send(`Candidato ${id} não encontrado`);
        }
    } else {
        res.status(400).send('O ID inserido é inválido');
    }
}


export async function createCandidate(req, res) {
    let validator = candidatosValidator.validate(req.body);
    if (validator.error) {
        res.status(400).send({ 'error': validator.error.details[0].message });
        return;
    }
    const candidate = req.body;
    await candidatosService.createCandidate(candidate);
    res.status(201).send('Candidato criado com sucesso');
}

export async function updateCandidate(req, res) {
    let validator = candidatosValidator.validate(req.body);
    let id = validateNumberParam(req.params.id) ? validateNumberParam(req.params.id) : validateNumberParam(req.query.id);
    if (validator.error) {
        res.status(400).send({ "error": `${validator.error.details[0].message}` });
        return;
    }
    if (id) {
        let candidatoExists = await candidatosService.getCandidateById(req.body.id);
        if (candidatoExists) {
            await candidatosService.updateCandidate(id, req.body);
            res.status(200).send('O candidato foi editado com sucesso');
            return;
        }
        res.status(404).send('Candidato não encontrado');
    } else {
        res.status(400).send('O ID inserido é inválido');
    }
}

export function deleteCandidate(req, res) {
    const id = validateNumberParam(req.params.id);
    if (id) {
        candidatosService.deleteCandidate(id);
        res.status(200).send('O candidato foi removido com sucesso');
    } else {
        res.status(400).send('O ID inserido é inválido');
    }
}

// Ainda não foi implementado com o banco de dados

export function votar(req, res) {
    const numero = validateNumberParam(req.params.numero);
    if (numero) {
        let voted = candidatosService.votar(numero);
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
    candidatosService.reiniciarVotacao();
    res.status(200).send({ message: 'A votação foi reiniciada!' });

}
