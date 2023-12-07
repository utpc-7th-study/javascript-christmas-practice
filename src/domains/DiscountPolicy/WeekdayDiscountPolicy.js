import DiscountPolicy from './DiscountPolicy';

export default class WeekdayDiscountPolicy extends DiscountPolicy {
  constructor(order) {
    super(order);
  }

  _getDiscountPrice() {
    const orderDetail = this.order.createOrderDetail();
    const orderCount = orderDetail['dessert'].count;

    return orderCount * 2023;
  }
}
