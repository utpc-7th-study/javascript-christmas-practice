import dataBase from '../../dataBase.js';
import Discount from './Discount.js';

class WeekDayDiscount extends Discount {
  #dateManager;
  #orderMenu;

  constructor(dateManager, orderMenu) {
    super(dateManager, orderMenu);
    this.#dateManager = dateManager;
    this.#orderMenu = orderMenu;
  }

  abstractCalculateDiscount() {
    if (!this.#dateManager.isWeekDay()) return 0;
    const discountMenus = this.#getWeekDayDiscountMenu();

    return this.#totalDiscountPrice(discountMenus);
  }

  #getWeekDayDiscountMenu() {
    return Object.values(dataBase.getMenus())
      .filter(({ category }) => category === 'dessert')
      .map(({ menuName }) => menuName);
  }

  #totalDiscountPrice(discountMenus) {
    const userMenu = this.#orderMenu.getMenus();

    return userMenu
      .filter(({ menuName }) => discountMenus.includes(menuName))
      .reduce((acc, { menuAmount }) => acc + menuAmount * 2023, 0);
  }
}
export default WeekDayDiscount;
