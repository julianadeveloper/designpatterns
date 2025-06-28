# Template Method Design Pattern

O padrão de projeto Template Method é um padrão comportamental que define a estrutura de um algoritmo em uma classe base, permitindo que as subclasses implementem partes específicas do algoritmo sem alterar sua estrutura geral. Esse padrão é útil quando você possui um conjunto de operações similares, mas com variações em alguns passos.

## Exemplo: Gateway de Pagamento

Neste exemplo, implementaremos um gateway de pagamento que suporta os tipos de pagamento: crédito, débito e PIX. Usaremos o Template Method para estruturar o processo de pagamento, garantindo que os passos principais sejam consistentes, enquanto cada tipo de pagamento implementa suas particularidades.

### Exemplo do Código

```javascript
// Classe base com o Template Method
class Pagamento {
  constructor(valor, gateway) {
    this._valor = valor;
    this._gateway = gateway;
  }
  calcularTaxa() {
    return 0; // Método padrão, pode ser sobrescrito pela subclasse
  }

  calcularDesconto() {
    throw new Error(
      "O método 'calcularDesconto' deve ser implementado pela subclasse."
    );
  }
  // Método template
  executarPagamento() {
    const valorFinal =
      this._valor + this.calcularTaxa() - this.calcularDesconto();
      this._gateway.processarPagamento(valorFinal);
      this.notificarPagamento(valorFinal);
  }

  notificarPagamento(valor) {
    setTimeout(() => {
      console.log(`Pagamento no valor de R$ ${valor} confirmado.`);
    }, 3000);  }

}

//Uso
const gateway = new GateWay()
const pedido1 = new PagamentoPix(500, gateway);
pedido1.executarPagamento();

const pedido2 = new PagamentoDebito(500, gateway);
pedido2.executarPagamento();

const pedido3 = new PagamentoCredito(500, gateway);
pedido3.executarPagamento();
```

export default Pagamento;

### Benefícios do Template Method

- **Reutilização de Código**: A lógica comum é definida na classe base, evitando duplicação de código.
- **Flexibilidade**: Permite que subclasses personalizem partes específicas do algoritmo.
- **Consistência**: Garante que o fluxo geral do algoritmo seja mantido.

O padrão Template Method é uma excelente escolha para cenários onde há variações em partes específicas de um processo, mas a estrutura geral deve permanecer consistente.