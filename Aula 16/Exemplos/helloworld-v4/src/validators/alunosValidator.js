import Joi from 'joi';

export const alunosValidator = Joi.object({
    id: Joi.number().integer().required(),
    nome: Joi.string().required(),
    dataNascimento: Joi.date().required(),
    email: Joi.string().email().required(),
    notas: Joi.array().items(Joi.number().required().min(0).max(10))
});