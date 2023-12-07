import paramType from '../../lib/src/paramType';
import Order from '../Order';

export default class DiscountPolicy {
  constructor(order, _ = paramType(order, Order)) {
    this.order = order;
  }

  getDiscountPrice() {
    return this._getDiscountPrice();
  }

  _getDiscountPrice() {
    throw new Error('_getDiscountPrice() must be override.');
  }
}
