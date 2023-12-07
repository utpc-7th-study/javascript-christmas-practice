import DiscountCondition from '../../../src/domains/DiscountCondition/DiscountCondition';
import WeekendDiscountCondition from '../../../src/domains/DiscountCondition/WeekendDiscountCondition';

describe('상속 테스트', () => {
  test('추상 클래스로부터 상속받지 않으면 에러를 던진다.', () => {
    // given
    const possibleDiscountDates = [3, 4, 5, 6];

    // when
    // then
    expect(new WeekendDiscountCondition(possibleDiscountDates)).toBeInstanceOf(
      DiscountCondition,
    );
  });
});

describe('isPossible test', () => {
  test('할인 가능한 날이면 true를 반환해야한다', () => {
    // given
    const possibleDiscountDates = [3, 4, 5, 6];
    const visitDate = 3;
    const weekendDiscountCondition = new WeekendDiscountCondition(
      possibleDiscountDates,
    );

    // when
    const result = weekendDiscountCondition.isPossible(visitDate);

    // then
    expect(result).toBe(true);
  });

  test('할인이 불가능한 날에 방문했을떄 false를 반환해야한다', () => {
    // given
    const possibleDiscountDates = [3, 4, 5, 6];
    const visitDate = 1;
    const weekendDiscountCondition = new WeekendDiscountCondition(
      possibleDiscountDates,
    );

    // when
    const result = weekendDiscountCondition.isPossible(visitDate);

    // then
    expect(result).toBe(false);
  });
});
