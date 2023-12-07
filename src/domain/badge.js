class Badge {
  #benefitAmount;

  #data = {
    star: '별',
    tree: '트리',
    santa: '산타',
  };

  constructor(benenfitAmount) {
    this.#benefitAmount = benenfitAmount;
  }

  get() {
    if (this.#benefitAmount >= 20000) return this.#data.santa;
    if (this.#benefitAmount >= 10000) return this.#data.tree;
    if (this.#benefitAmount >= 5000) return this.#data.star;

    return null;
  }
}

export default Badge;
