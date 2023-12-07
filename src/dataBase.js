const dataBase = {
  getMenus() {
    return [
      { id: 0, menuName: '양송이수프', menuAmount: 6000, category: 'appetizer' },
      { id: 1, menuName: '타파스', menuAmount: 5500, category: 'appetizer' },
      { id: 2, menuName: '시저샐러드', menuAmount: 8000, category: 'appetizer' },

      { id: 3, menuName: '티본스테이크', menuAmount: 55000, category: 'mainDish' },
      { id: 4, menuName: '바비큐립', menuAmount: 54000, category: 'mainDish' },
      { id: 5, menuName: '해산물파스타', menuAmount: 35000, category: 'mainDish' },
      { id: 6, menuName: '크리스마스파스타', menuAmount: 25000, category: 'mainDish' },

      { id: 7, menuName: '초코케이크', menuAmount: 15000, category: 'dessert' },
      { id: 8, menuName: '아이스크림', menuAmount: 5000, category: 'dessert' },
      { id: 9, menuName: '제로콜라', menuAmount: 3000, category: 'dessert' },

      { id: 10, menuName: '레드와인', menuAmount: 60000, category: 'beverage' },
      { id: 11, menuName: '샴페인', menuAmount: 25000, category: 'beverage' },
    ];
  },
};

export default dataBase;
