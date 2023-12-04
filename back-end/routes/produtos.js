var express = require('express');
var router = express.Router();
const Produtos = require('../models/produtoSchema');

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
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.json(produto);
    }, (err => next(err)))
    .catch((err) => next(err))
})

router.route('/:id')
.delete((req, res, next) => {;
    console.log(req.params.id)
    Produtos.deleteOne({"_id": req.params.id})
    .then((produto) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(produto);
    }, (err => next(err)))
    .catch((err) => next(err))
})

module.exports = router;