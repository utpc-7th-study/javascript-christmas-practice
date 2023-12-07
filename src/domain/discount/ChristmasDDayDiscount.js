import Discount from './Discount.js';

class ChristmasDDayDiscount extends Discount {
  #dateManager;

  constructor(dateManager, orderMenu) {
    super(dateManager, orderMenu);
    this.#dateManager = dateManager;
  }

  abstractCalculateDiscount() {}
}

export default ChristmasDDayDiscount;
