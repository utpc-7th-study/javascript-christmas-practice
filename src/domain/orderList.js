import MAX_QUANTITY from '../constant/max.js';
import MENU_DATA from '../constant/menuData.js';
import ERROR_MESSAGE from '../constant/message.js';
import Order from './order.js';

class OrderList {
  #orders = [];

  constructor(orderInput) {
    this.#validate(orderInput);

    this.#orders = this.#convertOrderInput(orderInput).map(
      ([menu, quantity]) => new Order(menu, quantity),
    );
  }

  orderDetail() {
    return this.#orders.map((order) => {
      const { menu, quantity } = order.detail();
      return [menu, quantity];
    });
  }

  totalCost() {
    return this.#orders.reduce((total, currentOrder) => {
      const { price, quantity } = currentOrder.detail();
      return total + price * quantity;
    }, 0);
  }

  mainCount() {
    return this.#findCategoryCount('메인');
  }

  dessertCount() {
    return this.#findCategoryCount('디저트');
  }

  #findCategoryCount(findCategory) {
    const categoryCount = this.#orders.reduce((count, currentOrder) => {
      const { category, quantity } = currentOrder.detail();
      return count + (category === findCategory) * quantity;
    }, 0);

    return categoryCount;
  }

  #validate(orderInput) {
    this.#validateInputFormat(orderInput);
    this.#validateQuantity(orderInput);
    this.#validateDuplcateMenu(orderInput);
    this.#validateOnlyDrink(orderInput);
  }

  #validateInputFormat(orderInput) {
    const orders = this.#convertOrderInput(orderInput);

    orders.forEach(([menu, quantity]) => {
      const validInput = menu && quantity;
      const quantityIsNumber = !Number.isNaN(Number(quantity));

      if (!validInput || !quantityIsNumber) {
        throw new Error(ERROR_MESSAGE.INVALID_ORDER);
      }
    });
  }

  #validateDuplcateMenu(orderInput) {
    const orderMenus = this.#convertOrderInput(orderInput).map(([menu, _]) => menu);

    if (orderMenus.length !== new Set(orderMenus).size) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
  }

  #validateQuantity(orderInput) {
    const orders = this.#convertOrderInput(orderInput);
    const totalQuantity = orders.reduce((total, [_, quantity]) => total + quantity, 0);

    if (totalQuantity > MAX_QUANTITY) throw new Error(ERROR_MESSAGE.OVER_ORDER_QUANTITY);
  }

  #validateOnlyDrink(orderInput) {
    const orders = this.#convertOrderInput(orderInput);
    const categorys = new Set(
      orders
        .map(([menu, _]) => {
          const findMenu = MENU_DATA.find((data) => data.name === menu);
          return findMenu ? findMenu.category : null;
        })
        .filter(Boolean),
    );

    if (categorys.size === 1 && categorys.has('음료'))
      throw new Error(ERROR_MESSAGE.NOT_ONLY_DRINK);
  }

  #convertOrderInput(input) {
    return input.split(',').map((value) => {
      const [menu, quantity] = value
        .trim()
        .split('-')
        .map((v) => v.trim());

      return [menu, Number(quantity)];
    });
  }
}

export default OrderList;
