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

  printPreview(date) {
    this.print(
      `${new Date().getMonth() + 1}월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
    );
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

  printGift(giftDetail) {
    const message = [
      `${LINE_SEPARATOR}${this.titleTemplate('증정 메뉴')}`,
      giftDetail ? `${giftDetail.name} ${giftDetail.quantity}개` : '없음',
    ];

    this.print(message.join(LINE_SEPARATOR));
  },

  printBenefits(discountDetail, giftDetail) {
    const discountDetails = Object.entries(discountDetail);
    const message = [
      `${LINE_SEPARATOR}${this.titleTemplate('혜택 내역')}`,
      discountDetails.length
        ? discountDetails
            .map(([benefit, discountAmount]) => `${KR_BENEFIT_DATA[benefit]}: -${discountAmount}원`)
            .join(LINE_SEPARATOR)
        : '없음',
    ];

    if (giftDetail) message.push(`증정 이벤트: -${giftDetail.price}원`);

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
