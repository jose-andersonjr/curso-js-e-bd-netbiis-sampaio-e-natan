import * as votosService from '../services/votosService.js';
import votosValidator from '../validators/votosValidator.js';

export async function insertVote(req, res) {
    const body = req.body;
    const validator = votosValidator.validate(body);
    if(validator.error){
        res.status(400).send(`Erro: ${validator.error.details[0].message}`);
        return;
    }
    const result = await votosService.insertVote(body);
    if(result){
        res.send(result);
        return;
    }
    res.status(400).send('O eleitor já votou');
}