import { CoinCounter } from "../src/js/project";

describe('CoinCounter', () => {
  let newChange;

  beforeEach(() => {
    newChange = new CoinCounter(1)
  });

  test('should create object with an dollar ammount', () => {
    expect(newChange.ammount).toEqual(1)
  })
})