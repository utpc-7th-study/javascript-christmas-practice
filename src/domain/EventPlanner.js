import DateManager from './DateManager.js';
import OrderMenu from './OrderMenu.js';

class EventPlanner {
  #dateManager;
  #orderMenu;

  registerVisitDate(visitDate) {
    this.#dateManager = new DateManager(visitDate);
  }

  registerOrderMenu(orderMenu) {
    this.#orderMenu = new OrderMenu(orderMenu);
  }
}

export default EventPlanner;
