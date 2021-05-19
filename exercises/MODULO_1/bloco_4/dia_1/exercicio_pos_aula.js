// Exercícios que estão no seguinte link: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-primeiros-passos/33d74e1e-05b9-4ce8-86e3-623c96afe64d/exercicios/b657369f-0505-411a-9f33-2e2572a6d6a7/agora-a-pratica/35850c83-b281-4226-b0d2-08afd8b767c2?use_case=next_button

// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// /Módulo (a % b)

let a = 3;
let b = 2;

let soma = a + b;
let subtracao = a - b;
let multi = a * b;
let div = a / b;
let mod = a % b;

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

// let x = 20;
// let y = 15;

// if (x > y) {
//   console.log("O maior número é: " + x);
// } else {
//   console.log("O maior número é: " + y);
// }

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

// let num1 = 50;
// let num2 = 50;
// let num3 = 50;

// if (num1 > num2 && num1 > num3) {
//   console.log("O maior número é: " + num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log("O maior número é: " + num2);
// } else {
//   console.log("O maior número é: " + num3);
// }

// 4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// let testNumber = 10;

// if (testNumber > 0) {
//   console.log("positive");
// } else if (testNumber < 0) {
//   console.log("negative");
// } else {
//   console.log("zero");
// }

// 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// OBS.: Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//       Um ângulo será considerado inválido se não tiver um valor positivo.

// let angle1 = 60;
// let angle2 = 20;
// let angle3 = 0;
// let angleSum = angle1 + angle2 + angle3;

// if (angle1 <= 0 || angle2 <= 0|| angle3 <= 0) {
//   console.log("Erro. Valor de ângulo indesejado.");
// } else if (angleSum <= 180) {
//   console.log("true");
// } else if (angleSum > 180) {
//   console.log("false");
// }

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

// let chessPiece = 'peAo';
// chessPiece = chessPiece.toLowerCase()

// switch (chessPiece) {
//   case 'peao':
//     console.log("Movimenta-se 01 casa para a frente");
//     break;
//   case 'torre':
//     console.log("Movimenta-se N casa(s) na horizontal ou na vertical");
//     break;
//   case 'cavalo':
//     console.log("Movimenta-se em formato de 'L' qualquer direção");
//     break;
//   case 'bispo':
//     console.log("Movimenta-se N casa(s) nas diagonais");
//     break;
//   case 'rainha':
//     console.log("Movimenta-se N casa(s) na horizontal, na vertical ou nas diagonais");
//     break;
//   case 'rei':
//     console.log("Movimenta-se 01 casa em qualquer direção");
//     break;
//   default:
//     console.log("Erro. Peça inválida.");
//     break;
// }

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

// let nota = 49;

// if (nota >= 90) {
//   console.log("A");
// } else if (nota >= 80) {
//   console.log("B");
// } else if (nota >= 70) {
//   console.log("C");
// } else if (nota >= 60) {
//   console.log("D");
// } else if (nota >= 50) {
//   console.log("E");
// } else {
//   console.log("F");
// }

// 8. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

// let num1 = parseInt(Math.random() * 65536);
// let num2 = parseInt(Math.random() * 65536);
// let num3 = parseInt(Math.random() * 65536);
// let testeParNum1 = num1 % 2;
// let testeParNum2 = num2 % 2;
// let testeParNum3 = num3 % 2;

// console.log(num1);
// console.log(num2);
// console.log(num3);

// if (testeParNum1 === 0 || testeParNum2 === 0 || testeParNum3 === 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 9. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

// let num1 = parseInt(Math.random() * 65536);
// let num2 = parseInt(Math.random() * 65536);
// let num3 = parseInt(Math.random() * 65536);
// let testeImparNum1 = num1 % 2;
// let testeImparNum2 = num2 % 2;
// let testeImparNum3 = num3 % 2;

// console.log(num1);
// console.log(num2);
// console.log(num3);

// if (testeImparNum1 !== 0 || testeImparNum2 !== 0 || testeImparNum3 !== 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto

// let custoProduto = 10;
// let valorVenda = 20;
// let taxaImposto = 1.2;
// let custoTotal = custoProduto * taxaImposto;

// if (custoProduto < 0) {
//   console.log("Erro. Valor do custo inválido.");
// } else if (valorVenda <0) {
//   console.log("Erro. Valor da venda inválida.");
// } else {
//   let lucroTotal = (valorVenda - custoTotal) * 1000;
//   console.log("Seu lucro é de: R$ " + lucroTotal)
// }

// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.

