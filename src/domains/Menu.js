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
}

export default Menu;
