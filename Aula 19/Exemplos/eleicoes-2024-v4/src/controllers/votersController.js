import * as votersService from '../services/votersService.js';
import votersValidator from '../validators/votersValidator.js';

export async function createVoter(req, res){
    const body = req.body;
    const validator = votersValidator.validate(body);
    if(validator.error){
        res.status(400).send(`Erro: ${validator.error.details[0].message}`);
        return;
    }
    await votersService.createVoter(body);
    res.status(201).send('O eleitor foi criado');
}
