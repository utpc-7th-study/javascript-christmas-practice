import ChristmasDiscountPolicy from '../../../src/domains/DiscountPolicy/ChristmasDiscountPolicy';
import Order from '../../../src/domains/Order';
import paramType from '../../../src/lib/src/paramType';

jest.mock('../../../src/lib/src/paramType', () => jest.fn(() => true));

jest.mock('../../../src/domains/Order', () => {
  return {
    default: jest.fn(),
    __esModule: true,
  };
});

describe('ChristmasDiscountPolicy test', () => {
  const mockOrder = new Order();

  test('해당 이벤트에 맞는 할인금액을 반환한다.', () => {
    // given
    const visitDate = 25;
    const christmasDiscountPolicy = new ChristmasDiscountPolicy(
      mockOrder,
      visitDate,
    );

    // when
    const result = christmasDiscountPolicy.getDiscountPrice();

    // then
    expect(result).toBe(3400);
  });
});
