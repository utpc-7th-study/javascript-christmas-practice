import { Console } from '@woowacourse/mission-utils';
import paramType from '../lib/src/paramType.js';

const OutputView = {
  onPrint(message, _ = paramType(message, 'string')) {
    Console.print(message);
  },
};

export default OutputView;
