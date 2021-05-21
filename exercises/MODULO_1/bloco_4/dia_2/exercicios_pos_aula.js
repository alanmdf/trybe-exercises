// Tópico: Agora a prática

// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercícios:

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for (index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let somaNumbers = 0;
// for (index = 0; index < numbers.length; index += 1) {
//   somaNumbers  += numbers[index];
// }
// console.log(somaNumbers);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//  A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let somaNumbers = 0;
// for (index = 0; index < numbers.length; index += 1) {
//   somaNumbers  += numbers[index];
// }
// let mediaNumbers = somaNumbers / numbers.length;
// console.log(mediaNumbers);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let somaNumbers = 0;
// for (index = 0; index < numbers.length; index += 1) {
//   somaNumbers  += numbers[index];
// }
// let mediaNumbers = somaNumbers / numbers.length;
// if (mediaNumbers > 20) {
//   console.log('Valor maior que 20');
// } else {
//   console.log('Valor menor que 20');
// }

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let highNumber = 0;

// for (index = 0; index < numbers.length; index += 1) {
//     if (highNumber < numbers[index]) {
//       highNumber = numbers[index];
//     }
// }

// console.log('O maior valor é: ' + highNumber);

// Obtive ajuda para resolver o exercício "5." após consulta no google e acessar o seguinte link: https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array"


// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let countOddsNumbers = 0;

// for (index = 0; index < numbers.length; index += 1) {
//   let saveNumber = numbers[index];
//   let oddNumber = saveNumber % 2;  
//   if (oddNumber !== 0) {
//     countOddsNumbers += 1;
//   } else {}
// }

// if (countOddsNumbers !== 0) {
//   console.log('Existem: ' + countOddsNumbers + ' números ímpares no array numbers');
// } else {
//   console.log('Nenhum valor ímpar encontrado');
// }

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let lowerNumber = Infinity;

// for (index = 0; index < numbers.length; index += 1) {
//   if (lowerNumber > numbers[index]) {
//     lowerNumber = numbers[index];
//   }
// }
//   console.log('O menor valor é: ' + lowerNumber);

// Após pesquisa no google, descobri o conceito de "Infinity" através desses links: 
// https://pt.stackoverflow.com/questions/215181/pegar-o-menor-valor-e-o-maior-valor-de-um-array-com-javascript
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Infinity

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let otherNumbers = [];

// for (index = 0; index < 25; index += 1) {
//   let numbers = index + 1;
//   otherNumbers.push(numbers);
// }

// console.log(otherNumbers);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// for (index2 = 0; index2 < otherNumbers.length; index2 += 1) {
//   let numberDiv = otherNumbers[index2] / 2;
//   console.log(numberDiv);
// }