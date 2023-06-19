var express = require("express");
var router = express.Router();
var authenticate = require('../authenticate');
const produtos = require("../models/produtos");
const bodyParser = require("body-parser");

/* GET produtos listing. */
router.get('/', (req, res, next) => {
  let request = {};
  if(req.query.q != undefined){
    request = {descricao: { "$regex": req.query.q, "$options": "i" }}
  }
  produtos.find(request).then((prod) => {
    res.statusCode = 200;
    res.json(prod)
  });
})

//deve ser separado por data ou ordem de criaçao
router.get( '/novidades',(req,res,next) => {
  produtos.find({}).limit(4).then((arr) => {
    if (arr) {
      if(arr.length > 0){
        res.statusCode = 200;
        res.json(arr);
      }else{
        res.statusCode = 404;
        res.json([]);
      }
    }else{
      res.statusCode = 404;
      res.json([]);
    }
  }).catch( (err) => {
    res.statusCode = 500;
    res.json([]);
    console.log(err);
  });
});

//nao consegui colocar catch pq da erro quando nao acha produto
router.get('/:id', (req, res, next) => {
  res.statusCode = 200;
  produtos.findOne({_id: req.params.id})
  .then((prod) => {
    res.statusCode = 200;
    res.json(prod);
  }, (err) => next(err))
  .catch((err) => next(err));
})

router.post('/', (req, res, next) => {
  produtos.create(req.body).then( (produto) => {
    res.statusCode = 200;
    res.setHeader('Contfent-Type', 'application/json');
    res.json(produto);
  })
});

//delete deve receber o token da loja, verificar se a loja é a que criou o produto, e se for igual, deletar
router.delete('/', (req, res, next) => {
  let id_lojista = req.body.id_lojista;
  let id_produto = req.body.id_produto;
  //retira o produto do banco e verifica se o id_lojista é igual ao passado no body
  produtos.findById(id_produto).then( prod => {
    if(prod != null){
      if(prod.id_lojista === id_lojista){
        produtos.deleteOne({ _id: id_produto }).then( (resposta) => {
          res.statusCode = 200;
          res.setHeader('Contfent-Type', 'application/json');
          res.json(resposta);
        })
      }
    }else{
      res.statusCode = 204;
      res.json([]);
    }
  })
});

router.route('/:id')
.patch(authenticate.verifyUser, (req,res,next) => {
  console.log(req.body)
  produtos.findByIdAndUpdate({_id: req.params.id}, req.body)
  .then( response => {
    console.log("produto " + req.body._id + " editado.");
    res.statusCode = 200;
    res.json(response);
  });

});





module.exports = router;
