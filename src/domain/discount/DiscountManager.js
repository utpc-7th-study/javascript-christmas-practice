import ChristmasDDayDiscount from './ChristmasDDayDiscount.js';

class DiscountManager {
  #dateManager;
  #orderMenu;

  constructor({ dateManager, orderMenu }) {
    this.#dateManager = dateManager;
    this.#orderMenu = orderMenu;
  }

  recommendDiscount() {
    this.#calculateChristmasDDayDiscount();
    {
      christmasDDayDiscount: this.#calculateChristmasDDayDiscount();
    }
  }

  #calculateChristmasDDayDiscount() {
    const result = new ChristmasDDayDiscount(this.#dateManager, this.#orderMenu).calculate();
    return result;
  }
}

export default DiscountManager;
