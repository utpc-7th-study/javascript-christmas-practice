import dataBase from '../dataBase.js';

const ERROR_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

class MenuOrderItem {
  #menuName;
  #menuAmount;

  constructor(menuName, menuAmount) {
    this.#validate(menuName, menuAmount);

    this.#menuName = menuName;
    this.#menuAmount = menuAmount;
  }

  getMenuName() {
    return this.#menuName;
  }

  getMenuAmount() {
    return Number(this.#menuAmount);
  }

  #validate(menuName, menuAmount) {
    this.#validateNumberType(menuAmount);
    this.#validateIncludeMenu(menuName);
  }

  #validateNumberType(menuAmount) {
    const isNotValid = !/^[0-9]+$/.test(menuAmount);

    if (isNotValid) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  #validateIncludeMenu(menuName) {
    const menuDataBase = Object.values(dataBase.getMenus()).map(({ menuName }) => menuName);

    if (!menuDataBase.includes(menuName)) {
      throw new Error(ERROR_MESSAGE);
    }
  }
}

export default MenuOrderItem;
