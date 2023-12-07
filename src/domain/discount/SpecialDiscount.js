import Discount from './Discount.js';

class SpecialDiscount extends Discount {
  #dateManager;

  constructor(dateManager, orderMenu) {
    super(dateManager, orderMenu);
    this.#dateManager = dateManager;
  }

  abstractCalculateDiscount() {
    const data = [3, 10, 17, 24, 25, 31];
    const visitDate = this.#dateManager.getVisitDate();

    return data.includes(visitDate) ? 1000 : 0;
  }
}

export default SpecialDiscount;
