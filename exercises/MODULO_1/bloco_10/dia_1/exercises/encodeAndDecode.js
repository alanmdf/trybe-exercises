const encode = (string) => {
  const array = [...string];
  let newString = '';
  array.forEach((letter) => {
    if (letter === 'a') {
      newString += '1';
    } else if (letter === 'e') {
      newString += '2';
    } else if (letter === 'i') {
      newString += '3';
    } else if (letter === 'o') {
      newString += '4';
    } else if (letter === 'u') {
      newString += '5';
    } else {
      newString += letter;
    }
  });
  return newString;
};

const decode = (string)  => {
  const array = [...string];
  let newString = '';
  array.forEach((number) => {
    if (number === '1') {
      newString += 'a';
    } else if (number === '2') {
      newString += 'e';
    } else if (number === '3') {
      newString += 'i';
    } else if (number === '4') {
      newString += 'o';
    } else if (number === '5') {
      newString += 'u';
    } else {
      newString += number;
    }
  });
  return newString;
};

module.exports = {
  encode,
  decode
}