/* eslint-disable max-lines-per-function */
import VisitDate from '../src/domain/visitDate';

describe('방문 일자 테스트', () => {
  test.each([-30, -1, 0, 32, 35, '40'])(
    '방문 일자가 잘못된 날짜라면 에러를 발생한다.',
    (visitDate) => {
      expect(() => new VisitDate(visitDate)).toThrow('[ERROR]');
    },
  );

  test.each(['1', 15, 30, 29])(
    '방문 일자가 올바른 날짜라면 에러가 발생하지 않는다.',
    (visitDate) => {
      expect(() => new VisitDate(visitDate)).not.toThrow('[ERROR]');
    },
  );

  test('방문 날짜에 따른 요일을 계산한다.', () => {
    // given
    const date = 8;
    const expected = '금';

    // mocking
    const mockYear = jest.spyOn(Date.prototype, 'getFullYear');
    mockYear.mockImplementation(() => 2023);

    const mockMonth = jest.spyOn(Date.prototype, 'getMonth');
    mockMonth.mockImplementation(() => 11);

    // when
    const visitDate = new VisitDate(date);
    const dayOfWeek = visitDate.getDayOfWeek();

    // then
    expect(dayOfWeek).toBe(expected);

    mockYear.mockRestore();
    mockMonth.mockRestore();
  });
});
