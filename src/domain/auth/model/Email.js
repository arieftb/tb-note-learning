export class Email {
  constructor (value) {
    this.validate(value);
    this.value = value;
  }

  validate (value) {
    if (!value) {
      throw new Error('Email cannot be empty');
    }

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(value)) {
      throw new Error('Email is not valid');
    }
  }
}
