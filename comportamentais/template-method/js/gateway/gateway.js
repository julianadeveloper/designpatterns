class GateWay {
    constructor() {
        this.gateway = 'Gateway de Pagamento';
    }
    processarPagamento(valor) {
        console.log(`Processando pagamento de R$ ${valor}...`);
    }
}
export default GateWay;