import EVENT_DATE from '../constant/eventDate.js';
import ERROR_MESSAGE from '../constant/message.js';
import dayOfWeek from '../utils/dayOfWeek.js';

class VisitDate {
  #date;

  constructor(visitDate) {
    this.#validate(visitDate);
    this.#date = visitDate;
  }

  getDate() {
    return this.#date;
  }

  getDayOfWeek() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    return dayOfWeek(year, month, this.#date);
  }

  #validate(visitDate) {
    if (Number.isNaN(Number(visitDate))) {
      throw new Error(ERROR_MESSAGE.INVALID_DATE);
    }

    if (visitDate < EVENT_DATE.december.start || visitDate > EVENT_DATE.december.end) {
      throw new Error(ERROR_MESSAGE.INVALID_DATE);
    }
  }
}

export default VisitDate;
