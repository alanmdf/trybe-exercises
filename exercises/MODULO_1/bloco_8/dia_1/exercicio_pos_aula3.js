// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const countRightAnswers = (correctAnswers, studentAnswers, func) => {
  let rightAnswersCount = 0;
  return func(correctAnswers, studentAnswers, rightAnswersCount)
}

const compareAnswers = (correctAnswers, studentAnswers, rightAnswersCount) => {
  for (let index = 0; index < correctAnswers.length; index += 1) {
    if (correctAnswers[index] === studentAnswers[index]) {
      rightAnswersCount += 1;
    } else if (studentAnswers[index] === 'N.A') {
      rightAnswersCount += 0;
    } else {
      rightAnswersCount -= 0.5;
    }
  } return rightAnswersCount
}

console.log(countRightAnswers(rightAnswers, studentAnswers, compareAnswers));