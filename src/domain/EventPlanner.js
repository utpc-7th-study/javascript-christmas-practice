import DateManager from './DateManager.js';
import OrderMenu from './OrderMenu.js';
import DiscountManager from './discount/DiscountManager.js';

class EventPlanner {
  #dateManager;
  #orderMenu;

  registerVisitDate(visitDate) {
    this.#dateManager = new DateManager(visitDate);
  }

  registerOrderMenu(orderMenu) {
    this.#orderMenu = new OrderMenu(orderMenu);
  }

  recommend() {
    const info = { dateManager: this.#dateManager, orderMenu: this.#orderMenu };
    const discountManager = new DiscountManager(info);

    const result = discountManager.recommendDiscount();
    // console.log(result);
  }
}

export default EventPlanner;
