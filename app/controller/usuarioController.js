var usuarioDao = require('./../dao/usuarioDao');
var exports = module.exports = {};

exports.buscaUsuarioPorId = function(id){
    return usuarioDao.buscaUsuarioPorId(id);
}

exports.cadastraNovoUsuario = function(atributos){
    usuarioDao.criaUsuario(atributos);
}