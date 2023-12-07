import WeekdayDiscountPolicy from '../../../src/domains/DiscountPolicy/WeekdayDiscountPolicy';
import Order from '../../../src/domains/Order';
import paramType from '../../../src/lib/src/paramType';

jest.mock('../../../src/lib/src/paramType', () => jest.fn(() => true));

jest.mock('../../../src/domains/Order', () => {
  return {
    default: jest.fn().mockImplementation(() => ({
      createOrderDetail: jest.fn().mockImplementation(() => ({
        main: { count: 4, menu: ['티본스테이크', '해산물파스타'] },
        dessert: { count: 3, menu: ['초코케이크'] },
      })),
    })),
    __esModule: true,
  };
});

describe('ChristmasDiscountPolicy test', () => {
  const mockOrder = new Order();

  test('해당 이벤트에 맞는 할인금액을 반환한다.', () => {
    // given
    const visitDate = 25;
    const christmasDiscountPolicy = new WeekdayDiscountPolicy(
      mockOrder,
      visitDate,
    );

    // when
    const result = christmasDiscountPolicy.getDiscountPrice();

    // then
    expect(result).toBe(2023 * 3);
  });
});
