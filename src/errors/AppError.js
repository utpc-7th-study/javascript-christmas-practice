export default class AppError extends Error {
  #TEMPLETE = '[ERROR]';

  constructor(message) {
    super();
    this.message = `${this.#TEMPLETE} ${message}`;
  }
}
