const numberFatorial = number => {
  let fatorial = 0;
  for (let index = 1; index <= number; index += 1) {
    fatorial += index;
  }
  console.log(`O fatorial do número ${number} é: ${fatorial}.`)
}

numberFatorial(5);