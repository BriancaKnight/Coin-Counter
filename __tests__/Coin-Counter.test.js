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
  });

  test('should create a dime prototype to return how many dimes in the amount', () => {
    expect(newChange.dime()).toEqual(10)
  });

  test('should create a nickle prototype to return how many nickles in the amount', () => {
    expect(newChange.nickle()).toEqual(20)
  });

  test('should create a penny prototype to return how many pennies in the amount', () => {
    expect(newChange.penny()).toEqual(100)
  });
})     