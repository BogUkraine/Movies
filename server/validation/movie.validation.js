const Joi = require('@hapi/joi');

module.exports = {
  oneMovie: Joi.object({
    title: Joi.string().regex(/^[a-zA-Z0-9 ,]{1,50}$/).min(1).max(50)
      .required(),
    releaseYear: Joi.number().integer().greater(1900).less(2021)
      .required(),
    format: Joi.string().valid('DVD', 'VHS', 'Blu-Ray').required(),
    stars: Joi.array().unique((a, b) => a === b).items(Joi.string()
      .regex(/^[a-zA-Z ]{2,30}$/)
      .min(2)
      .max(30)
      .required()),
  }),
  file: Joi.array().items(
    Joi.object({
      title: Joi.string().regex(/^[a-zA-Z0-9 ,]{1,50}$/).min(1).max(50)
        .required(),
      releaseYear: Joi.number().integer().greater(1900).less(2021)
        .required(),
      format: Joi.string().valid('DVD', 'VHS', 'Blu-Ray').required(),
      stars: Joi.array().unique((a, b) => a === b).items(Joi.string()
        .regex(/^[a-zA-Z ]{2,30}$/)
        .min(2)
        .max(30)
        .required()),
    }),
  ),
};
