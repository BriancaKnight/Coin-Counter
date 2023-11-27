import { CoinCounter } from "../src/js/project";

describe('CoinCounter', () => {
  let newChange;

  beforeEach(() => {
    newChange = new CoinCounter(1.00)
  });

  test('should create object with an dollar amount', () => {
    expect(newChange.amount).toEqual(1.00)
  });

  test('should create a quarter prototype to return how many quarters in the amount', () => {
    expect(newChange.quarter()).toEqual(4)
  })
})