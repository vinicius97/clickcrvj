var pedidoDao = require('./../dao/pedidoDao');
var exports = module.exports = {};

exports.novoPedido = function (listaDeProdutos) {
    pedidoDao.criaPedido(listaDeProdutos);
}

exports.cancelarPedido = function (idDoPedido) {
    pedidoDao.cancelarPedido(idDoPedido);
}

exports.repetirPedido = function (idDoPedido) {
    
}

exports.detalharPedido = function (idDoPedido) {
    
}