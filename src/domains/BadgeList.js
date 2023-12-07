import { BADGES } from '../constants/badges.js';
import BadgeItem from './BadgeItem.js';

class BadgeList {
  #badgeList;

  constructor() {
    this.#badgeList = [];
    this.#set();
  }

  #set() {
    BADGES.forEach((BADGE) => {
      const { name, requirements } = BADGE;
      this.#badgeList.push(new BadgeItem(name, requirements));
    });
  }

  choose(amount) {
    const badge = this.#badgeList.filter((badge) =>
      badge.canReceive(amount)
    )[0];

    return badge.getName();
  }
}

export default BadgeList;
