import OutputView from '../views/OutputView.js';
import User from '../domains/User.js';

class Controller {
  #user;

  constructor() {
    this.#user = new User();
    OutputView.printStartMessage();
  }

  order(menuList) {
    menuList.forEach((menu) => {
      const [name, quantity] = menu;
      this.#user.order(name, quantity);
    });
  }

  createBenefitList(date) {
    this.#user.createBenefitList(date);
  }
}

export default Controller;
