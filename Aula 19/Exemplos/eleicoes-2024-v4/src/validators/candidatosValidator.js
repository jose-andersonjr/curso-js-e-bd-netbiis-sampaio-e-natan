import Joi from 'joi';

export default Joi.object({
    nome: Joi.string().required(),
    numero: Joi.number().integer().required(),
    partido: Joi.string().required(),
    foto: Joi.string().uri().default('https://via.placeholder.com/150')
});
