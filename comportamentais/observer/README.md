# 🧭 Design Pattern: Observer

O padrão **Observer** é um padrão de projeto **comportamental** que define uma **dependência um-para-muitos** entre objetos. Quando um objeto muda de estado, todos os seus **observadores são notificados automaticamente** e atualizados.

> Esse padrão é muito comum em sistemas de notificação, eventos, GUIs e sistemas que precisam de **atualização reativa**.

---

## 🧠 Conceito

- **Subject (Sujeito)**: é quem **mantém os observers inscritos** e **dispara notificações**.
- **Observer (Observador)**: são os objetos que desejam ser notificados quando o Subject mudar.

---
## Características Principais

- **Desacoplamento**: O objeto observado não precisa conhecer os detalhes dos observadores.
- **Reatividade**: Permite implementar sistemas que reagem automaticamente a eventos.
- **Inscrição/Dinamicidade**: Observadores podem se inscrever ou sair em tempo de execução.

## Estrutura

1. **Subject**: Interface que declara os métodos para registrar, remover e notificar observadores.
2. **ConcreteSubject**: Implementação concreta do Subject; mantém a lista de observadores.
3. **Observer**: Interface que define o método `update()` que será chamado na notificação.
4. **ConcreteObserver**: Implementação do observer que reage às notificações do subject.


## 📦 Estrutura do Projeto
```javascript
design-patterns/
├── observer/
│ ├── observer.js # Interface base dos observadores
│ ├── subject.js # Interface base do subject
│ ├── client.js # Implementação concreta de um observer (cliente)
│ ├── funcionario.js # Implementação concreta de um observer (funcionario)
│ ├── parceiro.js # Implementação concreta de um observer (parceiro)
│ ├── email.js # Simulação de um serviço de envio de e-mail
│ ├── newsletter.js # Implementação concreta de Subject (envia notificações)
│ ├── index.js # Script principal para testar o padrão
│ └── README.md # (Este arquivo)
```
## 🛠️ Como Funciona o Exemplo

1. **`Observer.js`**: define a estrutura que todo observador deve seguir:
   - Deve ter `name`, `email` e um método `update(message)`.

2. **`Subject.js`**: define a estrutura que todo sujeito (emissor) deve ter:
   - Métodos: `register()`, `remove()`, `notify()`.

3. **`Client.js`**: é uma classe concreta que estende `Observer`.
   - Quando recebe `update(message)`, chama o serviço `Email` para "enviar" uma notificação.

4. **`Email.js`**: serviço que simula o envio de um e-mail (imprimindo no console).

5. **`Newsletter.js`**: é uma implementação concreta de `Subject`.
   - Possui uma lista de observadores.
   - Envia notificações para todos eles quando uma nova mensagem é adicionada.

6. **`index.js`**: registra observadores (clientes) na newsletter e testa a notificação.

---

## Exemplo de Código

```javascript
// Observer Interface
class Observer {
    constructor(name, email) {
        this._name = name;
        this._email = email;
    }

    update(message) {
        throw new Error("Method 'update()' must be implemented.");
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }
}

// Subject Interface
class Subject {
    register() {
        throw new Error("Method 'register()' must be implemented.");
    }

    remove() {
        throw new Error("Method 'remove()' must be implemented.");
    }

    notify() {
        throw new Error("Method 'notify()' must be implemented.");
    }
}

// Serviço de envio de e-mail
class Email {
    static sendEmail(observer, message) {
        console.log(`📧 Enviando email para ${observer.name} <${observer.email}>: "${message}"`);
    }
}

// Concrete Observer
class Client extends Observer {
    update(message) {
        Email.sendEmail(this, message);
    }
}

// Concrete Subject
class Newsletter extends Subject {
    constructor(nome) {
        super();
        this.nome = nome;
        this.observers = [];
    }

    register(observer) {
        this.observers.push(observer);
    }

    remove(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notify(message) {
        console.log(`\n📢 ${this.nome} está notificando os inscritos...`);
        this.observers.forEach(observer => observer.update(message));
    }

    addMessage(message) {
        this.notify(message);
    }
}
```

## 🧪 Exemplo de Uso (index.js)

```javascript
import Client from './client.js';
import Newsletter from './newsletter.js';

const newsletter = new Newsletter("Newsletter Mensal");

const joao = new Client("João", "joao@email.com");
const maria = new Client("Maria", "maria@empresa.com");
const tech = new Client("Tech Ltda", "suporte@tech.com");

newsletter.register(joao);
newsletter.register(maria);
newsletter.register(tech);

newsletter.addMessage("Confira nossas promoções de junho!");
```

## 🖥️ Saída esperada no console:
📢 Newsletter Mensal está notificando os inscritos...
📧 Sending email to João <joao@email.com>: "Confira nossas promoções de junho!"
📧 Sending email to Maria <maria@empresa.com>: "Confira nossas promoções de junho!"
📧 Sending email to Tech Ltda <suporte@tech.com>: "Confira nossas promoções de junho!"


Referências
Refactoring Guru - Observer

Wikipedia - Observer Pattern