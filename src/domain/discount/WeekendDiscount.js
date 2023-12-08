import dataBase from '../../dataBase.js';
import Discount from './Discount.js';

class WeekendDiscount extends Discount {
  #dateManager;
  #orderMenu;

  constructor(dateManager, orderMenu) {
    super(dateManager, orderMenu);
    this.#dateManager = dateManager;
    this.#orderMenu = orderMenu;
  }

  abstractCalculateDiscount() {
    const isWeekend = this.#dateManager.isWeekend();
    if (!isWeekend) return 0;

    const discountMenus = this.#getWeekendDiscountMenu();

    return this.#totalDiscountPrice(discountMenus);
  }

  #getWeekendDiscountMenu() {
    return Object.values(dataBase.getMenus())
      .filter(({ category }) => category === 'mainDish')
      .map(({ menuName }) => menuName);
  }

  #totalDiscountPrice(discountMenus) {
    const userMenu = this.#orderMenu.getMenus();

    return userMenu
      .filter(({ menuName }) => discountMenus.includes(menuName))
      .reduce((acc, { menuAmount }) => acc + menuAmount * 2023, 0);
  }
}
export default WeekendDiscount;
