import paramType from '../lib/src/paramType.js';

export default class MenuPan {
  #menus = {};

  constructor() {
    this.#setCategory();
  }

  getMenuPrice(menuName, _ = paramType(menuName, 'string')) {
    if (!this.haveMenu(menuName)) {
      throw new Error('존재하지 않는 메뉴입니다.');
    }

    const category = this.findCategory(menuName);
    const { price } = this.#menus[category].find(
      ({ name }) => name === menuName,
    );

    return price;
  }

  findCategory(menuName, _ = paramType(menuName, 'string')) {
    const [category] =
      Object.entries(this.#menus).find(([category, menus]) => {
        const currentCategoryMenus = menus.map(({ name }) => name);

        return currentCategoryMenus.includes(menuName);
      }) || [];

    return category;
  }

  haveMenu(menuName, _ = paramType(menuName, 'string')) {
    return !!this.findCategory(menuName);
  }

  #setCategory() {
    this.#setMain();
    this.#setAppetizer();
    this.#setDessert();
    this.#setDrink();
  }

  #setMain() {
    this.#menus = {
      ...this.#menus,
      main: [
        { name: '티본스테이크', price: 55000 },
        { name: '바비큐립', price: 45000 },
        { name: '해산물파스타', price: 35000 },
        { name: '크리스마스파스타', price: 25000 },
      ],
    };
  }

  #setAppetizer() {
    this.#menus = {
      ...this.#menus,
      appetizer: [
        { name: '양송이수프', price: 6000 },
        { name: '타파스', price: 5500 },
        { name: '시저샐러드', price: 8000 },
      ],
    };
  }

  #setDessert() {
    this.#menus = {
      ...this.#menus,
      dessert: [
        { name: '초코케이크', price: 15000 },
        { name: '아이스크림', price: 5000 },
      ],
    };
  }

  #setDrink() {
    this.#menus = {
      ...this.#menus,
      drink: [
        { name: '제로콜라', price: 3000 },
        { name: '레드와인', price: 60000 },
        { name: '샴페인', price: 25000 },
      ],
    };
  }
}
