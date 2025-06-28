"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagamento = void 0;
var Pagamento = /** @class */ (function () {
    function Pagamento(valor, gateway) {
        this._valor = valor;
        this._gateway = gateway;
    }
    Pagamento.prototype.calcularTaxa = function () {
        return 0;
    };
    // Método template
    Pagamento.prototype.executarPagamento = function () {
        var valorFinal = this._valor + this.calcularTaxa() - this.calcularDesconto();
        this._gateway.processarPagamento(valorFinal);
        this.notificarPagamento(valorFinal);
    };
    Pagamento.prototype.notificarPagamento = function (valor) {
        setTimeout(function () {
            console.log("Pagamento no valor de R$ ".concat(valor, " confirmado."));
        }, 3000);
    };
    return Pagamento;
}());
exports.Pagamento = Pagamento;
