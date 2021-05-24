// Parte 1 - Objetos e For/In

// Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
// Valor esperado no console: Bem-vinda, Margarida

// console.log('Bem vinda, ' + info.personagem);

// 2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
// Valor esperado no console:
// {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim'
// };

info.recorrente = 'Sim';
// console.log(info);

// 3. Faça um for/in que mostre todas as chaves do objeto.
// Valor esperado no console:
// personagem
// origem
// nota
// recorrente

// for (let key in info) {
//   console.log(key);
// }

// 4. Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
// Valor esperado no console:
// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

// for (let key in info) {
//   console.log(info[key]);
// }

// 5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
// Valor esperado no console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim'
// }

// if (info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
//   recorrente = 'Ambos recorrentes';
// }
// for (let key in info, info2) {
//   console.log(info[key] + ' e ' + info2[key]);
// }

// Parte 2 - Funções

// Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.

// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

// function verificaPalindrome (string) {
//   let stringInvertida = string.split('').reverse().join('');
//   let resultadoComparacao = false;
//   if (stringInvertida === string) {
//     resultadoComparacao = true;
//   }
//   console.log(resultadoComparacao)
// }

// verificaPalindrome('mussum');


// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function highValueIndex (array) {
  let newHighValueIndex = 0;
  for (index = 0; index < array.length; index += 1) {
    if (array[newHighValueIndex] < array[index]) {
      newHighValueIndex = index;
    }
  }
  console.log(newHighValueIndex);
}

// testArray = [50, 20, 202, 100, 93, 87, 101];
// highValueIndex(testArray);

// 2. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];
// Valor esperado no retorno da função: 6 .

// function lowerValueIndex (array) {
//   let newLowerValueIndex = 0;
//   for (index = 0; index < array.length; index += 1) {
//     if (array[newLowerValueIndex] > array[index]) {
//       newLowerValueIndex = index;
//     }
//   }
//   console.log(newLowerValueIndex);
// }

// testArray = [50, 20, 202, 100, 93, 87, 101];
// lowerValueIndex(testArray);

// 3. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda.

// function mostCharacters (array) {
//   let newMostCharacters = 0;
//   for (index = 0; index < array.length; index += 1) {
//     if (array[newMostCharacters].length < array[index].length) {
//       newMostCharacters = index;
//     }
//   }
//   console.log(array[newMostCharacters]);
// }

// testArray = ['Alan', 'Debinha', 'Magda', 'Paula', 'Caio'];
// mostCharacters(testArray);

// 4. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function mostRepeatedNumber (array) {
  let repeatedNumberCounter = [];
  for (let index = 0; index < array.length; index += 1) {
    countRepeatedNumber = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        countRepeatedNumber += 1;
      }
    }
    repeatedNumberCounter.push(countRepeatedNumber);
  }
  highValue(repeatedNumberCounter)
}

function highValue (array) {
  let newHighValue = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[newHighValueIndex] < array[index]) {
      newHighValue[index] = index;
    }
  }
  console.log(newHighValue);
}

testArray = [2, 3, 2, 5, 8, 2, 3];
mostRepeatedNumber(testArray);


// 5. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .



// 6. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false