let notaPessoaCandidata = 81;

if (notaPessoaCandidata >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (notaPessoaCandidata < 80 && notaPessoaCandidata >= 60) {
  console.log("Você está na nossa lista de espera");
} else if (notaPessoaCandidata < 60) {
  console.log("Você foi reprovada(o)");
}