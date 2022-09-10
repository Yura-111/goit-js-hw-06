function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const spanNameColor = document.querySelector('.color');

const handlBtnRefClick = () => {  
  let randomHexColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomHexColor;
  spanNameColor.textContent = randomHexColor;
  console.log(randomHexColor);
}

btnChangeColor.addEventListener('click', handlBtnRefClick);
