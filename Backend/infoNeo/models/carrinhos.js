var mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const normalize = require('normalize-mongoose');

const carrinhosSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  produtos: [{
    produto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'produto'
    },
    quantidade: {
      type: Number,
      required: true
    }
  }]
});
var carrinhos = mongoose.model('carrinhos', carrinhosSchema);
//carrinhosSchema.plugin(normalize);
module.exports = carrinhos