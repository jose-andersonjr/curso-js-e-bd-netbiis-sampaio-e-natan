import Joi from 'joi';

export default Joi.object({
    nome: Joi.string().required(),
    data: Joi.date().required(),
    descricao: Joi.string().required()
});