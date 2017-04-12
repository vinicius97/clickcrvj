var express = require('express');
var router = express.Router();

//rotas
/*
var estabelecimentoRoute = require('./app/service/estabelecimentoService');
var pedidosRoute = require('./app/service/pedidosService');
var produtosRoute = require('./app/service/produtosService');
var usuariosRoute = require('./app/service/usuariosService');
*/
module.exports = (app) => {
    app.use('/estabelecimento', require('./app/services/estabelecimentoService'));
    app.use('/pedido', require('./app/services/pedidosService'));
    app.use('/produto', require('./app/services/produtosService'));
    app.use('/usuario', require('./app/services/usuariosService'));
}



