import { Console } from '@woowacourse/mission-utils';
export default InputView = {
  async readData(message) {
    const input = await Console.readLineAsync(message);
    return input;
  },
};
