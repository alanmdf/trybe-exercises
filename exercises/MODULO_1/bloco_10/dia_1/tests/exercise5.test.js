const { obj1, obj2, obj3 } = require('../exercises/exercise5');

describe('Compare objects', () => {
  test('Object 1 === Object 2?', () => {
    expect(obj1).toEqual(obj2);
  });
  test('Object 1 !== Object 3?', () => {
    expect(obj1).not.toEqual(obj3);
  });
  test('Object 2 !== Object 3?', () => {
    expect(obj2).not.toEqual(obj3);
  });
})