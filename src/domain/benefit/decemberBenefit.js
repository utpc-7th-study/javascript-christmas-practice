import Benefit from './benefit';

class DecemberBenefit extends Benefit {
  getGift() {
    return this.gift.get();
  }

  applyBenefit(dessertCount, mainCount) {
    this.discount.apply(dessertCount, mainCount);
  }
}

export default DecemberBenefit;
