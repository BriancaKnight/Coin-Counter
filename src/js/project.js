export class CoinCounter {
  constructor(amount) {
    this.amount = amount;
    this.coins = { quarters: 0, dimes: 0, nickles: 0, pennies: 0 };
  }

  change() {
    if (this.amount <= 0) {
      return 0;
    }
    if (this.amount >= 0.25) {
      this.coins.quarters++;
      this.amount -= 0.25;
    } else if (this.amount >= 0.10) {
      this.coins.dimes++;
      this.amount -= 0.10;
    } else if (this.amount >= 0.05) {
      this.coins.nickles++;
      this.amount -= 0.05;
    } else if (this.amount >= 0.01) {
      this.coins.pennies++;
      this.amount -= 0.01;
    } else {
      return this.coins
    }

    return this.change();
  }
}
