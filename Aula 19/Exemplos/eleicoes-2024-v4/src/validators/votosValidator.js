import Joi from 'joi';

export default Joi.object({
    eleitor_id: Joi.number().required(),
    eleicao_id: Joi.number().required(),
    numero: Joi.number().required()
});