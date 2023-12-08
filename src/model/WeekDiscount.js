import { parseData } from '../utils/ParseData.js';

class WeekDiscount {
  #date;
  #menus;
  constructor(date, menus) {
    this.#date = date;
    this.#menus = menus;
  }

  weekDayDsicount(menus = []) {
    const parsedMenus = parseData(this.#menus);
    //상수화 후 파라미터로 전달할 것.
    const desertTemplate = new Map([
      ['초코케이크', 15000],
      ['아이스크림', 5000],
    ]);
    let discount = 0;
    desertTemplate.forEach((quantity, menu) => {
      parsedMenus.forEach((data) => {
        if (data.includes(menu)) discount += 2023 * data[1];
      });
    });
    return discount;
  }

  weekendDsicount(menus = []) {
    const parsedMenus = parseData(this.#menus);
    //상수화 후 파라미터로 전달할 것.
    const desertTemplate = new Map([
      ['초코케이크', 15000],
      ['아이스크림', 5000],
    ]);
    let discount = 0;
    desertTemplate.forEach((quantity, menu) => {
      parsedMenus.forEach((data) => {
        if (data.includes(menu)) discount += 2023 * data[1];
      });
    });
    return discount;
  }
}

const aa = new WeekDiscount(10, '아이스크림-2,초코케이크-1');

aa.weekDayDsicount();
