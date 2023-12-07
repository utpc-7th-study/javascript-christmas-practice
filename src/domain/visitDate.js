import EVENT_DATE from '../constant/eventDate.js';
import ERROR_MESSAGE from '../constant/message.js';

class VisitDate {
  #date;

  constructor(visitDate) {
    this.#validate(visitDate);
    this.#date = visitDate;
  }

  #validate(visitDate) {
    if (Number.isNaN(Number(visitDate))) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    }

    if (visitDate < EVENT_DATE.start || visitDate > EVENT_DATE.end) {
      throw new Error(ERROR_MESSAGE.INVALID_DATE);
    }
  }
}

export default VisitDate;
