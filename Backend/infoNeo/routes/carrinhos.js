var express = require('express');
var router = express.Router();
let carrinhos = require('../models/carrinhos');
let produtos = require('../models/produtos');

/* GET users listing. */
router.get('/:id', async (req, res, next) => {
  try {
    let c = await carrinhos.findById(req.params.id)

    console.log(c);

    if(c != null){
      res.statusCode = 200;
      res.json(c);
    }else{
       res.statusCode = 404;
       res.json({});
    }
  } catch (error) {
      res.statusCode = 500;
      res.json({});
      console.log(error);
  }
});

router.patch('/:id', (req, res, next) => {

});

module.exports = router;