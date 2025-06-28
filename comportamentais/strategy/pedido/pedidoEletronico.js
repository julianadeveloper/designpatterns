/**
 * Representa um tipo específico de pedido para eletrônicos, estendendo a classe base Pedido.
 * @class PedidoEletronicos
 * @extends Pedido
 */
import Pedido from "./pedido.js";

class PedidoEletronicos extends Pedido {
    constructor() {
        super();
        this._setor = 'Eletronicos';
    }
    get setor() {
        return this._setor;
    }
    set setor(setor) {
        this._setor = setor;
    }
}
export default PedidoEletronicos;