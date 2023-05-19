const change = document.getElementById("change");
const color = document.getElementById("color");
const clipboardEl = document.querySelector("#clipboard i");
const copyPopupEl = document.getElementById("copy-popup");
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

// copy to clipboard
clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const colorValue = color.textContent;
  textarea.value = colorValue;
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textarea.value);
  textarea.remove();

  copyPopupEl.style.display = "block";
  setTimeout(() => (copyPopupEl.style.display = "none"), 1000);
});
