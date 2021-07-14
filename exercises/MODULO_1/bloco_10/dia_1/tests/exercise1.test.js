const sum = require('../exercises/exercise1');

describe('When adding two numbers', () => {
  test('if 4 + 5 = 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  test('if 0 + 0 = 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  test('if throws an error when one of the parameters it is not a number', () => {
    expect(() => {
      sum(4,'5');
    }).toThrow();
  });
  test('if the error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4,'5');
    }).toThrow(/parameters must be numbers/);
  });
});