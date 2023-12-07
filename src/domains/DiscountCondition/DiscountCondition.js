import paramType from '../../lib/src/paramType.js';

export default class DiscountCondition {
  constructor(possibleDates, _ = paramType(possibleDates, Array)) {
    if (this.constructor === DiscountCondition) {
      throw new Error('DiscountCondition 클래스는 추상클래스입니다.');
    }
    this.possibleDates = possibleDates;
  }

  isPossible(visitDate, _ = paramType(visitDate, 'number')) {
    return this._isPossible(visitDate);
  }

  getDiscountPolicy() {
    return this._getDiscountPolicy();
  }

  _isPossible(visitDate) {
    throw new Error('_isSatisfied 메소드는 override 되어야 합니다.');
  }

  _getDiscountPolicy() {
    throw new Error('_getDiscountPolicy 메소드는 override 되어야 합니다.');
  }
}
