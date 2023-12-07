import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import VisitDate from './domain/visitDate.js';

class App {
  #visitDate;

  async run() {
    OutputView.printGreeting();
    this.#readVisitDate();
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
}

export default App;
