import paramType from '../lib/src/paramType.js';
import MenuPan from './MenuPan.js';
import { OrderMenuInputError } from '../errors/UserInputErros.js';

const MENU_NAME = 0;
const MENU_COUNT = 1;

export default class Order {
  #customerInputMenus;
  #menuPan = new MenuPan();

  constructor(customerInputMenus, _ = paramType(customerInputMenus, 'string')) {
    this.#validate(customerInputMenus);
    this.#customerInputMenus = customerInputMenus;
  }

  createOrderDetail() {}

  #validate(customerInputMenus, _ = paramType(customerInputMenus, 'string')) {
    this.#checkInputFormat(customerInputMenus);
    const formattedMenus = customerInputMenus.split(',');

    this.#checkHasMenu(formattedMenus);
    this.#checkMenuCount(formattedMenus);
    this.#checkDuplicateMenu(formattedMenus);
    this.#checkOnlyDrink(formattedMenus);
  }

  #checkInputFormat(customerInputMenus) {
    const orderFormatRegExp = new RegExp(/^[가-힣]+-[0-9](,[가-힣]+-[0-9])*$/);
    if (!orderFormatRegExp.test(customerInputMenus)) {
      throw new OrderMenuInputError(
        '유효하지 않은 주문입니다. 다시 입력해 주세요.',
      );
    }
  }

  #checkHasMenu(formattedMenus) {
    const isHasMenu = formattedMenus
      .map((menuAndCount) => menuAndCount.split('-')[MENU_NAME])
      .every((menu) => this.#menuPan.haveMenu(menu));

    if (!isHasMenu) {
      throw new OrderMenuInputError(
        '유효하지 않은 주문입니다. 다시 입력해 주세요.',
      );
    }
  }

  #checkMenuCount(formattedMenus) {
    const isOverMenuCount = formattedMenus
      .map((menuAndCount) => menuAndCount.split('-')[MENU_COUNT])
      .reduce((acc, cur) => acc + Number(cur), 0);

    if (isOverMenuCount > 20) {
      throw new OrderMenuInputError(
        '유효하지 않은 주문입니다. 다시 입력해 주세요.',
      );
    }
  }

  #checkDuplicateMenu(formattedMenus) {
    const isDuplicateMenu = formattedMenus.map(
      (menuAndCount) => menuAndCount.split('-')[MENU_NAME],
    );

    if (new Set(isDuplicateMenu).size !== isDuplicateMenu.length) {
      throw new OrderMenuInputError(
        '유효하지 않은 주문입니다. 다시 입력해 주세요.',
      );
    }
  }

  #checkOnlyDrink(formattedMenus) {
    const isOnlyDrink = formattedMenus
      .map((menuAndCount) => menuAndCount.split('-')[MENU_NAME])
      .map((menu) => this.#menuPan.findCategory(menu));

    if (isOnlyDrink.every((category) => category === 'drink')) {
      throw new OrderMenuInputError(
        '유효하지 않은 주문입니다. 다시 입력해 주세요.',
      );
    }
  }
}
