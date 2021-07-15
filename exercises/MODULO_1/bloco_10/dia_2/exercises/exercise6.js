const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalObj = Animals.find((animal) => animal.name === name);
      if (animalObj) {
        return resolve(animalObj);
      };
      const errorMessage = 'Nenhum animal com esse nome!'
      return reject(errorMessage);
    }, 100);
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then(obj => obj)
};

module.exports = getAnimal;