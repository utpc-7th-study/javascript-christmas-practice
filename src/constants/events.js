const WEEKEND = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
const SPECIAL_DAYS = [3, 10, 17, 24, 25, 31];

export const DISCOUNTS = [
  {
    name: '크리스마스 디데이 할인',
    discount: (date) => 1000 + 100 * (date - 1),
    requirements: (date) => date >= 1 && date <= 25,
  },
  {
    name: '평일 할인',
    discount: () => 2023,
    requirements: (date) => !WEEKEND.includes(date),
  },
  {
    name: '주말 할인',
    discount: () => 2023,
    requirements: (date) => WEEKEND.includes(date),
  },
  {
    name: '특별 할인',
    discount: () => 1000,
    requirements: (date) => SPECIAL_DAYS.includes(date),
  },
];

export const FREEBIE = {
  name: '증정 이벤트',
  prize: {
    name: '샴페인',
    quantity: 1,
  },
  requirements: (payment) => payment >= 120000,
};
