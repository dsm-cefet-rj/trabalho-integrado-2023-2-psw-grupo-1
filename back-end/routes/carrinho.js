var express = require('express');
var router = express.Router();
const Carrinho = require('../models/carrinhoSchema');

router.route('/')
.get((req, res, next) => {

    Carrinho.find({})
        .then((carrinhosDoBanco) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(carrinhosDoBanco);
        })
        .catch((err) => next(err));
})
.post((req, res, next) => {
    Carrinho.create(req.body)
    .then((carrinho) => {
        console.log('carrinho criado', carrinho);
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.json(carrinho);
    })
    .catch((err) => next(err));
});

router.route('/:id')
.delete((req, res, next) => {
    Carrinho.deleteOne({ "_id": req.params.id })
    .then((carrinho) => {
        console.log('carrinho excluído', carrinho);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(carrinho);
    })
    .catch((err) => next(err));
});

module.exports = router;
