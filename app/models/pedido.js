var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itensPedidoSchema = new Schema({
    item: String,
    quantidade: String
});

var pedidoSchema = new Schema({
    usuario: String,
    itens: [itensPedidoSchema],
    status: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pedido', pedidoSchema);


/*
{
    "usuario": "Vinicius",
    "itens": [{
        "item": "Budweiser"
    },{
        "item": "Brahma"
    }]
}*/
