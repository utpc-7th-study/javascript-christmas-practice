import Discount from './discount.js';

class DecemberDiscount extends Discount {
  #SPECIAL_DISCOUNT_AMOUNT = 1000;

  #D_DAY_DISCOUNT = 1000;

  #D_DAY_INCREASE = 100;

  apply(dessertCount, mainCount) {
    this.#weekDiscount(dessertCount, mainCount);
    this.#specialDiscount();
    this.#xMasDdayDiscount();
  }

  #weekDiscount(dessertCount, mainCount) {
    const VisitDayIsWeekDay = this.weekdayData.includes(this.visitDate.getDayOfWeek());

    if (VisitDayIsWeekDay) this.weekday(dessertCount);
    if (!VisitDayIsWeekDay) this.weekend(mainCount);
  }

  #specialDiscount() {
    const isSpecialDate = this.visitDate.getDayOfWeek() === '일' || this.visitDate.getDate() === 25;

    if (isSpecialDate) {
      this.setDiscount('special', this.#SPECIAL_DISCOUNT_AMOUNT);
    }
  }

  #xMasDdayDiscount() {
    const visitDate = this.visitDate.getDate();
    if (visitDate >= 1 && visitDate <= 25) {
      this.setDiscount('dDay', this.#D_DAY_DISCOUNT + visitDate * this.#D_DAY_INCREASE);
    }
  }
}

export default DecemberDiscount;
