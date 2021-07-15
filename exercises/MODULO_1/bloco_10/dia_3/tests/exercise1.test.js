const genRandomNumber = require('../exercises/exercise1');

const genRandomNumberMocked = jest.fn(genRandomNumber).mockReturnValue(10)

describe('When using genRandomNumber', () => {
  it('should have been called, test return and how many times its been called', () => {
    expect(genRandomNumberMocked()).toBe(10);
    expect(genRandomNumberMocked).toHaveBeenCalled();
    expect(genRandomNumberMocked).toHaveBeenCalledTimes(1);
  });
});