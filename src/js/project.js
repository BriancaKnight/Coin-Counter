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

export const getChange = (amount) => {
  const type = { quarters: 0, dimes: 0, nickles: 0, pennies: 0 };

  return (coin) => {
    if (amount >= .25 && coin === 'quarters') {
      const quarterCount = Math.floor(amount / .25);
      type.quarters += quarterCount
      amount -= quarterCount * .25;
      return type.quarters;
    } else if (amount >= .10 && coin === 'dimes') {
      const dimeCount = Math.floor(amount / .10);
      type.dimes += dimeCount
      amount -= dimeCount * .10;
      return type.dimes;
    } else if (amount >= .05 && coin === 'nickles') {
      const nickleCount = Math.floor(amount / .05);
      type.nickles += nickleCount
      amount -= nickleCount * .05;
      return type.nickles;
    } else if (amount >= .01 && coin === 'pennies') {
      const pennyCount = Math.floor(amount / .01);
      type.pennies += pennyCount
      amount -= pennyCount * .01;
      return type.pennies;
    } else {
      return 0;
    }
  }
}

