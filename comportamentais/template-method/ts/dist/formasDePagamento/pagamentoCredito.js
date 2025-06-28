"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pagamento_js_1 = require("../pagamento/pagamento.js");
class PagamentoCredito extends pagamento_js_1.Pagamento {
    constructor(valor, gateway) {
        super(valor, gateway);
    }
    calcularTaxa() {
        return this._valor * 0.03; // Taxa de 3% para pagamento com crédito
    }
    calcularDesconto() {
        return 0;
    }
}
exports.default = PagamentoCredito;
