module.exports = (app) => {
    var Usuario = app.models.usuario;
    criaUsuario = (atributos) => {
        var usuario = new Usuario(atributos);
        usuario.save();
    };

    buscaUsuario = (query) => {
        Usuario.findOne(query).exec(function (err, usuario) {
            if (!err) {
                console.log(usuario.nome);
            }
        })
    };

    buscaUsuarioPorId = (usuarioID) => {
        var query = {};
        query._id = usuarioID;
        exports.buscaUsuario(query);
    };
}