class Gift {
  #totalAmount = 0;

  constructor(totalAmount) {
    this.#totalAmount = totalAmount;
  }

  getTotalAmount() {
    return this.#totalAmount;
  }
}

export default Gift;