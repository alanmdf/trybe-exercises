const myFizzBuzz = require('../exercises/exercise4');

describe('Check myFizzBuzz behavior', () => {
  test('when a number divisible by 3 and 5 is passed by parameter, does it return "fizzbuzz"?', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('when a number divisible by 3 is passed by parameter, does it return "fizz"?', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  test('when a number divisible by 5 is passed by parameter, does it return "buzz"?', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  test('when a number not divisible by 3 or 5 is passed by parameter, does it return the number itself?', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });
  test('when the parameter called is not a number, does it return false?', () => {
    expect(myFizzBuzz('xablau')).toBeFalsy();
  });
})