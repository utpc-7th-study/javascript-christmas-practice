import InputView from './views/InputView.js';
import Controller from './controller/Controller.js';

class App {
  async run() {
    const controller = new Controller();

    const dateMenu = await InputView.readDate();
    const menuList = await InputView.readMenus();

    controller.order(menuList);
  }
}

export default App;
