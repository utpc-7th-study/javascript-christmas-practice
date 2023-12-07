class DateManager {
  #visitDate;

  constructor(visitDate) {
    this.#validate(visitDate);

    this.#visitDate = visitDate;
  }

  #validate(visitDate) {
    const ERROR_MESSAGE = '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.';

    if (!/^[0-9]+$/.test(visitDate)) {
      throw new Error(ERROR_MESSAGE);
    }

    if (Number(visitDate) < 1 || Number(visitDate) > 31) {
      throw new Error(ERROR_MESSAGE);
    }
  }
}

export default DateManager;
