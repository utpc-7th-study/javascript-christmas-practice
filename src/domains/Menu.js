import MenuItem from './MenuItem.js';
import { MENUS } from '../constants/menus.js';

class Menu {
  #menuList;

  constructor() {
    this.#menuList = [];
    this.#set();
  }

  #set() {
    Object.entries(MENUS).forEach(([category, menuList]) => {
      menuList.forEach((menu) => {
        const { name, price } = menu;
        this.#menuList.push(new MenuItem(name, price, category));
      });
    });
  }

  getPriceOf(menuName) {
    const menu = this.#menuList.filter((menu) => menu.isWanted(menuName))[0];

    return menu.getPrice();
  }

  countDessert(orderList) {
    let dessertQuantity = 0;
    orderList.forEach((menu) => {
      const [name, quantity] = menu;
      if (this.#isDessert(name)) {
        dessertQuantity += quantity;
      }
    });

    return dessertQuantity;
  }

  #isDessert(menuName) {
    const menu = this.#menuList.filter((menu) => menu.isWanted(menuName))[0];

    return menu.isDessert();
  }

  countMain(orderList) {
    let mainQuantity = 0;
    orderList.forEach((menu) => {
      const [name, quantity] = menu;
      if (this.#isMain(name)) {
        mainQuantity += quantity;
      }
    });

    return mainQuantity;
  }

  #isMain(menuName) {
    const menu = this.#menuList.filter((menu) => menu.isWanted(menuName))[0];

    return menu.isMain();
  }
}

export default Menu;
