import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Badge from './domain/badge.js';
import DecemberBenefit from './domain/benefit/decemberBenefit.js';
import DecemberDiscount from './domain/benefit/discount/decemberDiscount.js';
import DecemberGift from './domain/benefit/gift/decemberGift.js';
import OrderList from './domain/orderList.js';
import VisitDate from './domain/visitDate.js';

class App {
  #visitDate;

  #orderList;

  async run() {
    OutputView.printGreeting();
    await this.#readVisitDate();
    await this.#readOrder();
    this.#printRecipt();
  }

  async #readVisitDate() {
    while (!this.#visitDate) {
      try {
        const visitDateInput = await InputView.readDate();
        this.#visitDate = new VisitDate(Number(visitDateInput));
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  async #readOrder() {
    while (!this.#orderList) {
      try {
        const orderInput = await InputView.readOrder();
        this.#orderList = new OrderList(orderInput);
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  #printRecipt() {
    const totalCost = this.#orderList.totalCost();
    const { discountDetail, discountAmount, giftDetail, badge } = this.#getBenefitDetail();
    OutputView.printPreview(this.#visitDate.getDate());
    OutputView.printMenu(this.#orderList.orderDetail());
    OutputView.printTotalCost(totalCost);
    OutputView.printGift(giftDetail);
    OutputView.printBenefits(discountDetail, giftDetail);
    OutputView.printTotalDiscount(discountAmount ?? 0 + giftDetail.price ?? 0);
    OutputView.printFinalCost(totalCost - discountAmount);
    OutputView.printBadge(badge);
  }

  #getBenefitDetail() {
    const discount = new DecemberDiscount(this.#visitDate);
    const gift = new DecemberGift(this.#orderList.totalCost());
    const decemberBenefit = new DecemberBenefit(discount, gift);
    decemberBenefit.applyBenefit(this.#orderList.dessertCount(), this.#orderList.mainCount());
    const discountDetail = decemberBenefit.discountDetail();
    const discountAmount = Object.values(discountDetail).reduce((total, curr) => total + curr, 0);
    const giftDetail = decemberBenefit.giftDetail();
    const badge = new Badge(discountAmount + giftDetail.price ?? 0).get();

    return {
      discountDetail, giftDetail, discountAmount, badge
    };
  }
}

export default App;
