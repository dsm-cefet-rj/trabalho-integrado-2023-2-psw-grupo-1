const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const normalize = (...args) => import('normalize-mongoose').then(({ default: fetch }) => fetch(...args));

const carrinhoSchema = new Schema({
    "produtos": {
        type: Schema.Types.Array,
        ref: 'Produto', // Referência ao esquema de Produto
        required: true
    },
    "quantidade": {
        type: Number,
        required: true,
        default: 1
    },
    "valorTotal": {
        type: Number,
        required: true
    }
});

carrinhoSchema.plugin(normalize);

var Carrinho = mongoose.model('Carrinho', carrinhoSchema);

module.exports = Carrinho;
