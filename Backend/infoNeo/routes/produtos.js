var express = require("express");
var router = express.Router();
const produtos = require("../models/produtos");
const bodyParser = require("body-parser");

/* GET produtos listing. */
router.get('/produtos/:id_lojista', (req, res, next) => {
  let id = req.params.id_lojista;
  console.log("a")
  console.log(res.statusCode);
  // produtos.find({id_lojista: id}).then( (produtos) => {
  //   res.statusCode = 200;
  //   res.setHeader('Contfent-Type', 'application/json');
  //   res.json(produtos);
  //   }
  // )
});



router.post('/', (req, res, next) => {
  produtos.create(req.body).then( (produto) => {
    res.statusCode = 200;
    res.setHeader('Contfent-Type', 'application/json');
    res.json(produto);
  })
});

module.exports = router;
