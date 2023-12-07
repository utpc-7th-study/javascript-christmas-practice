import Menu from './Menu.js';
import EventList from './EventLIst.js';

class User {
  #orderList;
  #benefitList;
  #freebie;

  constructor() {
    this.#orderList = [];
    this.#benefitList = [];
    this.menuList = new Menu();
  }

  order(menuName, quantity) {
    this.#orderList.push([menuName, quantity]);
  }

  calculateOriginalPayment() {
    let originalPayment = 0;
    this.#orderList.forEach((order) => {
      const [menuName, quantity] = order;
      originalPayment += quantity * this.menuList.getPriceOf(menuName);
    });

    return originalPayment;
  }

  createBenefitList(date) {
    const originalPayment = this.calculateOriginalPayment();
    const eventList = new EventList();
    const [eventResult, freebie] = eventList.getBenefit(date, originalPayment);
    this.#freebie = freebie;
    this.#findSatisfiedMenus(eventResult);
  }

  #findSatisfiedMenus(eventList) {
    eventList.forEach((event) => {
      const [name, discount] = event;
      if (name === '평일 할인') return this.#pushWeekDayBenefit(discount);
      if (name === '주말 할인') return this.#pushWeekendBenefit(discount);
      this.#benefitList.push([name, discount]);
    });
  }

  #pushWeekDayBenefit(discount) {
    this.#benefitList.push([
      '평일 할인',
      discount * this.menuList.countDessert(this.#orderList),
    ]);
  }

  #pushWeekendBenefit(discount) {
    this.#benefitList.push([
      '주말 할인',
      discount * this.menuList.countMain(this.#orderList),
    ]);
  }
}

export default User;
