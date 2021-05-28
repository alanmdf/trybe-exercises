function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1

// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

createDaysOfTheMonth();

function createDaysOfTheMonth() {
  const ulDays = document.getElementById('days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = document.createElement('li');
    day.className = 'day';
    day.innerText = dezDaysList[index];
    if (day.innerText === '24' || day.innerText === '25' || day.innerText === '31') {
      day.className += ' holiday';
    } if (day.innerText === '4' || day.innerText === '11' || day.innerText === '18' || day.innerText === '25') {
      day.className += ' friday';
    } ulDays.appendChild(day);
  }
}

// Exercício 2:

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

// Adicione a este botão a ID "btn-holiday" .

// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

const holidaysButton = document.createElement('button');

createHolidaysButton();
function createHolidaysButton() {
  holidaysButton.innerText = 'Feriados';
  holidaysButton.setAttribute('id', 'btn-holiday');
  let buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(holidaysButton);
}

// Exercício 3:

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".

// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

holidaysButton.addEventListener('click', changeBGColor);

function changeBGColor() {
  let holidays = document.getElementsByClassName('holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    holidays[index].style.backgroundColor = 'yellow';
  }
}

// Exercício 4:

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

// Adicione a este botão o ID "btn-friday" .

// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

const fridayButton = document.createElement('button');

createFridayButton();
function createFridayButton() {
  fridayButton.innerText = 'Sexta-feira';
  fridayButton.setAttribute('id', 'btn-friday');
  let buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(fridayButton);
}

// Exercício 5:

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

fridayButton.addEventListener('click', changeToSextou);

function changeToSextou() {
  let fridays = document.querySelectorAll('.friday');
  for (let index = 0; index < fridays.length; index += 1) {
    fridays[index].innerText = 'SEXTOU';
  }
}

// Exercício 6:

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// Dica - Propriedade: event.target.

const daysOfTheMonth = document.getElementsByClassName('day');

for (let index = 0; index < daysOfTheMonth.length; index += 1) {
  daysOfTheMonth[index].addEventListener('mousemove', zoomDay);
  daysOfTheMonth[index].addEventListener('mouseleave', zoomOutDay);
}

function zoomDay (element) {
  element.target.style.fontSize = '45px';
}

function zoomOutDay (element) {
  element.target.style.fontSize = '20px';
}

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

const myTasksDiv = document.querySelector('.my-tasks');

addTasks('Cozinhar');
addTasks('Estudar');
addTasks('Assistir Filme');

function addTasks(task) {
  let newTask = document.createElement('span');
  newTask.innerText = task;
  myTasksDiv.appendChild(newTask);
}

// Exercício 8:

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.

// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.

// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

// function taskColor() {
//   let newTaskColor = document.createElement('div');

// }

// const myTasksHeader = document.querySelector('.my-tasks').firstChild;
// console.log(myTasksHeader);

// console.log(document.querySelector('.my-tasks').children);