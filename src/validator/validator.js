import { MENUS } from '../constants/menus.js';

const isBeverage = (menu) => {
  const [name, _] = menu;
  return name === '제로콜라' || name === '레드와인' || name === '샴페인';
};

const hasInvalidQuantity = (menu) => {
  const [_, quantity] = menu;
  return !Number.isInteger(quantity) || quantity < 1;
};

const inMenu = (menu) => {
  let exists = false;
  const [name, _] = menu;
  Object.entries(MENUS).forEach(([_, menuList]) => {
    if (menuList.some((menu) => menu.name === name)) {
      exists = true;
    }
  });

  return exists;
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

  overMaxQuantity(menus) {
    let totalQuantity = 0;

    menus.forEach((menu) => {
      const [_, quantity] = menu;
      totalQuantity += quantity;
    });

    if (totalQuantity > 20) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },

  notExists(menus) {
    if (menus.some((menu) => !inMenu(menu))) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },

  duplicated(menus) {
    const nameList = [];
    menus.forEach((menu) => {
      const [name, _] = menu;
      nameList.push(name);
    });

    if (new Set(nameList).size !== menus.length) {
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
  Validator.overMaxQuantity(menus);
  Validator.notExists(menus);
  Validator.duplicated(menus);
};
