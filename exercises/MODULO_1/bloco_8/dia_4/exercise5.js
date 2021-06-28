const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  const checkA = names.reduce((acc, currentValue) => {
    return acc + currentValue.match(/a/ig).length;
  }, 0);
  return checkA
}
assert.deepStrictEqual(containsA(), 20);