var express = require('express');
var router = express.Router();
let carrinhos = require('../models/carrinhos');
let produtos = require('../models/produtos');

/* GET users listing. */
router.get('/:id', async (req, res, next) => {
  try {
    let c = await carrinhos.findById(req.params.id).populate({path: 'produtos.produto', model: produtos});

    let filtrado = c.produtos.filter( (prod) => {
      if(prod.produto != null){ return true }
    });
    
    if(c.produtos.length != filtrado.length){
      await carrinhos.findByIdAndUpdate(req.params.id, {produtos: filtrado});
    }

    if(c != null){
      res.statusCode = 200;
      res.json(filtrado);
    }else{
       res.statusCode = 404;
       res.json({});
    }
  } catch (error) {
      res.statusCode = 500;
      console.log(error);
  }
});

router.patch('/:id', (req, res, next) => {
  carrinhos.findByIdAndUpdate(req.params.id, {produtos: filtrado})
  .then(() => {
    res.statusCode = 200;
    res.json({});
  }).catch( (err) => {
    res.statusCode = 500;
    console.log(err);
  })
});

module.exports = router;