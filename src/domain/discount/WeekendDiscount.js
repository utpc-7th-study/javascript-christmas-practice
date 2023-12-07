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

    const WeekendDiscountMenuDataBase = Object.values(dataBase.getMenus())
      .filter(({ category }) => category === 'mainDish')
      .map(({ menuName }) => menuName);

    return this.#calculateWeekdDiscount(WeekendDiscountMenuDataBase);
  }

  #calculateWeekdDiscount(WeekendDiscountMenuDataBase) {
    return this.#orderMenu
      .getMenus()
      .filter(({ menuName }) => WeekendDiscountMenuDataBase.includes(menuName))
      .reduce((acc, { menuAmount }) => acc + menuAmount * 2023, 0);
  }
}
export default WeekendDiscount;
