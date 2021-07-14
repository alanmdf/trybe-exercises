const { encode, decode } = require('../exercises/encodeAndDecode');

describe('About Encode and Decode behaviors:', () => {
  test('are they functions?', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  test('In Encode function, are the vowels passed as parameters converted to the respective numbers?', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  test('In Decode function, are the numbers passed as parameters converted do the respective vowels?', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  test('Do they maintain the characters that are not supposed to de be encoded or decoded?', () => {
    expect(encode('xablau')).toBe('x1bl15');
    expect(decode('x1bl15')).toBe('xablau');
  });
  test('The returns of the functions does have the same length of the parameters?', () => {
    expect(encode('xablau').length).toBe(6);
    expect(decode('x1bl15').length).toBe(6);
  });
});