const genRandomNumber = require('../exercises/exercise1');

const genRandomNumberMocked = jest.fn(genRandomNumber).mockReturnValue(10)

describe('When using genRandomNumber', () => {
  it('should have been called, test return and how many times its been called', () => {
    expect(genRandomNumberMocked()).toBe(10);
    expect(genRandomNumberMocked).toHaveBeenCalled();
    expect(genRandomNumberMocked).toHaveBeenCalledTimes(1);
  });
});

const genRandomNumberMocked2 = jest.fn(genRandomNumber).mockImplementationOnce((a, b) => a / b);

describe('New implementation in the function', () => {
  it('should return a division', () => {
    expect(genRandomNumberMocked2(4, 2)).toBe(2);
    expect(genRandomNumberMocked2).toHaveBeenCalled();
    expect(genRandomNumberMocked2).toHaveBeenCalledTimes(1);expect(genRandomNumberMocked2).toHaveBeenCalledWith(4, 2);
  });
});