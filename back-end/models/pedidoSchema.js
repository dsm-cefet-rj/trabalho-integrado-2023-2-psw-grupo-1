const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = (...args) => import('normalize-mongoose').then(({default: fetch}) => fetch(...args));

const pedidoSchema = new Schema({
    "idCarrinho":{
        type: String,
        required : true
    },
    "numeroContato":{
        type : String,
        required : true
    },
    "tempoEntrega":{
        type : Number,
        required : true
    },
    "numeroPedido":{
        type : Number,
        required : true
    },
    "statusPedido":{
        type : String,
        required : true
    }
})

pedidoSchema.plugin(normalize)

var Pedido = mongoose.model('Pedido',pedidoSchema)

module.exports = Pedido;

