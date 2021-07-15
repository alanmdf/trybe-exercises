const {
  getAnimal,
  getAnimalByAge,
}  = require('../exercises/exercise6');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toBe('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade mínima', () => {
    test('Verifique o primeiro nome do animal no array retornado', () => {
      expect.assertions(1);
      const animals = ['Soneca', 'Preguiça'];
      return expect(getAnimalByAge(2)).resolves.toEqual(animals);
    });
  });

  describe('Quando não existe o animal com a idade mínima', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(6)).rejects.toBe('Nenhum animal encontrado!');
    });
  });
});
