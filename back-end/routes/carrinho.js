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
        console.log(carrinho);
        if (carrinho != null) {
            Carrinho.findOneAndUpdate({ "_id": req.body.id }, req.body)
            .then((carrinho) => {
                console.log('carrinho criado', carrinho);
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.json(carrinho);
            })
        } else {
            Carrinho.create(req.body)
            .then((carrinho) => {
                console.log('carrinho criado', carrinho);
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.json(carrinho);
            })
        }
    })
    // let carrinho_atual = Carrinho.find({ "_id": "123" });
    // console.log(carrinho_atual);
    // if (carrinho_atual._id) 
    //     Carrinho.create(req.body)
    //     .then((carrinho) => {
    //         console.log('carrinho criado', carrinho);
    //         res.statusCode = 201;
    //         res.setHeader('Content-Type', 'application/json');
    //         res.json(carrinho);
    //     })
    //     .catch((err) => next(err));
    // else 
    //     Carrinho.findOneAndUpdate({ "_id": req.body.id }, req.body)
    // .then((carrinho) => {
    //     console.log('carrinho criado', carrinho);
    //     res.statusCode = 201;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.json(carrinho);
    // })
    // .catch((err) => next(err));
});

router.route('/:id')
.put((req, res, next) => {
    Carrinho.findOneAndUpdate({ "_id": req.params.id }, req.body)
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
