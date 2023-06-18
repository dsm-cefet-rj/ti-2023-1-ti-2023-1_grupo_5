//mongodb atlas user: infoneo   senha: infoneo123
const mongoose          = require("mongoose");
const passport          = require('passport');
const connectDatabase   = require("./database/db");
const cors              = require('cors');
connectDatabase();

var express             = require('express');
var app                 = express();
var path                = require('path');
var logger              = require('morgan');
var cookieParser        = require('cookie-parser');

var session             = require('express-session');
//var FileStore         = require('session-file-store')(session);

var indexRouter         = require('./routes/index');
var clientesRouter      = require('./routes/clientes');
var carrinhosRouter     = require('./routes/carrinhos');
var lojistasRouter      = require('./routes/lojistas');
var produtosRouter      = require('./routes/produtos');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
//app.use(cookieParser());

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: '12345-67890-73567-54321' 
  }));

app.use('/', indexRouter);
app.use('/clientes', clientesRouter);
app.use('/carrinhos', carrinhosRouter);
app.use('/lojistas', lojistasRouter);
app.use('/produtos', produtosRouter);

module.exports = app;

