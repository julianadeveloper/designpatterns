import Pagamento from "../pagamento.js";

class PagamentoCredito extends Pagamento {
  constructor(valor, gateway) {
    super(valor, gateway);
  }
  calcularTaxa() {
    return this._valor * 0.03; // Taxa de 2% para pagamento com débito
  }
  calcularDesconto() {
    return 0;
  }
}
export default PagamentoCredito;
