import Pagamento from "../pagamento.js";

class PagamentoPix extends Pagamento {
  constructor(valor, gateway) {
    super(valor, gateway);
  }
  calcularDesconto() {
    return this._valor * 0.05;
  }
}
export default PagamentoPix;
