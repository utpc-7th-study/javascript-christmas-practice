import ChristmasDDayDiscount from './ChristmasDDayDiscount.js';
import WeekendDiscount from './WeekendDiscount.js';
import WeekDayDiscount from './WeekDayDiscount.js';

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
    };
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
}

export default DiscountManager;
