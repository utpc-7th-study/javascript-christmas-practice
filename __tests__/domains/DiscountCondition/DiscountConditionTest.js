import DiscountCondition from '../../../src/domains/DiscountCondition/DiscountCondition';

jest.mock('../../../src/lib/src/paramType.js', () => {
  return jest.fn(() => true);
});

describe('추상 클래스 테스트', () => {
  test('추상 클래스로 인스턴스를 생성할때 예외가 발생해야 한다.', () => {
    // given
    // when
    // then
    expect(() => new DiscountCondition()).toThrow();
  });

  test('overriding 하지 않으면 에러가 발생해야 한다.', () => {
    // given
    const NOT_OVERRIDE_CLASS = new (class extends DiscountCondition {})();

    // when
    // then
    expect(() => {
      NOT_OVERRIDE_CLASS.isPossible();
    }).toThrow('override');
  });
});
