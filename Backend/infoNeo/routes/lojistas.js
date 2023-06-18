var express = require('express');
var router = express.Router();
const lojistas = require('../models/lojistas');
const produtos = require("../models/produtos");

var passport = require('passport');
var authenticate = require('../authenticateLojistas');



router.post('/', (req, res, next) => { 
  let lojista   = {
    username    : req.body.username,
    cnpj: req.body.cnpj,
    nome: req.body.nome,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    produtos: []
  };
  lojistas.register(new lojistas(lojista), req.body.password,  (err, cliente) => {
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

router.route('/login').options((req, res) => { res.sendStatus(200); })
router.post('/login', passport.authenticate('local'), (req, res) => {
  var token = authenticate.getToken({username: req.user.username});
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  let l = {
    _id   : req.user._id,
    email : req.user.username,
    cnpj: req.user.cnpj,
    nome: req.user.nome,
    endereco: req.user.endereco,
    telefone: req.user.telefone,
    firstFetched: false,
    produtos: [],
    token : token
  };

  res.json(l);
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


router.post('/verificaEmail', (req, res, next) => {
  lojistas.findOne({email: req.body.email}).then((lojista) => {
    console.log(lojista)
    if(lojista != null){
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



router.post('/logarLojista', (req, res, next) => {
  lojistas.find({email: req.body.email}).then( (loja) => {
    if(loja.length != 1){
      res.statusCode = 200;
      res.json(null);
      console.log("\nLojista inexistente no banco de dados.");
    }else{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      loja = loja[0];
      console.log(req.body.senha)
      if(loja.senha === req.body.senha){

        let lojista = {
          nome: loja.nome,
          endereco: loja.endereco,
          cnpj: loja.cnpj,
          telefone: loja.telefone,
          email: loja.email,
          _id: loja._id,
          produtos: [],
          firstFetched: false,
        };
        
        res.json(lojista);
        console.log("\nLojista logado: ");
        console.log(lojista);
      }else{
        res.json(null);
      }
    }
  })
});

router.route('/fetchProdutos')
.post(authenticate.verifyUser, (req, res, next) => {
  let id = req.body.id_lojista;
  produtos.find({id_lojista: id}).then( (produtos) => {
    if(produtos.length < 1){
      res.statusCode = 200;
      res.setHeader('Contfent-Type', 'application/json');
      res.json([]);
    }else{
      res.statusCode = 200;
      res.setHeader('Contfent-Type', 'application/json');
      res.json(produtos);
    }
  }
  )
});

router.route('/:id')
.patch(authenticate.verifyUser, (req, res, next) => {
  lojistas.findOneAndUpdate({_id: req.params.id}, req.body)
  .then(response => {
    res.statusCode = 200;
    res.json({msg: "Dados atualizados."});
    console.log("Lojista atualizado com sucesso.");
    console.log(response);
  });
})


router.route('/:id')
.delete(authenticate.verifyUser, (req, res, next) => {
  let _id = req.params.id;
  produtos.deleteMany({id_lojista: _id}).then(res => {
    console.log("\nOs produtos foram deletados com sucesso.");
    console.log( res)
  });
  lojistas.findByIdAndDelete(_id).then(res => {
    console.log("O lojista foi deletado com sucesso.");
    console.log(res)
  });
  res.statusCode = 200;
  res.json({msg: "O lojista foi deletado com sucesso."});
})

router.post('/cadastrarLojista', (req, res, next) => {
  lojistas.findOne({email: req.body.email}).then((lojista) => {
    if(lojista != null){
      res.statusCode = 200;
      return;
    }else{
      lojistas.create(req.body);
      res.statusCode = 200;
      res.json();
    }
  }).catch((error) => {
    res.statusCode = 502; 
    console.log(error);
    return;
  });
})

module.exports = router;