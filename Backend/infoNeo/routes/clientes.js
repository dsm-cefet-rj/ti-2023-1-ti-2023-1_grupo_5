var express = require('express');
var router = express.Router();
const clientes = require('../models/clientes');
const carrinhos = require('../models/carrinhos');

const bodyParser = require('body-parser');
var passport = require('passport');
var authenticate = require('../authenticate');

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
  let carrinho  = {
    produtos    : []
  };
  let cliente   = {
    username    : req.body.username,
    idCarrinho  : null
  };
  carrinhos.create(carrinho).then( carr => {
    cliente.idCarrinho = carr._id;
    clientes.register(new clientes(cliente), req.body.password, (err, cliente) => {
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
  });
});

router.route('/login').options((req, res) => { res.sendStatus(200); })
router.post('/login', passport.authenticate('local'), (req, res) => {
  var token = authenticate.getToken({username: req.user.username});
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  //res.setHeader('Authorization', 'json');

  let c = {
    _id   : req.user._id,
    email : req.user.username,
    idCarrinho  : req.user.idCarrinho,
    token : token
  };

  res.json(c);
});

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  } else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
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
