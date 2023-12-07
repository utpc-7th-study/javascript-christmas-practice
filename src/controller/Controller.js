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

  showOrderList(date) {
    OutputView.printDate(date);
    OutputView.printMenu(this.#user.getOrderList());
  }

  createBenefitList(date) {
    this.#user.createBenefitList(date);
  }

  showBenefitResult() {
    OutputView.printOriginalPayment(this.#user.calculateOriginalPayment());
    OutputView.printFreebie(this.#user.getFreebie());
    OutputView.printBenefitList(this.#user.getBenefitList());
    OutputView.printTotalBenefit(this.#user.calculateTotalBenefit());
    OutputView.printBadge(this.#user.getBadge());
  }
}

export default Controller;
