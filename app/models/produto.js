var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtoSchema = new Schema({
    nome:  String,
    marca: String,
    quantidade: String,
    tamanho:  String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Produto', produtoSchema);