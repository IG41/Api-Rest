const { Schema, model } = require('mongoose');

const listaSchema = new Schema({
  descricao: { type: String, required: true },
  moedas: { type: Number, required: true },
  feito: { type: Boolean, required: true },
});

const ListaModel = model('Lista', listaSchema);

module.exports = { ListaModel };
