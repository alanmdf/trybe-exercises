const genRandomNumber = require('../exercises/exercise1_2_3');

// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const genRandomNumberMocked = jest.fn(genRandomNumber).mockReturnValue(10);

describe('When using genRandomNumber', () => {
  it('should have been called, test return and how many times its been called', () => {
    expect(genRandomNumberMocked()).toBe(10);
    expect(genRandomNumberMocked).toHaveBeenCalled();
    expect(genRandomNumberMocked).toHaveBeenCalledTimes(1);
  });
});


// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
const genRandomNumberMocked2 = jest.fn(genRandomNumber).mockImplementationOnce((a, b) => a / b);

describe('New implementation in the function', () => {
  it('should return a division', () => {
    expect(genRandomNumberMocked2(4, 2)).toBe(2);
    expect(genRandomNumberMocked2).toHaveBeenCalled();
    expect(genRandomNumberMocked2).toHaveBeenCalledTimes(1);expect(genRandomNumberMocked2).toHaveBeenCalledWith(4, 2);
  });
});

// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

const genRandomNumberMocked3 = jest.fn(genRandomNumber).mockImplementation((a, b, c) => a * b * c );

describe('Another new implementation in the function', () => {
  it('should return the product of 3 numbers multiplied', () => {
    expect(genRandomNumberMocked3(2, 2, 2)).toBe(8);
    expect(genRandomNumberMocked3).toHaveBeenCalled();
    expect(genRandomNumberMocked3).toHaveBeenCalledTimes(1);
    expect(genRandomNumberMocked3).toHaveBeenCalledWith(2, 2, 2);
  });
});

const genRandomNumberMocked4 = jest.fn(genRandomNumber).mockReset().mockImplementation((number) => number * 2);

describe('Last implementation in the function', () => {
  it('should return the double of the number', () => {
    expect(genRandomNumberMocked4).toHaveBeenCalledTimes(0);
    expect(genRandomNumberMocked4(2)).toBe(4);
    expect(genRandomNumberMocked4).toHaveBeenCalled();
    expect(genRandomNumberMocked4).toHaveBeenCalledTimes(1);
    expect(genRandomNumberMocked4).toHaveBeenCalledWith(2);
  });
});
