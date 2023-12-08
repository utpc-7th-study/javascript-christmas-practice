import dataBase from '../../dataBase.js';

class Discount {
  #orderMenu;

  constructor(dateManager, orderMenu) {
    this.#orderMenu = orderMenu;
  }

  calculate() {
    const { minimumPrice } = dataBase.getDiscountPrice();
    if (this.#orderMenu.getTotalPrice() < minimumPrice) return 0;
    return this.abstractCalculateDiscount();
  }

  abstractCalculateDiscount() {
    throw new Error('서브 클래스에서만 사용 해주세요');
  }
}

export default Discount;
