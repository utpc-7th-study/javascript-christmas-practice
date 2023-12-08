import { InputView } from '../view/InputView.js';

export const splitString = (string) => {
  const splittedArr = string.split(',');
  return splittedArr;
};
export const parseData = (stringData) => {
  const regexp = /([ㄱ-ㅎ|가-힣\s]+)-(\d+)/;
  const dataArr = splitString(stringData);

  const data = dataArr.map((data) => {
    const matchData = data.match(regexp);
    if (matchData) {
      const menu = matchData[1];
      const quantity = Number(matchData[2]);
      return [menu, quantity];
    }
  });
  return data;
};
