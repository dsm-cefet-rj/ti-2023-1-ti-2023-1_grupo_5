//mongodb
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/infoneo";
const connect = mongoose.connect(url);
const cors = require('cors');


connect.then((db) => {
    console.log("conectado")
}, (err) => {
    console.log(err)
});
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var clientesRouter = require('./routes/clientes');
var carrinhosRouter = require('./routes/carrinhos');
var lojistasRouter = require('./routes/lojistas');
var produtosRouter = require('./routes/produtos');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/clientes', clientesRouter);
app.use('/carrinhos', carrinhosRouter);
app.use('/lojistas', lojistasRouter);
app.use('/produtos', produtosRouter);

module.exports = app;

