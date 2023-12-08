import { Console } from '@woowacourse/mission-utils';

const tmp = {
  christmasDDayDiscount: '크리스마스 디데이 할인',
  weekDayDiscount: '평일 할인',
  weekendDiscount: '주말 할인',
  specialDiscount: '특별 할인',
  freeGiftDiscount: '증정 이벤트',
};

const OutputView = {
  printStartMessage() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printMenu(menus) {
    Console.print('<주문 메뉴>');

    menus.forEach(({ menuName, menuAmount }) => {
      if (menuAmount) Console.print(`${menuName} ${menuAmount}개`);
    });
  },

  print(message) {
    Console.print(message);
  },

  printPreview() {
    Console.print('12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n');
  },

  printTotalPrice(totalPrice) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${new Intl.NumberFormat('ko-KR').format(totalPrice)}원`);
  },

  printFreeGift(freeGiftDiscount) {
    Console.print('\n<증정 메뉴>');

    if (freeGiftDiscount === 0) {
      Console.print('없음');
      return;
    }

    Console.print('샴페인 1개');
  },

  printProfitHistory(profitHistory) {
    Console.print('\n<혜택 내역>');

    const isNotProfit = Object.values(profitHistory).every((num) => num === 0);
    if (isNotProfit) {
      Console.print('없음');
      return;
    }

    Object.entries(profitHistory).forEach(([type, amount]) => {
      if (amount !== 0) {
        Console.print(`${tmp[type]}: -${new Intl.NumberFormat('ko-KR').format(amount)}원`);
      }
    });
  },

  printTotalProfit(totalProfit) {
    Console.print('\n<총혜택 금액>');
    Console.print(`-${new Intl.NumberFormat('ko-KR').format(totalProfit)}원`);
  },

  printExpectPrice(expectPrice) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(`-${new Intl.NumberFormat('ko-KR').format(expectPrice)}원`);
  },

  printBadgeBenefit(badgeBenefit) {
    Console.print('\n<12월 이벤트 배지>');
    Console.print(badgeBenefit);
  },
};

export default OutputView;
