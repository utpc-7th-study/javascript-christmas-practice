import WeekdayDiscountCondition from './DiscountCondition/WeekdayDiscountCondition.js';
import WeekendDiscountCondition from './DiscountCondition/WeekendDiscountCondition.js';
import ChristmasDiscountCondition from './DiscountCondition/ChristmasDiscountCondition.js';
import SpecialDiscountCondition from './DiscountCondition/SpecialDiscountCondition.js';
import paramType from '../lib/src/paramType.js';
import { VisitDateInputError } from '../errors/UserInputErros.js';
import { calendar } from '../utils/calendar.js';

const EMPTY = [];
const WEEKEND_DAYS = [5, 6];
const WEEKDAY_DAYS = [0, 1, 2, 3, 4];

export default class Discount {
  #visitDate;
  #discountCondtionts = [
    new ChristmasDiscountCondition(Array.from({ length: 25 }, (_, i) => i + 1)),
    new WeekendDiscountCondition(this.#findDatesOfDays(WEEKEND_DAYS)),
    new WeekdayDiscountCondition(this.#findDatesOfDays(WEEKDAY_DAYS)),
    new SpecialDiscountCondition([3, 10, 17, 24, 25, 31]),
  ];
  #possibleDiscount;

  constructor(visitDate) {
    this.#validate(visitDate);
    this.#visitDate = Number(visitDate);
    this.#possibleDiscount = EMPTY;
  }

  getVisitDate() {
    return this.#visitDate;
  }

  analizeDiscountCondtion() {
    this.#discountCondtionts.forEach((discountCondition) => {
      if (discountCondition.isPossible(this.getVisitDate())) {
        const discountPolicy = discountCondition.getDiscountPolicy();
        this.#addDiscountPolicy(discountPolicy);
      }
    });
  }

  #findDatesOfDays(applyDays, _ = paramType(applyDays, Array)) {
    const currentMonthDates = calendar(2023, 12);
    return Object.entries(currentMonthDates)
      .filter(([_, yoil]) => applyDays.includes(yoil))
      .map(([day, _]) => Number(day));
  }
  #addDiscountPolicy(discountPolicy) {
    this.#possibleDiscount = [...this.#possibleDiscount, discountPolicy];
  }

  #validate(visitDate) {
    const numericRegExp = new RegExp('^[0-9]+$');

    if (!numericRegExp.test(visitDate)) {
      throw new VisitDateInputError(
        '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
      );
    }

    if (visitDate < 1 || visitDate > 31) {
      throw new VisitDateInputError(
        '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
      );
    }
  }
}
