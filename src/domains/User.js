import Menu from './Menu.js';

class User {
  #orderList;

  constructor() {
    this.#orderList = [];
  }

  order(menuName, quantity) {
    this.#orderList.push([menuName, quantity]);
  }

  calculateOriginalPayment() {
    let originalPayment = 0;
    this.#orderList.forEach((order) => {
      const [menuName, quantity] = order;
      const menuList = new Menu();
      originalPayment += quantity * menuList.getPriceOf(menuName);
    });

    return originalPayment;
  }
}

export default User;
