class ChristmasDdayEvent {
  #date;
  #discount;

  constructor(date) {
    this.#validate(date);
    this.#date = date;
    this.#discount = 1000;
  }
  #validate(date) {
    if (date > 25) console.log('[ERROR]');
  }
  calculateDiscount() {
    const additionalDiscount = this.#date * 100;
    const discount = this.#discount + additionalDiscount - 100;

    return discount;
  }
}

const aa = new ChristmasDdayEvent(26);
console.log(aa.calculateDiscount());
