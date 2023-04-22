const change = document.getElementById("change");
const color = document.getElementById("color");
const body = document.body;

change.addEventListener("click", chnageBG);

function chnageBG() {
  const colr1 = getRandomRGB();
  const colr2 = getRandomRGB();
  const colr3 = getRandomRGB();

  const colorString = `rgb(${colr1}, ${colr2}, ${colr3})`;

  body.style.background = colorString;
  color.innerText = colorString;
}

function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}
