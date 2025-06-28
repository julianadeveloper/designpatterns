"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pagamentoCredito_1 = __importDefault(require("./formasDePagamento/pagamentoCredito"));
const pagamentoPix_1 = __importDefault(require("./formasDePagamento/pagamentoPix"));
const gateway_1 = __importDefault(require("./gateway/gateway"));
const gateway = new gateway_1.default();
const pedido1 = new pagamentoPix_1.default(500, gateway);
pedido1.executarPagamento();
const pedido3 = new pagamentoCredito_1.default(500, gateway);
pedido3.executarPagamento();
