import * as votesService from '../services/votesService.js';
import votesValidator from '../validators/votesValidator.js';
import * as votersService from '../services/votersService.js';
import * as electionsService from '../services/electionsService.js';
import * as candidatesService from '../services/candidatesService.js';

export async function insertVote(req, res) {
    const body = req.body;
    const validator = votesValidator.validate(body);
    if (validator.error) {
        res.status(400).send(`Erro: ${validator.error.details[0].message}`);
        return;
    }
    const voter = await votersService.getVoterById(body.eleitor_id);
    const eleicao = await electionsService.getElectionById(body.eleicao_id);
    const candidate = await candidatesService.getCandidates(body.eleicao_id, body.numero);
    if (!voter) {
        res.status(404).send('O ID do eleitor não existe');
        return;
    }
    if (!eleicao) {
        res.status(404).send('O ID da eleição não existe');
        return;
    }
    if(!candidate){
        res.status(404).send(`Nenhum candidato foi encontrado com o número ${body.numero}`);
        return;
    }
    const result = await votesService.insertVote(body);
    if (result) {
        res.send(result);
        return;
    }
    res.status(400).send('O eleitor já votou');
}