import {
  ChristmasDdayEvent,
  PresentationEvent,
  WeekDiscountEvent,
} from '../model/index.js';
import { InputView, OutputView } from '../view/index.js';

class Controller {
  async applyDate() {
    const date = Number(
      await InputView.readData(
        '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)'
      )
    );

    return date;
  }

  async applyMenus() {
    const menus = await InputView.readData(
      '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)'
    );

    return menus;
  }
}

const aa = new Controller();

aa.applyDate();
