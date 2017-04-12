var express = require('express');
var router = express.Router();

module.exports = (app) => {
    var usuarioController = app.controllers.usuarioController;

    app.get('/:id', function (req, res) {
        res.send(usuarioController.buscaUsuarioPorId(req.params.id));
    });

    app.post('/novo/', function (req, res) {
        usuarioController.cadastraNovoUsuario(req.body);
        res.end();
    });
}