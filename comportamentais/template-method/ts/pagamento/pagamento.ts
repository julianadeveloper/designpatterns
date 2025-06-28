export abstract class Pagamento {
  protected _valor: number;
  protected _gateway: any;

  constructor(valor: number, gateway: any) {
    this._valor = valor;
    this._gateway = gateway;
  }

  protected abstract calcularDesconto(): number;
  
  public calcularTaxa(): number {
    return 0;
  }

  // Método template
  public executarPagamento(): void {
    const valorFinal =
      this._valor + this.calcularTaxa() - this.calcularDesconto();
    this._gateway.processarPagamento(valorFinal);
    this.notificarPagamento(valorFinal);
  }

  protected notificarPagamento(valor: number): void {
    setTimeout(() => {
      console.log(`Pagamento no valor de R$ ${valor} confirmado.`);
    }, 3000);
  }
}
