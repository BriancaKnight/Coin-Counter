export class CoinCounter {
    constructor(amount) {
        this.amount = amount;
    }

    quarter() {
      return Math.floor(this.amount / .25);
    }

    dime() {
        return Math.floor(this.amount / .10);
    }

    nickle() {
      return Math.floor(this.amount / .05);
    }

    penny() {
        
    }
}
