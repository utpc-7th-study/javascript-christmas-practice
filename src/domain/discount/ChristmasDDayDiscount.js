import Discount from './Discount.js';

class ChristmasDDayDiscount extends Discount {
  #dateManager;

  constructor(dateManager, orderMenu) {
    super(dateManager, orderMenu);
    this.#dateManager = dateManager;
  }

  abstractCalculateDiscount() {
    const defaultPrice = 1000;
    const pastDate = this.#dateManager.getVisitDate() - 1;

    if (pastDate >= 25) return 0;

    return pastDate * 100 + defaultPrice;
  }
}

export default ChristmasDDayDiscount;
