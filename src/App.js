import InputView from './InputView.js';
import OutputView from './OutputView.js';
import EventPlanner from './domain/EventPlanner.js';

class App {
  #eventPlanner;

  constructor() {
    this.#eventPlanner = new EventPlanner();
  }

  async run() {
    OutputView.printStartMessage();

    await this.#registerVisitDateProcess();
    await this.#registerOrderMenuProcess();

    this.#orderResult();
    this.#profitResult();
  }

  async #registerVisitDateProcess() {
    while (true) {
      try {
        const visitDate = await InputView.readDate();
        this.#eventPlanner.registerVisitDate(visitDate);
        break;
      } catch ({ message }) {
        OutputView.print(message);
      }
    }
  }

  async #registerOrderMenuProcess() {
    while (true) {
      try {
        const orderMenu = await InputView.readOrderMenu();
        this.#eventPlanner.registerOrderMenu(orderMenu);
        break;
      } catch ({ message }) {
        OutputView.print(message);
      }
    }
  }

  #orderResult() {
    const { visitDate, menus, totalPrice } = this.#eventPlanner.orderResult();

    OutputView.printPreview(visitDate);
    OutputView.printMenu(menus);
    OutputView.printTotalPrice(totalPrice);
  }

  #profitResult() {
    const { profitHistory, totalProfit, expectPrice, badgeBenefit } =
      this.#eventPlanner.recommend();

    OutputView.printFreeGift(profitHistory.freeGiftDiscount);
    OutputView.printProfitHistory(profitHistory);
    OutputView.printTotalProfit(totalProfit);
    OutputView.printExpectPrice(expectPrice);
    OutputView.printBadgeBenefit(badgeBenefit);
  }
}

export default App;
