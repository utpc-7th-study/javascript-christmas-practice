import { parseData } from '../utils/ParseData.js';
import { calculateWeekDiscount } from '../utils/calculateDiscount.js';

class WeekDiscountEvent {
  #date;
  #menus;
  constructor(date, menus) {
    this.#date = date;
    this.#menus = menus;
  }

  #validateDate() {
    const date = this.#date % 7;
    if (date !== 1 && date % 7 !== 2) {
      if (date === 3 || this.#date === 25) {
        return 'specialWeekDay';
      }
      return 'weekDay';
    }
    return 'weekend';
  }

  whichDate() {
    const date = this.#validateDate();
    if (date === 'weekDay') return this.#weekDayDiscount();
    if (date === 'weekend') return this.#weekendDsicount();
    if (date === 'specialWeekDay')
      return this.#weekDayDiscount() + this.#specialDayDiscount();
  }

  #weekDayDiscount() {
    const parsedMenus = parseData(this.#menus);
    //상수화 후 파라미터로 전달할 것.
    const desertTemplate = new Map([
      ['초코케이크', 15000],
      ['아이스크림', 5000],
    ]);
    let discount = calculateWeekDiscount(desertTemplate, parsedMenus);

    return discount;
  }

  #weekendDsicount() {
    const parsedMenus = parseData(this.#menus);
    //상수화 후 파라미터로 전달할 것.
    const mainMenuTemplate = new Map([
      ['티본스테이크', 55000],
      ['바비큐립', 54000],
      ['해산물파스타', 35000],
      ['크리스마스파스타', 25000],
    ]);
    let discount = calculateWeekDiscount(mainMenuTemplate, parsedMenus);

    return discount;
  }

  #specialDayDiscount() {
    const discount = 1000;

    return discount;
  }
}

export default WeekDiscountEvent;
