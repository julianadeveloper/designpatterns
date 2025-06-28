 

    /**
     * Creates an instance of Pedido.
     * @param {number} valor - The value of the order.
     * @param {string} tipoFrete - The type of freight for the order.
     */

    /**
     * Gets the value of the order.
     * @returns {number} The value of the order.
     */

 class Pedido {
    constructor(valor, tipoFrete){
        this._valor = valor;
        this._tipoFrete = tipoFrete;
    }
    get valor() {
        return this._valor;
    }
    set valor(valor) {
        this._valor = valor;
    }
    get tipoFrete() {
        return this._tipoFrete;
    }
    set tipoFrete(tipoFrete) {
        this._tipoFrete = tipoFrete;
    }
    calculaFrete() {
        return this._tipoFrete.calcula(this._valor);
    }
  
}
export default Pedido;