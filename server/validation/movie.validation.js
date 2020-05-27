const Joi = require('@hapi/joi');

module.exports = {
  oneMovie: Joi.object({
    title: Joi.string().min(1).max(50).required(),
    releaseYear: Joi.number().integer().greater(1900).less(2021).required(),
    format: Joi.string().valid('DVD', 'VHS', 'Blu-Ray').required(),
    stars: Joi.array().items(Joi.string().min(2).max(30)),
  }),
  file: Joi.array().items(
    Joi.object({
        title: Joi.string().min(1).max(50).required(),
        releaseYear: Joi.number().integer().greater(1900).less(2021).required(),
        format: Joi.string().valid('DVD', 'VHS', 'Blu-Ray').required(),
        stars: Joi.array().items(Joi.string().min(2).max(30)),
    })
  ),
};
