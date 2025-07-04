import FreteComum from "./frete/freteComum.js";
import FreteExpresso from "./frete/freteExpresso.js";
import PedidoEletronicos from "./pedido/pedidoEletronico.js";

const freteComum = new FreteComum();
const freteExpresso = new FreteExpresso();
const novoPedido = new PedidoEletronicos();

novoPedido.valor = 1500.00;

novoPedido.tipoFrete = freteComum;
console.log(`Valor do pedido: R$ ${novoPedido.valor}`);
console.log(`Total Comum: R$ ${novoPedido.calculaFrete()}`);

novoPedido.tipoFrete = freteExpresso;
console.log(`Total Expresso: R$ ${novoPedido.calculaFrete()}`);
