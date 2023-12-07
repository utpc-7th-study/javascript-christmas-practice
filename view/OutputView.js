import { Console } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPARATOR } from 'os';
import KR_BENEFIT_DATA from '../src/constant/krBenefit.js';

const OutputView = {
  titleTemplate(message) {
    return `<${message}>`;
  },

  menuTemplate(menu, quantity) {
    return `${menu} ${quantity}개`;
  },

  printMenu(orderedMenu) {
    const message = [
      `${LINE_SEPARATOR}${this.titleTemplate('주문 메뉴')}`,
      ...orderedMenu.map(([menu, quantity]) => this.menuTemplate(menu, quantity)),
    ];

    this.print(message.join(LINE_SEPARATOR));
  },

  printTotalCost(totalCost) {
    const message = [
      `${LINE_SEPARATOR}${this.titleTemplate('할인 전 총주문 금액')}`,
      `${totalCost}원`,
    ];

    this.print(message.join(LINE_SEPARATOR));
  },

  printGift(gift) {
    const giftArray = Object.entries(gift);
    const message = [
      `${LINE_SEPARATOR}${this.titleTemplate('증정 메뉴')}`,
      giftArray.length ? gift.map(([menu, quantity]) => this.menuTemplate(menu, quantity)) : '없음',
    ];

    this.print(message.join(LINE_SEPARATOR));
  },

  printBenefits(benefits) {
    const benefitsArray = Object.entries(benefits);
    const message = [
      `LINE_SEPARATOR${this.titleTemplate('혜택 내역')}`,
      benefitsArray.length
        ? benefitsArray.map(
            ([benefit, discountAmount]) => `${KR_BENEFIT_DATA[benefit]}: -${discountAmount}`,
          )
        : '없음',
    ];

    this.print(message.join(LINE_SEPARATOR));
  },

  printTotalDiscount(totalDiscountAmount) {
    const message = [
      `LINE_SEPARATOR${this.titleTemplate('총혜택 금액')}`,
      `-${totalDiscountAmount}원`,
    ];

    this.print(message.join(LINE_SEPARATOR));
  },

  printFinalCost(finalCost) {
    const message = [this.titleTemplate('할인 후 예상 결제 금액'), `${finalCost}원`];

    this.print(message.join(LINE_SEPARATOR));
  },

  printBadge(badge) {
    const message = [this.titleTemplate('12월 이벤트 배지'), badge];

    this.print(message.join(LINE_SEPARATOR));
  },

  printGreeting() {
    this.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  print(message) {
    Console.print(message);
  },
};

export default OutputView;
