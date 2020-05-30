/* eslint consistent-return: 0 */
module.exports = (schema, property) => async (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const err = await schema.validate(req[property]);
    if (err.error) {
      return res.status(400).send({ message: err.error.details[0].message });
    }
    next();
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};
