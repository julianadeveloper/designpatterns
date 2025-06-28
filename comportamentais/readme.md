# Strategy Pattern

O padrão de projeto Strategy é um padrão comportamental que permite definir uma família de algoritmos, encapsulá-los e torná-los intercambiáveis. Ele permite que o algoritmo mude independentemente dos clientes que o utilizam.

## Quando usar?

Use o padrão Strategy quando você tiver várias variações de um algoritmo e quiser evitar código duplicado. Ele é útil quando você deseja que o comportamento de um objeto seja configurável em tempo de execução.

## Estrutura

O padrão Strategy consiste em três componentes principais:

1. **Context**: A classe que utiliza o algoritmo. Ela mantém uma referência a um objeto Strategy.
2. **Strategy**: Uma interface comum para todos os algoritmos.
3. **Concrete Strategies**: Implementações específicas da interface Strategy.

## Exemplo em JavaScript

Aqui está um exemplo simples de como implementar o padrão Strategy em JavaScript:

```javascript
// Interface Strategy
class Strategy {
    execute(a, b) {
        throw new Error("Método execute deve ser implementado");
    }
}

// Concrete Strategies
class AddStrategy extends Strategy {
    execute(a, b) {
        return a + b;
    }
}

class SubtractStrategy extends Strategy {
    execute(a, b) {
        return a - b;
    }
}

class MultiplyStrategy extends Strategy {
    execute(a, b) {
        return a * b;
    }
}

// Context
class Calculator {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(a, b) {
        return this.strategy.execute(a, b);
    }
}

// Uso
const calculator = new Calculator(new AddStrategy());
console.log(calculator.calculate(5, 3)); // Saída: 8

calculator.setStrategy(new SubtractStrategy());
console.log(calculator.calculate(5, 3)); // Saída: 2

calculator.setStrategy(new MultiplyStrategy());
console.log(calculator.calculate(5, 3)); // Saída: 15
```

## Benefícios

- Facilita a extensão de novos algoritmos sem modificar o código existente.
- Promove o princípio de "Open/Closed" (aberto para extensão, fechado para modificação).

## Considerações

- Pode aumentar a complexidade do código devido à criação de várias classes.
- Certifique-se de que os algoritmos compartilhem uma interface comum para garantir intercambialidade.

O padrão Strategy é uma excelente escolha para cenários onde você precisa alternar entre diferentes comportamentos ou algoritmos de forma flexível.