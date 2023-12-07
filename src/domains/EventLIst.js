import EventItem from './EventItem.js';
import Freebie from './Freebie.js';
import { DISCOUNTS } from '../constants/events.js';
import { FREEBIE } from '../constants/events.js';

class EventList {
  #discountList;
  #freebie;

  constructor() {
    this.#discountList = [];
    this.#set();
  }

  #set() {
    DISCOUNTS.forEach((DISCOUNT) => {
      const { name, discount, requirements } = DISCOUNT;
      this.#discountList.push(new EventItem(name, discount, requirements));
    });

    const { name, prize, requirements } = FREEBIE;
    this.#freebie = new Freebie(name, prize, requirements);
  }

  getBenefit(date, originalPayment) {
    const result = this.#checkDiscountList(date);
    const freebie = this.#checkFreebie(originalPayment);

    return [result, freebie];
  }

  #checkDiscountList(date) {
    const result = [];
    this.#discountList.forEach((discount) => {
      if (discount.satisfyRequirements(date)) {
        result.push(discount.getNameAndDiscount(date));
      }
    });

    return result;
  }

  #checkFreebie(originalPayment) {
    if (this.#freebie.satisfy(originalPayment)) {
      return this.#freebie.getPrize();
    }

    return '없음';
  }
}

export default EventList;
