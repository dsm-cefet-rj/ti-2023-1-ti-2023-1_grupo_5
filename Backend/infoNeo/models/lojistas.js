var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

const lojistasSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
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
  telefone: {
    type: String,
    required: true,
  }
}, {collection: "lojistas"});

lojistasSchema.plugin(passportLocalMongoose);

var lojistas = mongoose.model('lojistas', lojistasSchema);
module.exports = lojistas;