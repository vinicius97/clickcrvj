var express = require('express');
var router = express.Router();
var pedidoController = require('./../controller/pedidoController');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/novo/', function(req, res) {
    pedidoController.novoPedido(req.body);
    res.end();
});

module.exports = router;
