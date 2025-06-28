"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagamento = void 0;
class Pagamento {
    constructor(valor, gateway) {
        this._valor = valor;
        this._gateway = gateway;
    }
    calcularTaxa() {
        return 0;
    }
    // Método template
    executarPagamento() {
        const valorFinal = this._valor + this.calcularTaxa() - this.calcularDesconto();
        this._gateway.processarPagamento(valorFinal);
        this.notificarPagamento(valorFinal);
    }
    notificarPagamento(valor) {
        setTimeout(() => {
            console.log(`Pagamento no valor de R$ ${valor} confirmado.`);
        }, 3000);
    }
}
exports.Pagamento = Pagamento;
