import MENU_DATA from '../constant/menuData.js';
import ERROR_MESSAGE from '../constant/message.js';

class Order {
  #menuDetail = {};

  #quantity = 0;

  constructor(menuName, quantity) {
    this.#validate(menuName);
    const menuData = MENU_DATA.find((data) => data.name === menuName);
    this.#menuDetail = menuData;
    this.#quantity = quantity;
  }

  detail() {
    const { name: menu, category, price } = this.#menuDetail;
    return { menu, category, price, quantity: this.#quantity };
  }

  #validate(menuName) {
    const isExist = MENU_DATA.some((data) => data.name === menuName);

    if (!isExist) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
  }
}

export default Order;
