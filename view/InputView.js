import { Console } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPARATOR } from 'os';

const InputView = {
  async readDate() {
    const input = await this.read(
      `12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)'${LINE_SEPARATOR}`,
    );

    return input;
  },

  async readOrder() {
    const input = await this.read(
      `주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)${LINE_SEPARATOR}`,
    );

    return input;
  },

  async read(message) {
    const input = await Console.readLineAsync(message);

    return input;
  },
};

export default InputView;
