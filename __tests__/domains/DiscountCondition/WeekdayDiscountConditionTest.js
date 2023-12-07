import DiscountCondition from '../../../src/domains/DiscountCondition/DiscountCondition';
import WeekdayDiscountCondition from '../../../src/domains/DiscountCondition/WeekdayDiscountCondition';

describe('상속 테스트', () => {
  test('추상 클래스로부터 상속받지 않으면 에러를 던진다.', () => {
    // given
    const possibleDiscountDates = [1, 2, 3];

    // when
    // then
    expect(new WeekdayDiscountCondition(possibleDiscountDates)).toBeInstanceOf(
      DiscountCondition,
    );
  });
});

describe('isPossible test', () => {
  test('할인 가능한 날이면 true를 반환해야한다', () => {
    // given
    const possibleDiscountDates = [1, 2, 8, 9];
    const visitDate = 1;
    const weekdayDiscountCondition = new WeekdayDiscountCondition(
      possibleDiscountDates,
    );

    // when
    const result = weekdayDiscountCondition.isPossible(visitDate);

    // then
    expect(result).toBe(true);
  });

  test('할인이 불가능한 날에 방문했을떄 false를 반환해야한다', () => {
    // given
    const possibleDiscountDates = [1, 2, 8, 9];
    const visitDate = 5;
    const weekdayDiscountCondition = new WeekdayDiscountCondition(
      possibleDiscountDates,
    );

    // when
    const result = weekdayDiscountCondition.isPossible(visitDate);

    // then
    expect(result).toBe(false);
  });
});
