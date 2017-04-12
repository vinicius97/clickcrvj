module.exports = (app) => {
    var Pedido = app.models.pedido;

    this.criaPedido = (atributos) => {
        var pedido = new Pedido(atributos);
        pedido.save();
    }
    this.buscaPedidoPorId = (id)  => {
        Pedido.findOne({ nome : id}).exec( function (err, pedido) {
            if(!err){
                return pedido;
            }
        })
    }

    this.cancelarPedido = (id) =>  {
        Pedido.findOne({ nome : id}).exec( function (err, pedido) {
            if(!err){
                pedido.status = 'cancelado';
                pedido.save();
            }
        })
    }
}