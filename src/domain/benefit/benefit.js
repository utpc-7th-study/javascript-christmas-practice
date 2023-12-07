import Discount from './discount/discount';
import Gift from './gift/gift';

class Benefit {
  constructor(discount, gift) {
    if (!(discount instanceof Discount) || !(gift instanceof Gift)) {
      throw new Error('잘못된 인스턴스입니다.');
    }
    this.discount = discount;
    this.gift = gift;
  }

  getGift() {
    throw new Error('서브 클래스에서 오버라이드 해야합니다');
  }

  applyBenefit() {
    throw new Error('서브 클래스에서 오버라이드 해야합니다');
  }
}

export default Benefit;
