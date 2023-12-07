import EventItem from './EventItem.js';
import { DISCOUNTS } from '../constants/events.js';

class EventList {
  #discountList;

  constructor() {
    this.#discountList = [];
    this.#set();
  }

  #set() {
    DISCOUNTS.forEach((DISCOUNT) => {
      const { name, discount, requirements } = DISCOUNT;
      this.#discountList.push(new EventItem(name, discount, requirements));
    });
  }

  getBenefit(date, originalPayment) {
    const result = this.#checkDiscountList(date);
    this.#checkFreebie(originalPayment);

    return result;
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

  #checkFreebie(originalPayment) {}
}

export default EventList;
