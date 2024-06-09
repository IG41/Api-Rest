const { Schema, model } = require('mongoose');

const personagemSchema = new Schema({
  comprometimento: { type: Number, required: true },
  sociabilidade: { type: Number, required: true },
  inteligencia: { type: Number, required: true },
  saude: { type: Number, required: true },
  forca: { type: Number, required: true },
});

const PersonagemModel = model('Personagem', personagemSchema);

module.exports = { PersonagemModel };

