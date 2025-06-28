"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GateWay {
    constructor() {
        this.gateway = 'Gateway de Pagamento';
    }
    processarPagamento(valor) {
        console.log(`Processando pagamento de R$ ${valor}...`);
    }
}
exports.default = GateWay;
