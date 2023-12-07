import MENU_DATA from '../constant/menuData.js';
import ERROR_MESSAGE from '../constant/message.js';

class Order {
  #menu;

  #price;

  #quantity;

  constructor(menuName, quantity) {
    this.#validate(menuName);
    const menuData = MENU_DATA.find((data) => data.name === menuName);
    this.#menu = menuData.name;
    this.#price = menuData.price * quantity;
    this.#quantity = quantity;
  }

  detail() {
    return {
      menu: this.#menu,
      price: this.#price,
      quantity: this.#quantity,
    };
  }

  #validate(menuName) {
    const isExist = MENU_DATA.some((data) => data.name === menuName);

    if (!isExist) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
  }
}

export default Order;
