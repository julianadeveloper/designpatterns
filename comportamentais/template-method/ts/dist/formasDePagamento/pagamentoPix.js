"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pagamento_js_1 = require("../pagamento/pagamento.js");
class PagamentoPix extends pagamento_js_1.Pagamento {
    constructor(valor, gateway) {
        super(valor, gateway);
    }
    calcularDesconto() {
        return this._valor * 0.05;
    }
}
exports.default = PagamentoPix;
