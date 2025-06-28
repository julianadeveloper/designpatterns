# Template Method Design Pattern

O padrão de projeto Template Method é um padrão comportamental que define a estrutura de um algoritmo em uma classe base, permitindo que as subclasses implementem partes específicas do algoritmo sem alterar sua estrutura geral. Esse padrão é útil quando você possui um conjunto de operações similares, mas com variações em alguns passos.

## Exemplo: Gateway de Pagamento

Neste exemplo, implementaremos um gateway de pagamento que suporta os tipos de pagamento: crédito, débito e PIX. Usaremos o Template Method para estruturar o processo de pagamento, garantindo que os passos principais sejam consistentes, enquanto cada tipo de pagamento implementa suas particularidades.

### Estrutura do Código

```javascript
// Classe base com o Template Method
class PaymentProcessor {
    processPayment(amount) {
        this.validatePayment(amount);
        this.executePayment(amount);
        this.sendConfirmation();
    }

    validatePayment(amount) {
        console.log(`Validando pagamento de R$${amount}...`);
    }

    executePayment(amount) {
        throw new Error("Método executePayment deve ser implementado pela subclasse.");
    }

    sendConfirmation() {
        console.log("Enviando confirmação de pagamento...");
    }
}

// Subclasse para pagamento com cartão de crédito
class CreditPayment extends PaymentProcessor {
    executePayment(amount) {
        console.log(`Processando pagamento de R$${amount} com cartão de crédito.`);
    }
}

// Subclasse para pagamento com cartão de débito
class DebitPayment extends PaymentProcessor {
    executePayment(amount) {
        console.log(`Processando pagamento de R$${amount} com cartão de débito.`);
    }
}

// Subclasse para pagamento via PIX
class PixPayment extends PaymentProcessor {
    executePayment(amount) {
        console.log(`Processando pagamento de R$${amount} via PIX.`);
    }
}

// Exemplo de uso
const creditPayment = new CreditPayment();
creditPayment.processPayment(100);

const debitPayment = new DebitPayment();
debitPayment.processPayment(200);

const pixPayment = new PixPayment();
pixPayment.processPayment(300);
```

### Benefícios do Template Method

- **Reutilização de Código**: A lógica comum é definida na classe base, evitando duplicação de código.
- **Flexibilidade**: Permite que subclasses personalizem partes específicas do algoritmo.
- **Consistência**: Garante que o fluxo geral do algoritmo seja mantido.

O padrão Template Method é uma excelente escolha para cenários onde há variações em partes específicas de um processo, mas a estrutura geral deve permanecer consistente.