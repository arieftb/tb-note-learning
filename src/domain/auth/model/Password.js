export class Password {
  constructor (value) {
    this.validate(
      value
    );
    this.value = value;
  }

  validate (
    value
  ) {
    if (!value) {
      throw new Error('Password cannot be empty');
    }
    if (value.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
  }
}