const {
  users,
  getUserName,
} = require('../exercises/exercise2and3');

describe('When using "getUserName":', () => {
  it('should return the corresponding username to the id', async () => {
    const result = await getUserName(4);
    expect(result).toBe('Mark');
  });
  it('should return an error message if the user its not found', async () => {

    try {
      await getUserName(6);
    } catch (obj) {
      expect(obj).toEqual({ error: 'User with 6 not found.' });
    }
  });
});