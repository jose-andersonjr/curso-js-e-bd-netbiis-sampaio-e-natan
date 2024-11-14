import candidatosValidator from '../validators/candidatosValidator.js';
import * as candidatosService from '../services/candidatosService.js';
import validateNumberParam from '../validators/numbersValidator.js';

export function listarCandidatos(req, res){
    const candidatos = candidatosService.listarCandidatos();
    res.send(candidatos);
}

export function pegarCandidatoPorID(req, res){
    let id = validateNumberParam(req.params.id) ? validateNumberParam(req.params.id) : validateNumberParam(req.query.id);
    if (id) {
        let candidato = candidatosService.pegarCandidatoPorID(id);
        if (candidato) {
            res.json(candidato);
        } else {
            res.status(404).send(`Candidato ${id} não encontrado`);
        }
    } else {
        res.status(400).send('O ID inserido é inválido');
    }
}


export function criarCandidato(req, res){
    let validator = candidatosValidator.validate(req.body);
    if(validator.error){
        res.status(400).send({"error": validator.error.details[0].message});
    }
    const candidato = req.body;
    candidatosService.criarCandidato(candidato);
    res.status(201).send('Candidato criado com sucesso');
}

export function editarCandidato(req, res){
    let validator = candidatosValidator.validate(req.body);
    if (validator.error) {
        res.status(400).send({"error": `${validator.error.details[0].message}`});
    } else {
        let candidatoExists = candidatosService.pegarCandidatoPorID(req.body.id);
        if(candidatoExists){
            candidatosService.editarCandidato(req.body);
            res.status(200).send('O candidato foi editado com sucesso');
        }else{
            candidatosService.criarCandidato(req.body);
            res.status(201).send('O candidato ainda não existia, portanto ele foi criado');
        }
    }
}

export function excluirCandidato(req, res){
    const id = validateNumberParam(req.params.id);
    if (id) {
        candidatosService.excluirCandidato(id);
        res.status(200).send('O candidato foi removido com sucesso');
    } else {
        res.status(400).send('O ID inserido é inválido');
    }
}

export function votar(req, res){
    const numero = validateNumberParam(req.params.numero);
    if (numero) {
        let voted = candidatosService.votar(numero);
        if(voted){
            res.status(200).send('Voto contabilizado com sucesso');
        }else{
            res.status(404).send(`Não existe candidato com o numero ${numero}`);
        }
        return;
    } else {
        res.status(400).send('O número inserido é inválido');
    }
}

export function excluirVotos(req, res){
    candidatosService.reiniciarVotacao();
    res.status(200).send({ message: 'A votação foi reiniciada!' });

}
