class BadgeItem {
  #name;
  #requirements;

  constructor(name, requirements) {
    this.#name = name;
    this.#requirements = requirements;
  }

  canReceive(amount) {
    return this.#requirements(amount);
  }

  getName() {
    return this.#name;
  }
}

export default BadgeItem;