// let salarioBruto = 10000;
// let inssOitoPorcento = 0.08;
// let inssNovePorcento = 0.09;
// let inssOnzePorcento = 0.11;
// let inssMax= 570.88;
// let irSeteEMeioPorcento = 0.075;
// let irQuinzePorcento = 0.15;
// let irVinteEDoisEMeioPorcento = 0.225;
// let irVinteESeteEMeioPorcento = 0.275;

// if (salarioBruto <= 1556.94) {
//   let salarioDescontoInss = salarioBruto - (salarioBruto * inssOitoPorcento);
//   salarioDescontoInss = salarioDescontoInss.toFixed(2);
//   if (salarioDescontoInss <= 1903.98) {
//     console.log('Seu salário é: R$ ' + salarioDescontoInss);
//   } else if (salarioDescontoInss <= 2.826,65) {
//     taxaDescontoIr = (salarioDescontoInss * irSeteEMeioPorcento) - 142,80;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   } else if (salarioDescontoInss <= 3751.05) {
//     taxaDescontoIr = (salarioDescontoInss * irQuinzePorcento) - 354.80;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   } else if (salarioDescontoInss <= 4664.68) {
//     taxaDescontoIr = (salarioDescontoInss * irVinteEDoisEMeioPorcento) - 636.13;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   } else {
//     taxaDescontoIr = (salarioDescontoInss * irVinteESeteEMeioPorcento) - 869.36;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   }
// } else if (salarioBruto <= 2594.92) {
//   let salarioDescontoInss = salarioBruto - (salarioBruto * inssNovePorcento);
//   salarioDescontoInss = salarioDescontoInss.toFixed(2);
//   if (salarioDescontoInss <= 1903.98) {
//     console.log('Seu salário é: R$ ' + salarioDescontoInss);
//   } else if (salarioDescontoInss <= 2.826,65) {
//     taxaDescontoIr = (salarioDescontoInss * irSeteEMeioPorcento) - 142,80;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   } else if (salarioDescontoInss <= 3751.05) {
//     taxaDescontoIr = (salarioDescontoInss * irQuinzePorcento) - 354.80;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   } else if (salarioDescontoInss <= 4664.68) {
//     taxaDescontoIr = (salarioDescontoInss * irVinteEDoisEMeioPorcento) - 636.13;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   } else {
//     taxaDescontoIr = (salarioDescontoInss * irVinteESeteEMeioPorcento) - 869.36;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   }
// } else if (salarioBruto <= 5189.82) {
//   let salarioDescontoInss = salarioBruto - (salarioBruto * inssOnzePorcento);
//   salarioDescontoInss = salarioDescontoInss.toFixed(2);
//   if (salarioDescontoInss <= 1903.98) {
//     console.log('Seu salário é: R$ ' + salarioDescontoInss);
//   } else if (salarioDescontoInss <= 2.826,65) {
//     taxaDescontoIr = (salarioDescontoInss * irSeteEMeioPorcento) - 142,80;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   } else if (salarioDescontoInss <= 3751.05) {
//     taxaDescontoIr = (salarioDescontoInss * irQuinzePorcento) - 354.80;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   } else if (salarioDescontoInss <= 4664.68) {
//     taxaDescontoIr = (salarioDescontoInss * irVinteEDoisEMeioPorcento) - 636.13;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   } else {
//     taxaDescontoIr = (salarioDescontoInss * irVinteESeteEMeioPorcento) - 869.36;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   }
// } else {
//   let salarioDescontoInss = salarioBruto - inssMax;
//   salarioDescontoInss = salarioDescontoInss.toFixed(2);
//   if (salarioDescontoInss <= 1903.98) {
//     console.log('Seu salário é: R$ ' + salarioDescontoInss);
//   } else if (salarioDescontoInss <= 2.826,65) {
//     taxaDescontoIr = (salarioDescontoInss * irSeteEMeioPorcento) - 142,80;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   } else if (salarioDescontoInss <= 3751.05) {
//     taxaDescontoIr = (salarioDescontoInss * irQuinzePorcento) - 354.80;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   } else if (salarioDescontoInss <= 4664.68) {
//     taxaDescontoIr = (salarioDescontoInss * irVinteEDoisEMeioPorcento) - 636.13;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   } else {
//     taxaDescontoIr = (salarioDescontoInss * irVinteESeteEMeioPorcento) - 869.36;
//     salarioDescontoIr = salarioDescontoInss - taxaDescontoIr;
//     salarioDescontoIr = salarioDescontoIr.toFixed(2);
//     console.log('Seu salário é: R$ ' + salarioDescontoIr);
//   }
// }

