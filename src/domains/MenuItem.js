class MenuItem {
  #name;
  #price;
  #category;

  constructor(name, price, category) {
    this.#name = name;
    this.#price = price;
    this.#category = category;
  }

  isWanted(name) {
    return this.#name === name;
  }

  getPrice() {
    return this.#price;
  }
}

export default MenuItem;
