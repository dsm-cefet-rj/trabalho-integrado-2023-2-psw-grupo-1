var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const Produtos = require('../models/produtoSchema');

//router.use(bodyParser);

router.route('/')
.get((req, res, next) => {

    Produtos.find({})
        .then((produtosBanco) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(produtosBanco);
        }, (err => next(err)))
        .catch((err) => next(err))
})
.post((req, res, next) => {
    Produtos.create(req.body)
    .then((produto) => {
        console.log('produto criado ', produto);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(produto);
    }, (err => next(err)))
    .catch((err) => next(err))
})


module.exports = router;