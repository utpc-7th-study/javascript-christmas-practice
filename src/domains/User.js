class User {
  #orderList;

  constructor() {
    this.#orderList = [];
  }

  order(menuName, quantity) {
    this.#orderList.push([menuName, quantity]);
  }
}

export default User;
