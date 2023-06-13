var mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const normalize = require('normalize-mongoose');

const carrinhosSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  }
});
var carrinhos = mongoose.model('carrinhos', carrinhosSchema);
//carrinhosSchema.plugin(normalize);
module.exports = carrinhos