import EventPlanner from '../src/domain/EventPlanner';

describe('', () => {
  let eventPlanner;

  beforeEach(() => {
    eventPlanner = new EventPlanner();
  });

  test.each([['32'], ['0'], ['-5'], ['O'], [''], ['    '], ['2   3']])(
    '방문 날짜 테스트',
    (input) => {
      expect(() => {
        eventPlanner.registerVisitDate(input);
      }).toThrow();
    }
  );
});
