var express = require('express');
var router = express.Router();
const clientes = require('../models/clientes');
const carrinhos = require('../models/carrinhos');



const bodyParser = require('body-parser');
var passport = require('passport');
var authenticate = require('../authenticate');
const cors = require('cors');



router.post('/verificaEmail', (req, res, next) => {
  clientes.findOne({email: req.body.email}).then((cliente) => {
    console.log(cliente)
    if(cliente != null){
      //existe email
      res.statusCode = 200;
      return res.json({msg: "Email existente."});
    }else{
      //nao existe email
      res.statusCode = 204;
      return res.json({});
    }
  }).catch((error) => {
    //??
    console.log(error);
  })
  //algum tipo de erro
  //res.statusCode = 501; 
  //res.json({msg: "O servidor não soube responder à requisição."});
});

//cria usuario
router.post('/', (req, res, next) => { 

  clientes.register(new clientes({username: req.body.username}), req.body.password,
  (err, cliente) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
  } else {
      passport.authenticate('local')(req, res, () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'Registration Successful!'});
      });
    }
});
  // let conta = req.body;
  // let carrinho = {produtos: []};
  // carrinhos.create(carrinho).then( res => {
  //   conta.idCarrinho = res._id;
  //   clientes.create(conta);
  // });
  // res.statusCode = 200;
  // res.json({});
  // console.log("Cliente cadastrado: ");
  // console.log({conta});
  // });
});

router.route('/login').options((req, res) => { res.sendStatus(200); })
router.post('/login', passport.authenticate('local'), (req, res) => {
  
  var token = authenticate.getToken({username: req.username});
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({username: req.username, token: token});
});

router.post('/logarCliente', (req, res, next) => {
  clientes.findOne({email: req.body.email}).then( (cliente) => {
    if(cliente != null){
      if(cliente.senha === req.body.senha){
        //carrinhos.findById(cliente.idCarrinho).then( carr => {
          let c = {
            _id: cliente._id,
            email: cliente.email,
            tipo: "cliente",
            idCarrinho: cliente.idCarrinho,
            carrinho: []
          }
          res.statusCode = 200;//mudar
          res.setHeader('Content-Type', 'application/json');
          res.json(c);
          console.log("\nCliente " + cliente.email + " logado no site.");
        //});
        return;
      }else{
        res.statusCode = 200;//mudar 
        res.json(null);
        console.log("\nCliente " + req.body.email + " tentou logar-se com uma senha incorreta.");
        return;
      }
    }else{
      res.statusCode = 404;//mudar
      res.json(null);
      console.log("\nCliente " + req.body.email + " não encontrado no banco de dados.");
      return;
    }
  }).catch(err => {
    console.log(err);
  })
});

//router.route('/logarCliente').options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

router.post('/logarCliente', passport.authenticate('local'), (req, res) => {
  var token = authenticate.getToken({_id: req.user._id});
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
    res.json({id: req.cliente._id, token: token});
  });



//atualiza carrinho
router.patch('/patchCarrinho/:id', (req, res, next) => {
  clientes.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});


module.exports = router;
