class Email {
    static sendEmail(observer, message) {
      console.log(`📧 Sending email to ${observer.name} <${observer.email}>: "${message}"`);
    }
  }
  
  export default Email;
  