import DiscountPolicy from './DiscountPolicy';

export default class WeekendDiscountPolicy extends DiscountPolicy {
  constructor(order) {
    super(order);
  }

  _getDiscountPrice() {
    const orderDetail = this.order.createOrderDetail();
    const orderCount = orderDetail['main'].count;

    return orderCount * 2023;
  }
}
