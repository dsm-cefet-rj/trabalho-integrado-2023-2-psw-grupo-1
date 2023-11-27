var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var produtosRouter = require('./routes/produtos');
var carrinhoRouter = require('./routes/carrinho')
var pagamentoRouter = require('./routes/pagamento')
var carrinhoRouter = require('./routes/carrinho');
var pedidoRouter = require('./routes/pedido')

const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/pizzaria-psw";
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("conectou");
}, (err) => console.log(err));

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/produtos', produtosRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/pagamento', pagamentoRouter);
app.use('/pedido', pedidoRouter);



module.exports = app;
