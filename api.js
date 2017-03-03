var express = require('express');
var router = express.Router();

//rotas
/*
var estabelecimentoRoute = require('./app/service/estabelecimentoService');
var pedidosRoute = require('./app/service/pedidosService');
var produtosRoute = require('./app/service/produtosService');
var usuariosRoute = require('./app/service/usuariosService');
*/

router.use('/estabelecimento', require('./app/service/estabelecimentoService'));
router.use('/pedido', require('./app/service/pedidosService'));
router.use('/produto', require('./app/service/produtosService'));
router.use('/usuario', require('./app/service/usuariosService'));

module.exports = router;
