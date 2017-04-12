module.exports = (app) => {
    var usuarioDao = app.daos.usuarioDao;

    this.buscaUsuarioPorId = (id) => {
        return usuarioDao.buscaUsuarioPorId(id);
    };

    this.cadastraNovoUsuario = (atributos) => {
        usuarioDao.criaUsuario(atributos);
    };
};


