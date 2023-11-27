export class CoinCounter {
    constructor(amount) {
        this.amount = amount;
    }

    quarter() {
      return Math.floor(this.amount / .25);
    }

}
