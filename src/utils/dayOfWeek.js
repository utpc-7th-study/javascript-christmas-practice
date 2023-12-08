const dayOfWeek = (year, month, day) => {
  const adjustedMonth = month < 3 ? month + 12 : month;
  const adjustedYear = month < 3 ? year - 1 : year;
  const h =
    (day +
      Math.floor((13 * (adjustedMonth + 1)) / 5) +
      (adjustedYear % 100) +
      Math.floor((adjustedYear % 100) / 4) +
      Math.floor(adjustedYear / 100 / 4) -
      2 * Math.floor(adjustedYear / 100)) %
    7;

  return ['월', '화', '수', '목', '금', '토', '일'][(h + 5) % 7]; // 결과를 0(월요일) ~ 6(일요일)로 맞추기 위해 조정
};

export default dayOfWeek;
