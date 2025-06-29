import Observer from './observer.js';
import Email from './email.js';

class Client extends Observer {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }

    update(message) {
        Email.sendEmail(this, message);
  }
}

export default Client;