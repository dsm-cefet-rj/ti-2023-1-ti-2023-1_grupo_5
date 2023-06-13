var mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const normalize = require('normalize-mongoose');

const clientesSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  idCarrinho: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  carrinho: {
    type: Array,
    required: true,
  }
});
var clientes = mongoose.model('clientes', clientesSchema);
module.exports = clientes;

