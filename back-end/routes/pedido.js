var express = require('express');
var router = express.Router();
const Pedido = require('../models/pedidoSchema')

router.route('/')
.post((req,res,next)=>{
    Pedido.create(req.body)
    .then((pedido)=>{
        console.log('pedido criado', pedido);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(pedido);
    },(err => next(err)))
    .catch((err)=> next(err))
})
router.route('/:id')
.get((req, res, next) => {
    Pedido.find({ "_id": req.params.id })
    .then((pedido) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(pedido);
    })
    .catch((err) => next(err));
});

module.exports = router;