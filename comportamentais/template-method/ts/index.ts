import PagamentoCredito from "./formasDePagamento/pagamentoCredito";
import PagamentoPix from "./formasDePagamento/pagamentoPix";
import GateWay from "./gateway/gateway";


const gateway = new GateWay();

const pedido1 = new PagamentoPix(500, gateway);
pedido1.executarPagamento();

const pedido3 = new PagamentoCredito(500, gateway);
pedido3.executarPagamento();