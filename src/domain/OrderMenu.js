class OrderMenu {
  #orderMenus;

  constructor(orderMenu) {
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
}

export default OrderMenu;
