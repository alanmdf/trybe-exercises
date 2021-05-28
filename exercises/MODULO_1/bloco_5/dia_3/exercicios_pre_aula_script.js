const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;

// 2.1 Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

divDois.addEventListener('click', addClassTech);
divTres.addEventListener('click', addClassTech);
divUm.addEventListener('click', addClassTech);

function addClassTech(element) {
  let prevElement = document.getElementsByClassName('tech')[0];
  prevElement.className = '';
  element.target.className = 'tech';
}


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';

input.addEventListener('keyup',changeTechText);

function changeTechText() {
  let textChange = document.getElementsByClassName('tech')[0];
  textChange.innerText = input.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 4.1 Que tal redirecionar para seu portifólio?

myWebpage.addEventListener('dblclick', redirectToPortifolio)

function redirectToPortifolio() {
  window.open('https://alanmdf.github.io');
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

myWebpage.addEventListener('mouseover', changeColorToRed);
myWebpage.addEventListener('mouseleave', changeColorToWhite);

function changeColorToRed(element) {
  element.target.style.color = 'red';
}

function changeColorToWhite(element) {
  element.target.style.color = 'white';
}

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target, que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio navegador fará esse trabalho por você, não é legal? Desse jeito, o event.target na nossa função retornará o objeto 'divUm'.