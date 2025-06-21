export class Name {
  constructor (value) {
    if (!value) {
      throw new Error('Name cannot be empty');
    }

    this.value = value;
  }
}