const Validator = {
  numberType(input) {
    if (!Number.isInteger(input)) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  },

  range(input) {
    if (input < 1 || input > 31) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  },
};

export const validateDate = (date) => {
  Validator.numberType(date);
  Validator.range(date);
};
