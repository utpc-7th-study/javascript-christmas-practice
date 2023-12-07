import ChristmasDDayDiscount from './ChristmasDDayDiscount.js';
import WeekendDiscount from './WeekendDiscount.js';
import WeekDayDiscount from './WeekDayDiscount.js';
import SpecialDiscount from './SpecialDiscount.js';
import FreeGiftDiscount from './FreeGiftDiscount.js';

class DiscountManager {
  #dateManager;
  #orderMenu;

  constructor({ dateManager, orderMenu }) {
    this.#dateManager = dateManager;
    this.#orderMenu = orderMenu;
  }

  recommendDiscount() {
    return {
      christmasDDayDiscount: this.#calculateChristmasDDayDiscount(),
      weekDayDiscount: this.#calculateWeekDayDiscount(),
      weekendDiscount: this.#calculateWeekendDiscount(),
      specialDiscount: this.#calculateSpecialDiscount(),
      freeGiftDiscount: this.#calculateFreeGiftDiscount(),
    };
  }

  getBadge() {
    const totalProfit = Object.values(this.recommendDiscount());
    const totalProfitPrice = totalProfit.reduce((a, c) => a + c, 0);

    if (totalProfitPrice >= 20000) return '별';
    if (totalProfitPrice >= 10000) return '트리';
    if (totalProfitPrice >= 5000) return '산타';
  }

  #calculateChristmasDDayDiscount() {
    const result = new ChristmasDDayDiscount(this.#dateManager, this.#orderMenu).calculate();
    return result;
  }

  #calculateWeekDayDiscount() {
    const result = new WeekDayDiscount(this.#dateManager, this.#orderMenu).calculate();
    return result;
  }

  #calculateWeekendDiscount() {
    const result = new WeekendDiscount(this.#dateManager, this.#orderMenu).calculate();
    return result;
  }

  #calculateSpecialDiscount() {
    const result = new SpecialDiscount(this.#dateManager, this.#orderMenu).calculate();
    return result;
  }

  #calculateFreeGiftDiscount() {
    const result = new FreeGiftDiscount(this.#dateManager, this.#orderMenu).calculate();
    return result;
  }
}

export default DiscountManager;
