import { Name } from './Name.js';
import { Email } from './Email.js';
import { Password } from './Password.js';

export class Registration {
  constructor (name, email, password) {
    if (!(name instanceof Name)) {
      throw new Error('Name must be an instance of Name');
    }

    if (!(email instanceof Email)) {
      throw new Error('Email must be an instance of Email');
    }

    if (!(password instanceof Password)) {
      throw new Error('Password must be an instance of Password');
    }

    this.email = email;
    this.password = password;
    this.name = name;
  }

  getName () {
    return this.name.value;
  }

  getEmail () {
    return this.email.value;
  }

  getPassword () {
    return this.password.value;
  }
}