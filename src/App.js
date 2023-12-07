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
}

export default App;
