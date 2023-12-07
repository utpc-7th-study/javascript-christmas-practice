import Menu from './Menu.js';
import EventList from './EventLIst.js';
import BadgeList from './BadgeList.js';

class User {
  #orderList;
  #benefitList;
  #freebie;

  constructor() {
    this.#orderList = [];
    this.#benefitList = [];
    this.#freebie = '없음';
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
    if (originalPayment < 10000) return;

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

  #calculateTotalDiscount() {
    let totalDiscount = 0;
    this.#benefitList.forEach((benefit) => {
      const [_, amount] = benefit;
      totalDiscount += amount;
    });

    return totalDiscount;
  }

  calculateTotalBenefit() {
    let totalBenefit = this.#calculateTotalDiscount();

    if (this.#freebie !== '없음') totalBenefit += 25000;

    return totalBenefit;
  }

  calculateTotalPayment() {
    const originalPayment = this.calculateOriginalPayment();
    const totalDiscount = this.#calculateTotalDiscount();

    return originalPayment - totalDiscount;
  }

  getBadge() {
    const totalBenefit = this.calculateTotalBenefit();

    const badges = new BadgeList();
    return badges.choose(totalBenefit);
  }

  getOrderList() {
    return this.#orderList;
  }
}

export default User;
