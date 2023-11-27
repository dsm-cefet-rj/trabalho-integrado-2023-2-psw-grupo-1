const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = (...args) => import('normalize-mongoose').then(({default: fetch}) => fetch(...args));

const pagamentoSchema = new Schema({
    "valorPagamento": {
        type: Number,
        required: true
    },
    "formaPagamento": {
        type: String,
        required: true
    },
    "idCarrinho": {
        type: String,
        required: true
    }
});

pagamentoSchema.plugin(normalize)

var Pagamento = mongoose.model('Pagamento', pagamentoSchema);

module.exports = Pagamento;