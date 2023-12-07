import DiscountCondition from '../../../src/domains/DiscountCondition/DiscountCondition';
import SpecialDiscountCondition from '../../../src/domains/DiscountCondition/SpecialDiscountCondition';

describe('상속 테스트', () => {
  test('추상 클래스로부터 상속받지 않으면 에러를 던진다.', () => {
    // given
    const possibleDates = [1, 2, 3];

    // when
    // then
    expect(new SpecialDiscountCondition(possibleDates)).toBeInstanceOf(
      DiscountCondition,
    );
  });
});

describe('isPossible test', () => {
  test('할인 가능한 날이면 true를 반환해야한다', () => {
    // given
    const possibleDates = [1, 2, 3];
    const visitDate = 1;
    const specialDiscountCondition = new SpecialDiscountCondition(
      possibleDates,
    );

    // when
    const result = specialDiscountCondition.isPossible(visitDate);

    // then
    expect(result).toBe(true);
  });

  test('할인이 불가능한 날에 방문했을떄 false를 반환해야한다', () => {
    // given
    const possibleDates = [1, 2, 3];
    const visitDate = 5;
    const specialDiscountCondition = new SpecialDiscountCondition(
      possibleDates,
    );

    // when
    const result = specialDiscountCondition.isPossible(visitDate);

    // then
    expect(result).toBe(false);
  });
});
