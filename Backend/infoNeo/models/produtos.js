var mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const normalize = require('normalize-mongoose');
//usersSchema.plugin(normalize); retirar no package json (npm uninstall)

const produtosSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  detalhes: {
    type: String,
    required: true,
  },
  preco: {
    type: String,
    required: true,
  },
  id_lojista: {
    type: String,
    required: true,
  }
});
var produtos = mongoose.model('produtos', produtosSchema);
module.exports = produtos;