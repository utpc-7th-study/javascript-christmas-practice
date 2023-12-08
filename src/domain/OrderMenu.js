import dataBase from '../dataBase.js';
import MenuOrderItem from './MenuOrderItem.js';

const ERROR_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

// OrderMenuManager
class OrderMenu {
  #orderMenus = [];

  constructor(orderMenu) {
    this.#validate(orderMenu);
    this.#orderMenus = this.#generateOrderMenuItems(orderMenu);
  }

  getMenus() {
    const result = this.#orderMenus.map((menuItem) => {
      return { menuName: menuItem.getMenuName(), menuAmount: menuItem.getMenuAmount() };
    });

    return result;
  }

  getTotalPrice() {
    const menuNames = this.#orderMenus.map((order) => order.getMenuName());
    const menuAmount = this.#orderMenus.map((order) => order.getMenuAmount());

    const menuPriceList = Object.values(dataBase.getMenus())
      .filter(({ menuName }) => menuNames.includes(menuName))
      .map(({ menuAmount }) => menuAmount);

    return menuPriceList.reduce((a, c, i) => a + c * menuAmount[i], 0);
  }

  #generateOrderMenuItems(orderMenu) {
    const result = orderMenu.split(',').map((menu) => {
      const [menuName, menuAmount] = menu.split('-');
      return new MenuOrderItem(menuName, menuAmount);
    });

    return result;
  }

  #validate(orderMenu) {
    const splitOrderMenu = orderMenu.split(',').map((item) => item.split('-'));
    const menuNames = splitOrderMenu.map(([menuName]) => menuName);
    const menuAmounts = splitOrderMenu.map(([_, menuAmounts]) => Number(menuAmounts));

    this.#validateDuplicateMenuNames(menuNames);
    this.#validateMenuOderFormat(menuNames);
    this.#validateMenuAmountRange(menuAmounts);
    this.#validateOnlyBeverage(menuNames);
  }

  #validateDuplicateMenuNames(menuNames) {
    if (new Set(menuNames).size !== menuNames.length) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  #validateMenuOderFormat(menuNames) {
    const isValid = menuNames.every(([menuName]) => menuName.trim('') === menuName);

    if (!isValid) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  #validateMenuAmountRange(menuAmounts) {
    const totalMenuAmounts = menuAmounts.reduce((a, c) => a + c, 0);
    const isNotValid = menuAmounts.some((number) => number < 1);

    if (totalMenuAmounts > 20) {
      throw new Error(ERROR_MESSAGE);
    }

    if (isNotValid) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  #validateOnlyBeverage(menuNames) {
    const beverageDataBase = Object.values(dataBase.getMenus())
      .filter(({ category }) => category === 'beverage')
      .map(({ menuName }) => menuName);

    if (beverageDataBase.includes(menuNames)) {
      throw new Error(ERROR_MESSAGE);
    }
  }
}

export default OrderMenu;
