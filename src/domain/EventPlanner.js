import DateManager from './DateManager.js';

class EventPlanner {
  #dateManager;

  registerVisitDate(visitDate) {
    this.#dateManager = new DateManager(visitDate);
  }
}

export default EventPlanner;
