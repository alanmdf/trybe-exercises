const {
  users,
  getUserName,
} = require('../exercises/exercise2and3');

describe('When using "getUserName":', () => {
  it('should return the corresponding username to the id', () => {
    expect.assertions(1);

    return getUserName(4)
      .then((string) => {
        expect(string).toBe('Mark');
      });
  });
  it('should return an error message if the user its not found', () => {
    expect.assertions(1)

    return getUserName(6)
      .catch((obj) => {
        expect(obj).toEqual({ error: 'User with 6 not found.' })
      });
  });
});