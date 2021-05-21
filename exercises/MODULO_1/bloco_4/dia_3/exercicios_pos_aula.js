// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

// let n = 5;
// let aux = '*';

// if (n === 0) {
//   console.log('Valor inválido');
// } else {
//   for (index = 1; index <= n; index += 1) {
//   console.log(aux.repeat(n));
//   }
// }

// A resolução desse exercício foi possível após pesquisa no google a descoberta do método "repeat"). Segue link de referência: https://pt.stackoverflow.com/questions/305361/h%C3%A1-alguma-maneira-mais-otimizada-de-multiplicar-uma-string-sem-usar-repeti%C3%A7%C3%A3o#:~:text=Sim%2C%20pode%20usar%20o%20m%C3%A9todo,log(str.

// 2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

// let n = 5;
// let aux = '*';

// if (n === 0) {
//   console.log('Valor inválido');
// } else {
//   for (index = 1; index <= n; index += 1) {
//   console.log(aux.repeat(index));
//   }

// 3- Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

// let n = 8;
// let aux = '*';
// let aux2 = ' ';

// if (n === 0) {
//   console.log('Valor inválido');
// } else {
//   for (index = 1; index <= n; index += 1) {
//   let newN = n - index
//     if (newN === 0) {
//       break;
//     } else {
//       console.log(aux2.repeat(newN) + aux.repeat(index));
//    }
//   }
// }