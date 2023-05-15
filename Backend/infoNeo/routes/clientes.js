var express = require('express');
var router = express.Router();
const clientes = require('../models/clientes');

/* GET users listing. */
router.get('/', (req, res, next) => {
  clientes.find().then( (clientes) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(clientes);
    }
  )
});

module.exports = router;