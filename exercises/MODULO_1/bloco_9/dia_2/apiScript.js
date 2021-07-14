// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const printJoke = (obj) => {
  document.getElementById('jokeContainer').innerHTML = obj.joke
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => printJoke(data));
};

window.onload = () => fetchJoke();