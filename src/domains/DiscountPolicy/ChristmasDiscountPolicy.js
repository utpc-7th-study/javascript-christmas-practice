import paramType from '../../lib/src/paramType.js';
import Order from '../Order.js';
import DiscountPolicy from './DiscountPolicy.js';

export default class ChristmasDiscountPolicy extends DiscountPolicy {
  #visitDate;

  constructor(
    order,
    visitDate,
    _0 = paramType(order, Order),
    _1 = paramType(visitDate, Number),
  ) {
    super(order);
    this.#visitDate = visitDate;
  }

  _getDiscountPrice() {
    const defaultDiscountPrice = 900;
    const result = defaultDiscountPrice + this.#visitDate * 100;

    return result;
  }
}
