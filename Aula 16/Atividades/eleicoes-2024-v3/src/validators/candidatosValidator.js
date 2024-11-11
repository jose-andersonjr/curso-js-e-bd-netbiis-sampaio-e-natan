import Joi from 'joi';

export default Joi.object({
    id: Joi.number().integer().required(),
    nome: Joi.string().required(),
    numero: Joi.number().integer(),
    partido: Joi.string().required(),
    foto: Joi.string().required(),
});
