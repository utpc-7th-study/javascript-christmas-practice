import Discount from './Discount.js';

class FreeGiftDiscount extends Discount {
  #orderMenu;

  constructor(dateManager, orderMenu) {
    super(dateManager, orderMenu);
    this.#orderMenu = orderMenu;
  }

  abstractCalculateDiscount() {
    const totalPrice = this.#orderMenu.getTotalPrice();

    return totalPrice >= 120000 ? 25000 : 0;
  }
}

export default FreeGiftDiscount;
