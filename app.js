const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const mainArea = document.querySelector('main');
const colorValue = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  let random = Math.floor((Math.random() * colors.length));
  mainArea.style.backgroundColor = colors[random];

  colorValue.innerText = colors[random];
})

















