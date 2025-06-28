import  PagamentoPix from '../js/formasDePagamento/pagamentoPix.js';
import  PagamentoDebito  from '../js/formasDePagamento/pagamentoDebito.js';
import  PagamentoCredito  from '../js/formasDePagamento/pagamentoCredito.js';
import GateWay from './gateway/gateway.js';

const gateway = new GateWay()
const pedido1 = new PagamentoPix(500, gateway);
pedido1.executarPagamento();

const pedido2 = new PagamentoDebito(500, gateway);
pedido2.executarPagamento();

const pedido3 = new PagamentoCredito(500, gateway);
pedido3.executarPagamento();
