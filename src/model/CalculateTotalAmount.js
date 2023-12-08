import { parseData } from '../utils/ParseData.js';
import { menuTemplate } from '../constants/event.js';

class CalculateTotalAmount {
  #menus;
  #discount;

  constructor(menus, discount) {
    this.#menus = menus;
    this.#discount = discount;
  }

  calculateTotalPurchase() {
    const parsedMenus = parseData(this.#menus);
    const totalPurchase = parsedMenus.reduce((acc, menu) => {
      return acc + menuTemplate.get(menu[0]) * menu[1];
    }, 0);

    return totalPurchase;
  }

  calculateAfterBenefits() {
    const totalAfterBenefits = this.calculateTotalPurchase() - this.#discount;

    return totalAfterBenefits;
  }
}
