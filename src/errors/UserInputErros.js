export class UserInputError {
  #TEMPLETE = '[ERROR]';

  constructor(message) {
    this.message = `${this.#TEMPLETE} ${message}`;
  }
}

export class VisitDateInputError extends UserInputError {}
export class OrderMenuInputError extends UserInputError {}
