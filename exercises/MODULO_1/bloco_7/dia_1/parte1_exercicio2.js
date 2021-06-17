const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortArray = (array) => {
  array.sort((a, b) => a - b);
  console.log(`Os números ${array} se encontram ordenados de forma crescente!`);
}

console.log(oddsAndEvens);
sortArray(oddsAndEvens);