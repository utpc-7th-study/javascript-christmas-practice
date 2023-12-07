import Discount from '../../src/domains/Discount';
import { VisitDateInputError } from '../../src/errors/UserInputErros';

describe('고객이 입력한 방문날짜 예외 처리 test', () => {
  test('숫자 외의 값을 입력했을떄 예외가 발생해야한다', () => {
    const visitDate = 'a';

    expect(() => {
      new Discount(visitDate);
    }).toThrow(VisitDateInputError);
  });
  test('범위에 맞지 않는 값을 입력했을떄 예외가 발생해야한다', () => {
    const visitDate = '32';

    expect(() => {
      new Discount(visitDate);
    }).toThrow(VisitDateInputError);
  });
});
