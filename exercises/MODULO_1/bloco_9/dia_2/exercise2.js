const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const promise = new Promise((resolve, reject) => {
  const array = [];
  for (let index = 1; index < 11; index += 1) {
    const randomNumber = getRandomIntInclusive(1, 50);
    array.push(randomNumber);
  }
  // console.log(array);
  const newArray = array.map((item) => item * item);
  // console.log(newArray);
  const arraySum = newArray.reduce((acc, curr) => acc + curr)
  // console.log(arraySum);
  if (arraySum < 8000) {
    resolve(arraySum);
  } else {
    reject();
  }
});

const testPromise = () => {
  promise
  .then((result) => [result/2, result/3, result/5, result/10])
  .then((result) => result.reduce((acc, curr) => console.log(acc + curr), 0))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
}

testPromise();