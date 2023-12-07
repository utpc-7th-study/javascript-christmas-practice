import InputView from './views/InputView.js';
import Controller from './controller/Controller.js';

class App {
  async run() {
    const controller = new Controller();

    const date = await InputView.readDate();
    const menuList = await InputView.readMenus();

    controller.order(menuList);
    controller.showOrderList(date);

    controller.createBenefitList(date);
    controller.showBenefitResult();
  }
}

export default App;
