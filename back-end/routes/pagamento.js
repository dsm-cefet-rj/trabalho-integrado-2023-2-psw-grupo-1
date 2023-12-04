var express = require('express');
var router = express.Router();
const pagamento = require('../models/pagamentoSchema');

router.route('/:id')
.get((req, res, next) => {;
    console.log(req.params.id)
    pagamento.find({"_id": req.params.id})
    .then((pagamento) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(pagamento);
    }, (err => next(err)))
    .catch((err) => next(err))
});

router.route('/')
.post((req, res, next) => {
    console.log(req.body)
    pagamento.create(req.body)
    .then((pagamento) => {
        console.log('Pagamento criado', pagamento);
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.json(pagamento);
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
