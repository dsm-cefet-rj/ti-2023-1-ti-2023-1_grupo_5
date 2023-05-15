var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lojistasSchema = new Schema({
  cnpj: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  }
}, {collection: "lojistas"});
var lojistas = mongoose.model('lojistas', lojistasSchema);
module.exports = lojistas;