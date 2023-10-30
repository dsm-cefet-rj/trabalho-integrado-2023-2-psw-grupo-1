const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

var Produtos = mongoose.model('Produtos', produtoSchema);

module.exports = Produtos;