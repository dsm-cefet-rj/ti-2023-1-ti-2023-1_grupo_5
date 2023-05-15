var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Contfent-Type', 'application/json');
  res.json([
    {
      "carrinho": "Carrinho",
    }
  ]);
});

module.exports = router;