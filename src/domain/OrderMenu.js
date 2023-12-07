const ERROR_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

class OrderMenu {
  #orderMenus;

  constructor(orderMenu) {
    this.#validate(orderMenu);
    this.#orderMenus = this.#splitOrderMenu(orderMenu);
  }

  #splitOrderMenu(orderMenu) {
    const splitOrderMenuWithComma = orderMenu.split(',');

    return this.#formattedOrderMenus(splitOrderMenuWithComma);
  }

  #formattedOrderMenus(splitOrderMenuWithComma) {
    return splitOrderMenuWithComma.map((menu) => {
      const [menuName, menuAmount] = menu.split('-');

      return { menuName, menuAmount: Number(menuAmount) };
    });
  }

  #validate(orderMenu) {
    const splitOrderMenu = this.#splitOrderMenu(orderMenu);
    const menuAmounts = splitOrderMenu.map(({ menuAmount }) => menuAmount);

    this.#validateNumberType(menuAmounts);
    this.#validateMenuAmountRange(menuAmounts);
  }

  #validateNumberType(menuAmounts) {
    const isNotValid = menuAmounts.some((number) => !/^[0-9]+$/.test(number));

    if (isNotValid) {
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
}

export default OrderMenu;
