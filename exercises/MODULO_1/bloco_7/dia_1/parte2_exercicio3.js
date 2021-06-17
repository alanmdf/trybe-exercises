const button = document.getElementById('button');
const clickCounter = document.getElementById('click-counter')
let clickCount = 0;
button.addEventListener('click', () => {
  clickCount += 1;
  clickCounter.innerText = `Contador de clicks: ${clickCount}`;
});