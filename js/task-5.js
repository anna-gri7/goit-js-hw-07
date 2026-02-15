function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const findBody = document.body;
const spanColor = document.querySelector(`.color`);
const findBtn = document.querySelector(`.change-color`);
findBtn.addEventListener("click", changeColor => 
{
  const randomColor = getRandomHexColor()
  findBody.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}
)