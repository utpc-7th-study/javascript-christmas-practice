import paramType from '../../lib/src/paramType.js';
import DiscountCondition from './DiscountCondition.js';

export default class SpecialDiscountCondition extends DiscountCondition {
  constructor(possibleDates, _ = paramType(possibleDates, Array)) {
    super(possibleDates);
  }

  _isPossible(visitDate, _ = paramType(visitDate, 'number')) {
    if (this.possibleDates.includes(visitDate)) {
      return true;
    }

    return false;
  }
}
