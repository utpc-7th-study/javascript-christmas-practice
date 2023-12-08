/* eslint-disable max-lines-per-function */
import Order from '../src/domain/orderList';

describe('주문 테스트', () => {
  test.each([
    ', 해산물파스타-1',
    '해산물-파스타, 초코-케이크',
    '안녕, 하세요',
    '제대로-1,입력-2,,',
  ])('잘못된 주문 양식이 들어오면 에러가 발생한다.', (order) => {
    expect(() => new Order(order)).toThrow('[ERROR]');
  });

  test.each(['양송이수프-1, 제로콜라-2', '양송이수프-1,아이스크림-2'])(
    '올바른 양식이 들어오면 예외가 발생하지 않는다.',
    (order) => {
      expect(() => new Order(order)).not.toThrow('[ERROR]');
    },
  );

  test('음료만 주문한 경우 예외가 발생한다.', () => {
    // given
    const order = '제로콜라-1';

    // when & then
    expect(() => new Order(order)).toThrow('[ERROR]');
  });

  test('중복된 메뉴를 입력하면 예외가 발생한다.', () => {
    // given
    const order = '제로콜라-1, 제로콜라-2';

    // when & then
    expect(() => new Order(order)).toThrow('[ERROR]');
  });

  test('총 주문 수량이 20개가 넘어가면 예외가 발생한다.', () => {
    // given
    const order = '양송이수프-20, 제로콜라-1';

    // when & then
    expect(() => new Order(order)).toThrow('[ERROR]');
  });
});
