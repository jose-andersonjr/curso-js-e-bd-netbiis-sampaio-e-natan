import Joi from 'joi';
export default function validateID(id) {
    try {
        Joi.assert(id, Joi.number().required());
        return id;
    } catch (error) {
        return false;
    }
}