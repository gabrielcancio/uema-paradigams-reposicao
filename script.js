function generateColor() {
  const color = `#${parseInt((Math.random() * 0xFFFFFF))}`;

  return color
    .toString(16)
    .padStart(6, '0');
}

function changeColor() {
  const newColor = generateColor();
  
  const container = document.querySelector('.container');
  const button = document.querySelector('.button');
  const colorView = document.querySelector('.color-view');


  container.style.backgroundColor = newColor;
  button.style.backgroundColor = newColor;
  colorView.style.backgroundColor = newColor;
  colorView.innerText = newColor;
}

const button = document.querySelector('button');
button.addEventListener('click', changeColor);

window.onload = changeColor;