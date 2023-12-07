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
    const isWeekDay = this.#dateManager.isWeekDay();
    if (!isWeekDay) return 0;

    const weekDayDiscountMenuDataBase = Object.values(dataBase.getMenus())
      .filter(({ category }) => category === 'dessert')
      .map(({ menuName }) => menuName);

    return this.#calculateWeekdDiscount(weekDayDiscountMenuDataBase);
  }

  #calculateWeekdDiscount(weekDayDiscountMenuDataBase) {
    return this.#orderMenu
      .getMenus()
      .filter(({ menuName }) => weekDayDiscountMenuDataBase.includes(menuName))
      .reduce((acc, { menuAmount }) => acc + menuAmount * 2023, 0);
  }
}
export default WeekDayDiscount;
