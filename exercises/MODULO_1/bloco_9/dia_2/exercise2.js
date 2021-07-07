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
  const arraySum = newArray.reduce((acc, curr) => acc += curr)
  // console.log(arraySum);
  if (arraySum < 8000) {
    resolve();
  } else {
    reject();
  }
});

const testPromise = async () => {
  promise
  .then(() => console.log('Promise resolvida'))
  .catch(() => console.log('Promise rejeitada'))
}

testPromise();