var express = require('express');
var router = express.Router();
const lojistas = require('../models/lojistas');
const produtos = require("../models/produtos");

router.post('/logarLojista', (req, res, next) => {
  lojistas.find({email: req.body.email}).then( (loja) => {
    if(loja.length != 1){
      res.statusCode = 404;
      res.json(null);
    }else{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      loja = loja[0];
      if(loja.senha === req.body.senha){
        res.json({
          nome: loja.nome,
          endereco: loja.endereco,
          cnpj: loja.cnpj,
          telefone: loja.telefone,
          email: loja.email,
          _id: loja._id,
          produtos: [],
          firstFetched: false,
        });
      }else{
        res.json(null);
      }
    }
  })
});
router.post('/fetchProdutos', (req, res, next) => {
  let id = req.body.id_lojista;
  produtos.find({id_lojista: id}).then( (produtos) => {
    res.statusCode = 200;
    res.setHeader('Contfent-Type', 'application/json');
    res.json(produtos);
    }
  )
});

module.exports = router;