import { Console } from '@woowacourse/mission-utils';
import addComma from '../utils/addComma.js';

const OutputView = {
  printStartMessage() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printDate(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
    );
  },

  printMenu(orderList) {
    Console.print('\n<주문 메뉴>');
    orderList.forEach((order) => {
      const [name, quantity] = order;
      Console.print(`${name} ${quantity}개`);
    });
  },

  printOriginalPayment(payment) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${addComma(payment)}원`);
  },

  printFreebie(freebie) {
    Console.print('\n<증정 메뉴>');
    if (freebie === '없음') {
      return Console.print(freebie);
    }
    const [menuName, quantity] = freebie;
    Console.print(`${menuName} ${quantity}개`);
  },

  printBadge(badge) {
    Console.print('\n<12월 이벤트 배지>');
    Console.print(badge);
  },
};

export default OutputView;
