var express = require('express');
var router = express.Router();
const pagamento = require('../models/carrinhoSchema');

router.route('/')
.get((req, res, next) => {

    pagamento.find({})
        .then((carrinhosDoBanco) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(carrinhosDoBanco);
        })
        .catch((err) => next(err));
})
.post((req, res, next) => {
    pagamento.create(req.body)
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
    pagamento.deleteOne({ "_id": req.params.id })
    .then((pagamento) => {
        console.log('pagamento excluído', pagamento);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(pagamento);
    })
    .catch((err) => next(err));
});

module.exports = router;
