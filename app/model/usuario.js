var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nome:  String,
    cpf: String,
    endereco: String,
    telefone: String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Usuario', usuarioSchema);
