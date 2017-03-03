var express = require('express');
var router = express.Router();
var usuarioController = require('./../controller/usuarioController');

router.get('/:id', function(req, res) {
    res.send(usuarioController.buscaUsuarioPorId(req.params.id));
});

router.post('/novo/', function(req, res) {
    usuarioController.cadastraNovoUsuario(req.body);
});

module.exports = router;
