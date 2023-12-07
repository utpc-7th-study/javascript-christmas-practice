import Discount from './discount.js';

class DecemberDiscount extends Discount {
  #SPECIAL_DISCOUNT_AMOUNT = 1000;

  #D_DAY_DISCOUNT = 1000;

  #D_DAY_INCREASE = 100;

  applyMonthly() {
    this.#special();
    this.#xMasDday();
  }

  #special() {
    const isSpecialDate = this.visitDate.getDayOfWeek() === '일' || this.visitDate.getDate() === 25;

    if (isSpecialDate) {
      this.setDiscount('special', this.#SPECIAL_DISCOUNT_AMOUNT);
    }
  }

  #xMasDday() {
    const visitDate = this.visitDate.getDate();
    if (visitDate >= 1 && visitDate <= 25) {
      this.setDiscount('dDay', this.#D_DAY_DISCOUNT + visitDate * this.#D_DAY_INCREASE);
    }
  }
}

export default DecemberDiscount;
