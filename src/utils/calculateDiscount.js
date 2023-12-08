export const calculateWeekDiscount = (template, menus) => {
  let discount = 0;

  template.forEach((quantity, menu) => {
    menus.forEach((data) => {
      if (data.includes(menu)) discount += 2023 * data[1];
    });
  });

  return discount;
};
