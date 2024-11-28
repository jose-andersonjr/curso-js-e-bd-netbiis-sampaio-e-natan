import Joi from 'joi';

export default function validateNumber(number) {
    try {
        Joi.assert(number, Joi.number().required());
        return number;
    } catch (error) {
        return false;
    }
}