module.exports = (app) => {
    var pedidoDao = app.daos.pedidoDao;

    novoPedido = (listaDeProdutos) =>  {
        pedidoDao.criaPedido(listaDeProdutos);
    };

    cancelarPedido = (idDoPedido) => {
        pedidoDao.cancelarPedido(idDoPedido);
    };

    repetirPedido = (idDoPedido) => {

    };

    detalharPedido = (idDoPedido) => {

    };
}