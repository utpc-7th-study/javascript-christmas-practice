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
});
