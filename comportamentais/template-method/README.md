# Template Method Design Pattern

O padrão de projeto Template Method é um padrão comportamental que define a estrutura de um algoritmo em uma classe base, permitindo que as subclasses implementem partes específicas do algoritmo sem alterar sua estrutura geral. Esse padrão é útil quando você possui um conjunto de operações similares, mas com variações em alguns passos.

## Exemplo: Gateway de Pagamento

Neste exemplo, implementaremos um gateway de pagamento que suporta os tipos de pagamento: crédito, débito e PIX. Usaremos o Template Method para estruturar o processo de pagamento, garantindo que os passos principais sejam consistentes, enquanto cada tipo de pagamento implementa suas particularidades.

### Benefícios do Template Method

- **Reutilização de Código**: A lógica comum é definida na classe base, evitando duplicação de código.
- **Flexibilidade**: Permite que subclasses personalizem partes específicas do algoritmo.
- **Consistência**: Garante que o fluxo geral do algoritmo seja mantido.

O padrão Template Method é uma excelente escolha para cenários onde há variações em partes específicas de um processo, mas a estrutura geral deve permanecer consistente.