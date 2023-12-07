import MenuPan from '../../src/domains/MenuPan';

describe('getMenuPrice test', () => {
  const menuPan = new MenuPan();

  test.each([
    ['티본스테이크', 55000],
    ['레드와인', 60000],
  ])('해당 메뉴의 가격을 반환해야 한다', (menuName, price) => {
    // given
    // when
    const result = menuPan.getMenuPrice(menuName);

    // then
    expect(result).toBe(price);
  });
});

describe('haveMenu test', () => {
  const menuPan = new MenuPan();

  test('해당 메뉴가 있는지 확인한다', () => {
    // given
    const { validMenu, invalidMenu } = {
      validMenu: '티본스테이크',
      invalidMenu: '티본스테이크2',
    };

    // when
    // then
    expect(menuPan.haveMenu(validMenu)).toBe(true);
    expect(menuPan.haveMenu(invalidMenu)).toBe(false);
  });
});
