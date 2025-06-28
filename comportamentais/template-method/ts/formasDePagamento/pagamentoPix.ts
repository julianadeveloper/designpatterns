import { Pagamento } from "../pagamento/pagamento.js";

class PagamentoPix extends Pagamento {
    constructor(valor: number, gateway: any) {
        super(valor, gateway);
    }
    calcularDesconto(): number {
        return this._valor * 0.05;
    }
}

export default PagamentoPix;