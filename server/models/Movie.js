const { Schema, model } = require('mongoose');

const schema = new Schema({
  title: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  format: { type: String, required: true },
  stars: { type: Array, required: true },
});

module.exports = model('Movie', schema);
