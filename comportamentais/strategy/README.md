# Strategy Design Pattern

O padrão de design comportamental **Strategy** permite que você defina uma família de algoritmos, encapsule cada um deles e os torne intercambiáveis. Ele permite que o algoritmo varie independentemente dos clientes que o utilizam.

## Características Principais

- **Encapsulamento de Algoritmos**: Cada estratégia é implementada como uma classe separada.
- **Intercambiabilidade**: Você pode trocar algoritmos em tempo de execução sem alterar o código do cliente.
- **Redução de Condicionais**: Evita o uso excessivo de estruturas condicionais como `if` ou `switch`.

## Estrutura

1. **Context**: Mantém uma referência para o objeto Strategy e delega a execução do algoritmo.
2. **Strategy**: Interface comum para todas as estratégias.
3. **Concrete Strategies**: Implementações específicas da interface Strategy.

## Exemplo de Código

```javascript
// Strategy Interface
class PaymentStrategy {
    pay(amount) {
        throw new Error("Method 'pay()' must be implemented.");
    }
}

// Concrete Strategy 1
class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Pagamento de ${amount} realizado com cartão de crédito.`);
    }
}

// Concrete Strategy 2
class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Pagamento de ${amount} realizado via PayPal.`);
    }
}

// Context
class PaymentContext {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executePayment(amount) {
        this.strategy.pay(amount);
    }
}

// Uso
const context = new PaymentContext();

context.setStrategy(new CreditCardPayment());
context.executePayment(100);

context.setStrategy(new PayPalPayment());
context.executePayment(200);
```

## Quando Usar

- Quando você tem várias variações de um algoritmo.
- Quando deseja evitar código complexo com muitos condicionais.
- Quando deseja tornar o código mais flexível e extensível.

## Benefícios

- Facilita a manutenção e extensão do código.
- Promove o princípio de responsabilidade única.
- Permite a troca de algoritmos sem alterar o código do cliente.

## Desvantagens

- Pode aumentar a complexidade inicial do sistema.
- Requer a criação de várias classes para cada estratégia.

## Referências

- [Refactoring Guru - Strategy](https://refactoring.guru/design-patterns/strategy)
- [Wikipedia - Strategy Pattern](https://en.wikipedia.org/wiki/Strategy_pattern)

