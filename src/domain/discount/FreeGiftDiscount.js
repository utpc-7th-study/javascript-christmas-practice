import Discount from './Discount.js';

class FreeGiftDiscount extends Discount {
  #orderMenu;

  constructor(dateManager, orderMenu) {
    super(dateManager, orderMenu);
    this.#orderMenu = orderMenu;
  }

  abstractCalculateDiscount() {
    const totalPrice = this.#orderMenu.getTotalPrice();

    if (totalPrice >= 120000) return 25000;
    return 0;
  }
}

export default FreeGiftDiscount;
