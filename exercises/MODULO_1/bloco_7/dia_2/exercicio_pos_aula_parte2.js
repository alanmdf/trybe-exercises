const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// // 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addShift = (object, key, value) => object[key] = value;
addShift(lesson2, 'turno', 'manhã')
// console.log(lesson2);

// // 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// const listKeys = object => {
//   let keysArray = Object.keys(object);
//   for (index in keysArray) {
//     console.log(keysArray[index]);
//   }
// }
// listKeys(lesson1);

// // 3. Crie uma função para mostrar o tamanho de um objeto.




// // 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

// const listValues = object => {
//   let valuesArray = Object.values(object);
//   for (index in valuesArray) {
//     console.log(valuesArray[index]);
//   }
// }
// listValues(lesson3);

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
// console.log(allLessons);

// {
//   lesson1:
//    { materia: 'Matemática',
//      numeroEstudantes: 20,
//      professor: 'Maria Clara',
//      turno: 'manhã' },
//   lesson2:
//    { materia: 'História',
//      numeroEstudantes: 20,
//      professor: 'Carlos',
//      turno: 'noite' },
//   lesson3:
//    { materia: 'Matemática',
//      numeroEstudantes: 10,
//      professor: 'Maria Clara',
//      turno: 'noite' }
// };

const allLessons = {};
const objectLesson1 = {};
objectLesson1.lesson1 = lesson1;
const objectLesson2 = {};
objectLesson2.lesson2 = lesson2;
const objectLesson3 = {};
objectLesson3.lesson3 = lesson3;
Object.assign(allLessons, objectLesson1, objectLesson2, objectLesson3);
console.log(allLessons);