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

  orderResult() {
    const visitDate = this.#dateManager.getVisitDate();
    const menus = this.#orderMenu.getMenus();
    const totalPrice = this.#orderMenu.getTotalPrice();

    return { visitDate, totalPrice, menus };
  }

  recommend() {
    const info = { dateManager: this.#dateManager, orderMenu: this.#orderMenu };
    const discountManager = new DiscountManager(info);

    const profitHistory = discountManager.getProfitHisotry();
    const totalProfit = discountManager.getTotalProfit();
    const expectPrice = discountManager.getExpectPrice();
    const badgeBenefit = discountManager.getBadge();

    return { profitHistory, totalProfit, expectPrice, badgeBenefit };
  }
}

export default EventPlanner;
