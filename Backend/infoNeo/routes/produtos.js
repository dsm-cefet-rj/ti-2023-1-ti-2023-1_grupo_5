var express = require("express");
var router = express.Router();
const produtos = require("../models/produtos");
const bodyParser = require("body-parser");

/* GET produtos listing. */
router.get('/listarProdutos', (req, res, next) => {
  produtos.find().then((prod) => {
    res.statusCode = 200;
    res.json(prod)
  });
})

router.get('/:id', (req, res, next) => {
  produtos.findOne({_id: req.params.id}).then((prod) => {
    res.statusCode = 200;
    console.log(prod)
    res.json(prod)
  });
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

router.patch('/:id', (req,res,next) => {
  produtos.findByIdAndUpdate({_id: req.params.id}, req.body)
  .then( response => {
    console.log("produto " + req.body._id + " editado.");
    res.statusCode = 200;
    res.json(response);
  });

});

module.exports = router;
