const myRemoveWithoutCopy = require('./exercise3');
const array = [1, 2, 3, 4];

describe('Check myRemoveWithoutCopy behavior', () => {
  test('if returns the expected array', () => {
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4]);
  });
  test('if does not return the parameter array', () => {
    expect(myRemoveWithoutCopy(array, 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('if the parameter array has suffered changes', () => {
    const auxArray = [5, 6, 7, 8];
    expect(myRemoveWithoutCopy(auxArray, 5).length).toBe(3);
  });
  test('if returns the expected array', () => {
    expect(myRemoveWithoutCopy(array, 5)).toEqual(array);
  })
})