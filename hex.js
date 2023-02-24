const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const mainArea = document.querySelector('main');
const colorValue = document.querySelector('.color');
const btn = document.getElementById('btn');

let randomColorValue = '#';

btn.addEventListener('click', () => {
  for(let i = 0; i < 6; i++)
  {
    let random = Math.floor(Math.random() * hex.length);
    randomColorValue = randomColorValue + hex[random];
  }

  mainArea.style.backgroundColor = randomColorValue;

  colorValue.innerText = randomColorValue;

  randomColorValue = '#';
})



































