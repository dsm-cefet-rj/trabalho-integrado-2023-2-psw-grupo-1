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
    Carrinho.findOne({ "_id": req.body.id })
    .then((carrinho) => {
        if (carrinho != null) {
            Carrinho.findOneAndUpdate({ "_id": req.body.id }, req.body, {new: true})
            .then((carrinho2) => {
                console.log('carrinho atualizado !!!!!!!!!!!!!!!!!!!!!!', carrinho2);
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.json(carrinho2);
            })
        } else {
            Carrinho.create(req.body)
            .then((carrinho3) => {
                console.log('carrinho criado ??????????????????????????', carrinho3);
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.json(carrinho3);
            })
        }
    })
});

router.route('/:id')
.put((req, res, next) => {
    Carrinho.findOneAndUpdate({ "_id": req.params.id }, req.body, {new: true})
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
        console.log('carrinho excluído //////////////////////////', carrinho);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(carrinho);
    })
    .catch((err) => next(err));
});

module.exports = router;
