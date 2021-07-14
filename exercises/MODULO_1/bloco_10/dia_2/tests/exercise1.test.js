// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = require('../exercises/exercise1');

test('Testing callback parameter in "uppercase"', (done) => {
  uppercase('xablau', (string) => {
    expect(string).toBe('XABLAU');
    done();
  });
});