var Usuario = require('./../model/usuario');
var exports = module.exports = {};

exports.criaUsuario = function (atributos) {
    var usuario = new Usuario(atributos);
    usuario.save();
}
exports.buscaUsuarioPorId = function (id) {
    Usuario.findOne({ nome : id}).exec( function (err, usuario) {
        if(!err){
            console.log(usuario.nome);
            return usuario.nome;
        }
    })
}