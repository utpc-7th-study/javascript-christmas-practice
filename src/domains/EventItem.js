class EventItem {
  #name;
  #discount;
  #requirements;

  constructor(name, discount, requirements) {
    this.#name = name;
    this.#discount = discount;
    this.#requirements = requirements;
  }

  satisfyRequirements(date) {
    return this.#requirements(date);
  }

  getNameAndDiscount(date) {
    return [this.#name, this.#discount(date)];
  }
}

export default EventItem;
