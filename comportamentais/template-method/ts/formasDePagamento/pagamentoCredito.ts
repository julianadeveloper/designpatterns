import { Pagamento } from "../pagamento/pagamento.js";

class PagamentoCredito extends Pagamento {
  constructor(valor: number, gateway: any) {
    super(valor, gateway);
  }

  calcularTaxa(): number {
    return this._valor * 0.03; // Taxa de 3% para pagamento com crédito
  }

  calcularDesconto(): number {
    return 0;
  }
}

export default PagamentoCredito;
