let base = 5;
let altura = 8;
// let area = base * altura;
// let perimetro = (2*base) + (2*altura);
// console.log(area);
// console.log(perimetro);

// Agora iremos transformar este exercício numa função:

function calcularArea(base, altura) {
  let area = base * altura;
  return area;
}

calcularArea(base, altura);