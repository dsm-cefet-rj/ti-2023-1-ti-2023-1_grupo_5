var express = require('express');
var router = express.Router();
const clientes = require('../models/clientes');

router.post('/verificaEmail', (req, res, next) => {
  console.log(req.body)
  // clientes.findOne({email: req.body.email}).then((cliente) => {
  //   if(cliente != null){
  //     res.statusCode = 200;
  //     res.json({stts: true});
  //     console.log("email ja existente");
  //     //return;
  //   }else{
  //     res.statusCode = 200;
  //     res.json({stts: false});
  //     return;
  //   }
  // }).catch((error) => {
  //   res.statusCode = 502; //?
  //   console.log(error);
  //   return;
  // })

  res.statusCode = 200;
});

//cria usuario
router.post('/', (req, res, next) => {  
  //clientes.create(req.body);
  res.statusCode = 200;
  res.json();
  console.log("Usuário cadastrado: ");
  console.log(req.body);
});

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