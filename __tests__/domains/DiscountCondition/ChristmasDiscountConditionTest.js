import ChristmasDiscountCondition from '../../../src/domains/DiscountCondition/ChristmasDiscountCondition';
import DiscountCondition from '../../../src/domains/DiscountCondition/DiscountCondition';

describe('상속 테스트', () => {
  const possibleDiscountDates = Array.from({ length: 25 }, (_, i) => i + 1);

  test('추상 클래스로부터 상속받지 않으면 에러를 던진다.', () => {
    // given
    // when
    // then
    expect(
      new ChristmasDiscountCondition(possibleDiscountDates),
    ).toBeInstanceOf(DiscountCondition);
  });
});

describe('isPossible test', () => {
  const possibleDiscountDates = Array.from({ length: 25 }, (_, i) => i + 1);

  test('할인 가능한 날이면 true를 반환해야한다', () => {
    // given
    const visitDate = 1;
    const christmasDiscountCondition = new ChristmasDiscountCondition(
      possibleDiscountDates,
    );

    // when
    const result = christmasDiscountCondition.isPossible(visitDate);

    // then
    expect(result).toBe(true);
  });

  test('할인이 불가능한 날에 방문했을떄 false를 반환해야한다', () => {
    // given
    const OVER_DATE = 1;
    const visitDate =
      possibleDiscountDates[possibleDiscountDates.length - 1] + OVER_DATE;
    const christmasDiscountCondition = new ChristmasDiscountCondition(
      possibleDiscountDates,
    );

    // when
    const result = christmasDiscountCondition.isPossible(visitDate);

    // then
    expect(result).toBe(false);
  });
});
