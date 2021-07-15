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
      const errorMessage = 'Nenhum animal com esse nome!';
      return reject(errorMessage);
    }, 100);
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then(obj => obj)
};

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimals = Animals.filter((animal) => animal.age >= age).map((animal) => animal.name);
      if (listAnimals.length !== 0) {
        return resolve(listAnimals);
      };
      const messageError = 'Nenhum animal encontrado!';
      return reject(messageError);
    }, 100);
  })
);

const getAnimalByAge = (age) => {
  return findAnimalByAge(age)
    .then(animal => animal);
};

module.exports = {
  getAnimal,
  getAnimalByAge,
} 