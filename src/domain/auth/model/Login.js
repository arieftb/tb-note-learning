import { Email } from './Email.js';
import { Password } from './Password.js';

export class Login {
  constructor (email, password) {
    this.validate(
      email,
      password,
    );
    this.email = email;
    this.password = password;
  }

  validate (
    email,
    password,
  ) {
    if (!(email instanceof Email)) {
      throw new Error('Email must be an instance of Email');
    }

    if (!(password instanceof Password)) {
      throw new Error('Password must be an instance of Password');
    }
  }

  getEmail () {
    return this.email.value;
  }

  getPassword () {
    return this.password.value;
  }
}