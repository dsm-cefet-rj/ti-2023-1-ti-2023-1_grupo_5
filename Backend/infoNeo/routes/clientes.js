var express = require('express');
var router = express.Router();
const clientes = require('../models/clientes');

/* GET users listing. */
router.post('/logarCliente', (req, res, next) => {
  clientes.findOne({email: req.body.email}).then( (cliente) => {
    if(cliente.senha === req.body.senha){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(cliente);
      return;
    }else{
      res.statusCode = 200;
      res.json(null);
      return;
    }
  })
});

//atualiza carrinho
router.patch('/patchCarrinho/:id', (req, res, next) => {
  clientes.findOneAndUpdate({_id: req.params.id}, req.body);
  res.sendStatus = 200;
  return;
});

module.exports = router;