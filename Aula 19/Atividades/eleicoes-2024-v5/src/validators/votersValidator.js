import Joi from 'joi';

export default Joi.object({
    nome: Joi.string().required(),
    cpf: Joi.string().required(),
    senha: Joi.string().required()
});