var mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const normalize = require('normalize-mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
const clientesSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  idCarrinho: {
    type: mongoose.Schema.Types.ObjectId,
  },

  /*admin:{
    type: Boolean,
    default: false
  }*/

});
clientesSchema.plugin(passportLocalMongoose);
var clientes = mongoose.model('clientes', clientesSchema);
module.exports = clientes;

