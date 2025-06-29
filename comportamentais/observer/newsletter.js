import Subject from "./subject.js";

class Newsletter extends Subject {
  constructor(nome) {
    super();
    this.observers = [];
    this.messages = [];
    this.nome = nome;
  }

  register(observer) {
    this.observers.push(observer);
  }

  remove(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(message) {
    console.log(`\n📢 ${this.nome} está notificando os inscritos...`);
    this.observers.forEach(observer => {
      observer.update(message);
    });
  }

  addMessage(message) {
    this.messages.push(message);
    this.notify(message);
  }
}

export default Newsletter;
