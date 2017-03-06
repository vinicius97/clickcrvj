var Pedido = require('./../model/pedido');
var exports = module.exports = {};

exports.criaPedido = function (atributos) {
    var pedido = new Pedido(atributos);
    pedido.save();
}
exports.buscaPedidoPorId = function (id) {
    Pedido.findOne({ nome : id}).exec( function (err, pedido) {
        if(!err){
            return pedido;
        }
    })
}

exports.cancelarPedido = function (id) {
    Pedido.findOne({ nome : id}).exec( function (err, pedido) {
        if(!err){
            pedido.status = 'cancelado';
            pedido.save();
        }
    })
}