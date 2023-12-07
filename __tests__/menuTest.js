import Menu from '../src/domain/menu';

describe('메뉴 테스트', () => {
  test.each(['과', '자', '소주', '감자탕', '습하게띠', '설렁탕'])(
    '메뉴판에 없는 음식이 입력되면 예외가 발생한다.',
    (menu) => {
      expect(() => new Menu(menu, 1)).toThrow('[ERROR]');
    },
  );

  test('올바른 메뉴가 입력되면 예외가 발생하지 않는다.', () => {
    // given
    const menu = '양송이수프';

    // when & then
    expect(() => new Menu(menu, 1)).not.toThrow();
  });
});
