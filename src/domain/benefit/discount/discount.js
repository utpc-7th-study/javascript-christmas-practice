import VisitDate from '../../visitDate.js';

class Discount {
  visitDate;

  #DISCOUNT_AMOUNT = 2023;

  #weekdayData = ['일', '월', '화', '수', '목'];

  #totalDiscount = {};

  constructor(visitDate) {
    if (!(visitDate instanceof VisitDate)) throw new Error('VisitDate의 인스턴스를 주입해주세요');
    this.visitDate = visitDate;
  }

  get() {
    return this.#totalDiscount;
  }

  setDiscount(category, amount) {
    this.#totalDiscount[category] = amount;
  }

  getTotalDiscount() {
    return Object.values(this.#totalDiscount).reduce((total, amount) => total + amount, 0);
  }

  weekday(count) {
    this.setDiscount('weekday', this.#DISCOUNT_AMOUNT * count);
  }

  weekend(count) {
    this.setDiscount('weekend', this.#DISCOUNT_AMOUNT * count);
  }

  apply(weekdayMenuCount, weekendMenuCount) {
    const VisitDayIsWeekDay = this.#weekdayData.includes(this.visitDate.getDayOfWeek());

    if (VisitDayIsWeekDay) this.weekday(weekdayMenuCount);
    if (!VisitDayIsWeekDay) this.weekend(weekendMenuCount);

    this.applyMonthly();
  }

  applyMonthly() {
    throw new Error('서브 클래스에서 오버라이드 해야합니다.');
  }
}

export default Discount;
