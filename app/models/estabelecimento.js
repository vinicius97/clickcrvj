var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estabelecimentoSchema = new Schema({
    nome: String,
    endereco: String,
    tempoDeEntrega: String,
    telefone: String
});

module.exports = mongoose.model('Estabelecimento', estabelecimentoSchema);