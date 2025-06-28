class GateWay {
    gateway: string;

    constructor() {
        this.gateway = 'Gateway de Pagamento';
    }

    processarPagamento(valor: number) {
        console.log(`Processando pagamento de R$ ${valor}...`);
    }
}
export default GateWay;