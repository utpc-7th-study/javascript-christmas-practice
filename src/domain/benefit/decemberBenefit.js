import Benefit from './benefit.js';

class DecemberBenefit extends Benefit {
  discountDetail() {
    return this.discount.get();
  }

  giftDetail() {
    return this.gift.get();
  }

  applyBenefit(dessertCount, mainCount) {
    this.discount.apply(dessertCount, mainCount);
  }
}

export default DecemberBenefit;
