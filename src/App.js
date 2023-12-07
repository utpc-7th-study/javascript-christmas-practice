import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import OrderList from './domain/orderList.js';
import VisitDate from './domain/visitDate.js';

class App {
  #visitDate;

  #orderList;

  async run() {
    OutputView.printGreeting();
    await this.#readVisitDate();
    await this.#readOrder();
  }

  async #readVisitDate() {
    while (!this.#visitDate) {
      try {
        const visitDateInput = await InputView.readDate();
        this.#visitDate = new VisitDate(Number(visitDateInput));
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  async #readOrder() {
    while (!this.#orderList) {
      try {
        const orderInput = await InputView.readOrder();
        this.#orderList = new OrderList(orderInput);
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }
}

export default App;
