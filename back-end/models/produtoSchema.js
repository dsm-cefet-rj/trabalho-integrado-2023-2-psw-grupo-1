const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = (...args) => import('normalize-mongoose').then(({default: fetch}) => fetch(...args));

const produtoSchema = new Schema({
    "nome": {
        type: String,
        required: true
    },
    "valor": {
        type: Number,
        required: true
    },
    "descricao": {
        type: String,
        required: true
    },
    "imagem": {
        type: String,
        required: true
    }
});

produtoSchema.plugin(normalize)

var Produtos = mongoose.model('Produtos', produtoSchema);

module.exports = Produtos;