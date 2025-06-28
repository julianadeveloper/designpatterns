import Pedido from "./pedido";
/**
 * Representa um tipo específico de pedido para móveis, estendendo a classe base Pedido.
 * @class PedidoEletronicos
 * @extends Pedido
 */
class PedidoMoveis extends Pedido {
    constructor() {
        super();
        this._setor = 'Moveis';
    }
    get setor() {
        return this._setor;
    }
    set setor(setor) {
        this._setor = setor;
    }
    
}
export default PedidoMoveis;