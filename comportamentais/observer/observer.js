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
  
  export default Observer;
  