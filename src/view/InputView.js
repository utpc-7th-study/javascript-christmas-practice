import { Console } from '@woowacourse/mission-utils';
import paramType from '../lib/src/paramType.js';

const InputView = {
  async readOrderMenu() {
    const userInput = await this.onRead(
      '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1) \n',
    );

    return userInput;
  },

  async readVisitDate() {
    const userInput = await this.onRead(
      '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
    );

    return userInput;
  },

  async onRead(message, _ = paramType(message, 'string')) {
    const userInput = await Console.readLineAsync(message);

    if (userInput === undefined) {
      throw new Error('유저 입력이 없습니다.\n');
    }

    return userInput.trim();
  },
};

export default InputView;
