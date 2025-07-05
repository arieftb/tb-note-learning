export class Name {
  constructor (value) {
    this.validate(
      value
    );

    this.value = value;
  }

  validate (value) {
    if (!value) {
      throw new Error('Name cannot be empty');
    }
  }
}