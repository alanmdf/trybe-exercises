const numberFatorial = number => {
  if (number < 0) {
    console.log('Não é possível calcular fatorial de números negativos!');
  } else {
    let fatorial = number;
    for (let index = 1; index < number; index += 1) {
      fatorial *= index;
      console.log(fatorial);
    }
    console.log(`O fatorial do número ${number} é: ${fatorial}.`)
  }
}

numberFatorial(4);