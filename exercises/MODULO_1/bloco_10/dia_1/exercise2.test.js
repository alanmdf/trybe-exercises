const myRemove = require('./exercise2');
const array = [1, 2, 3, 4];

describe('Check myRemove function behavior', () => {
  test('if returns the correct array', () => {
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  });
  test('if does not return the parameter array', () => {
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('if the parameter array does not suffer changes', () => {
    const auxArray = [5, 6, 7, 8];
    myRemove(auxArray, 5);
    expect(auxArray).toEqual([5, 6, 7, 8]);
  });
  test('if returns the expected array', () => {
    expect(myRemove(array, 5)).toEqual(array);
  })
})
