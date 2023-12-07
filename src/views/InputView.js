import { Console } from '@woowacourse/mission-utils';
import hasError from '../utils/hasError.js';
import { validateDate, validateMenus } from '../validator/validator.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(
      '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n'
    );

    if (hasError(validateDate, Number(input))) {
      return await this.readDate();
    }

    return Number(input);
  },

  async readMenus() {
    const inputs = await Console.readLineAsync(
      '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n'
    );

    const orderList = inputs.split(',').map((input) => {
      const [menuName, quantity] = input.split('-');
      return [menuName, Number(quantity)];
    });

    if (hasError(validateMenus, orderList)) {
      return await this.readMenus();
    }

    return inputs;
  },
};

export default InputView;
