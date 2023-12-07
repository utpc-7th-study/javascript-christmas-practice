import { calendar, getYoil } from '../../src/utils/calendar';

describe('calendar test', () => {
  test('', () => {
    // given
    // when
    const result = calendar(2023, 12);
    // then

    expect(Object.keys(result)).toHaveLength(31);
    expect(result).toHaveProperty('1');
    expect(result).toHaveProperty('31');
    expect(result).toEqual(expect.objectContaining({ 1: 5, 31: 0 }));
    expect(result).toEqual(expect.not.objectContaining({ 0: 4, 32: 1 }));
  });

  test('2023년 12월 1일은 금요일(5)이다', () => {
    // given
    // when
    // then
    expect(getYoil(2023, 12, 1)).toBe(5);
  });
});
