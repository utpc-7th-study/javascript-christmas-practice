export const calendar = (year, month) => {
  const lastDate = new Date(year, month - 1, 0).getDate() + 1;
  const days = Array.from({ length: lastDate }, (_, idx) => idx + 1).reduce(
    (calendar, date) => {
      calendar[date] = new Date(year, month - 1, date).getDay();
      return calendar;
    },
    {},
  );

  return days;
};

export const getYoil = (year, month, date) => {
  const day = calendar(year, month)[date];

  return day;
};
