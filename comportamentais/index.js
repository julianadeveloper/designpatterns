import FreteComum from "./strategy-pattern/freteComum.js";
import FreteExpresso from "./strategy-pattern/freteExpresso.js";
import PedidoEletronicos from "./pedidoEletronicos.js";

const freteComum = new FreteComum();
const freteExpresso = new FreteExpresso();
const novoPedido = new PedidoEletronicos();

novoPedido.valor = 1500.00;

novoPedido.tipoFrete = freteComum;
console.log(`Valor do pedido: R$ ${novoPedido.valor}`);
console.log(`Total Comum: R$ ${novoPedido.calculaFrete()}`);

novoPedido.tipoFrete = freteExpresso;
console.log(`Total Expresso: R$ ${novoPedido.calculaFrete()}`);
