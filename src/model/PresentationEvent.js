class PresentationEvent {
  #totalPurchaseCost;
  #totalBenefitCost;

  constructor(totalPurchaseCost, totalBenefitCost) {
    this.#totalPurchaseCost = totalPurchaseCost;
    this.#totalBenefitCost = totalBenefitCost;
  }

  giveChampagne() {
    let discount = 0;
    if (this.#totalPurchaseCost >= 120000) {
      discount += 25000;
    }

    return discount;
  }

  giveBadge() {
    if (this.#totalBenefitCost >= 20000) return 'santa';
    if (this.#totalBenefitCost >= 10000) return 'tree';
    if (this.#totalBenefitCost >= 5000) return 'star';
  }
}

export default PresentationEvent;
