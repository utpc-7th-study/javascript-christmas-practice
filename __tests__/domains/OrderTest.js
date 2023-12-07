import Order from '../../src/domains/Order';
import { OrderMenuInputError } from '../../src/errors/UserInputErros';

describe('Order test', () => {
  const INVALID_CHAR = ',';
  test('올바르지 않은 메뉴형식을 입력했을때 예외가 발생해야 한다.', () => {
    // given
    const order = `티본스테이크-1,레드와인-3${INVALID_CHAR}`;

    // when
    // then
    expect(() => {
      new Order(order);
    }).toThrow(OrderMenuInputError);
  });

  test('없는 메뉴 입력시 예외가 발생해야 한다.', () => {
    // given
    const order = '티본스테이크-1,없는메뉴-3';

    // when
    // then
    expect(() => {
      new Order(order);
    }).toThrow(OrderMenuInputError);
  });

  test('중복메뉴 입력시 예외가 발생해야 한다.', () => {
    // given
    const order = '티본스테이크-1,티본스테이크-3';

    // when
    // then
    expect(() => {
      new Order(order);
    }).toThrow(OrderMenuInputError);
  });

  test('메뉴의 총 개수가 20개를 넘으면 예외가 발생해야 한다.', () => {
    // given
    const order = '티본스테이크-1,레드와인-20';

    // when
    // then
    expect(() => {
      new Order(order);
    }).toThrow(OrderMenuInputError);
  });

  test('음료만 주문했을때 예외가 발생해야 한다.', () => {
    // given
    const order = '레드와인-1,샴페인-1';

    // when
    // then
    expect(() => {
      new Order(order);
    }).toThrow(OrderMenuInputError);
  });
});
