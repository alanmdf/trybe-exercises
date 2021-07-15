// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const {
  toUppercase,
  firstLetter,
  concatenateString
} = require('../exercises/exercise4and5');

jest.mock('../exercises/exercise4and5');

const toLowercase = toUppercase.mockImplementation((string) => string.toLowerCase());

describe('When implementing new scope to "toUppercase"', () => {
  it('should return the string passed by parameter in lower case', () => {
    expect(toLowercase('XABLAU')).toBe('xablau');
    expect(toLowercase).toHaveBeenCalled();
    expect(toLowercase).toHaveBeenCalledTimes(1);
    expect(toLowercase).toHaveBeenCalledWith('XABLAU');
  });
});

const lastLetter = firstLetter.mockImplementation((string) => string.charAt(string.length-1));

describe('When implementing new scope to "firstLetter"', () => {
  it('should return the last character of the string passed by parameter', () => {
    expect(lastLetter('xablau')).toBe('u');
    expect(lastLetter).toHaveBeenCalled();
    expect(lastLetter).toHaveBeenCalledTimes(1);
    expect(lastLetter).toHaveBeenCalledWith('xablau');
  });
});

const concatenateThreeStrings = concatenateString.mockImplementation((str1, str2, str3) => str1 + str2 + str3);

describe('When implementing new scope to "concatenateString"', () => {
  it('should return the concatenation of the three strings passed by parameters', () => {
    expect(concatenateThreeStrings('xablau', 'alan', 'trybe')).toBe('xablaualantrybe');
    expect(concatenateThreeStrings).toHaveBeenCalled();
    expect(concatenateThreeStrings).toHaveBeenCalledTimes(1);
    expect(concatenateThreeStrings).toHaveBeenCalledWith('xablau', 'alan', 'trybe');
  });
});




