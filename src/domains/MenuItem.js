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

  isDessert() {
    return this.#category === '디저트';
  }

  isMain() {
    return this.#category === '메인';
  }
}

export default MenuItem;
