class Freebie {
  #name;
  #prize;
  #requirements;

  constructor(name, prize, requirements) {
    this.#name = name;
    this.#prize = prize;
    this.#requirements = requirements;
  }

  satisfy(payment) {
    return this.#requirements(payment);
  }

  getPrize() {
    const { name, quantity } = this.#prize;
    return [name, quantity];
  }
}

export default Freebie;
