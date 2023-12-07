import paramType from '../../lib/src/paramType.js';
import Order from '../Order.js';
import DiscountPolicy from './DiscountPolicy';

export default class SpecialDiscountPolicy extends DiscountPolicy {
  constructor(order, _ = paramType(order, Order)) {
    super(order);
  }

  _getDiscountPrice() {
    return 1000;
  }
}
