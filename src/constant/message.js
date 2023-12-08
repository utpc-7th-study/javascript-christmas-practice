import MAX_QUANTITY from './max.js';

const ERROR_PREFIX = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  INVALID_DATE: `${ERROR_PREFIX} 유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
  INVALID_ORDER: `${ERROR_PREFIX} 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  OVER_ORDER_QUANTITY: `${ERROR_PREFIX} 주문 수량은 최대 ${MAX_QUANTITY}개 까지 가능합니다.`,
  NOT_ONLY_DRINK: `${ERROR_PREFIX} 음료만 주문할 수 없습니다.`,
});

export default ERROR_MESSAGE;
