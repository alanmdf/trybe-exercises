// Faça uma lista com as suas frutas favoritas
const specialFruit = ['laranja', 'maçã', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'leite condensado', 'uva passa'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));