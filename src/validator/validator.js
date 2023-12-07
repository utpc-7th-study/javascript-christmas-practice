import { MENUS } from '../constants/menus.js';

const isBeverage = (menu) => {
  const [name, _] = menu;
  return name === '제로콜라' || name === '레드와인' || name === '샴페인';
};

const hasInvalidQuantity = (menu) => {
  const [_, quantity] = menu;
  return !Number.isInteger(quantity) || quantity < 1;
};

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

  onlyBeverage(menus) {
    if (menus.every((menu) => isBeverage(menu))) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },

  invalidQuantity(menus) {
    if (menus.some((menu) => hasInvalidQuantity(menu))) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },
};

export const validateDate = (date) => {
  Validator.numberType(date);
  Validator.range(date);
};

export const validateMenus = (menus) => {
  Validator.onlyBeverage(menus);
  Validator.invalidQuantity(menus);
};
