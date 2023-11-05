const hexCharacters = "0123456789abcdef";

const changeColorButton = document.querySelector(".color-generator");
const currentColor = document.querySelector(".current-color");

changeColorButton.addEventListener("click", () =>
  changeBackgroundColor(changeColorButton)
);

function changeBackgroundColor() {
  randomHex = "";
  for (let i = 0; i < 6; i++) {
    randomHex += hexCharacters[Math.floor(Math.random(i) * 16)];
  }
  currentColor.textContent = `The current color is: #${randomHex}`;
  console.log(`the color is: ${randomHex}`);
  // console.log("this function is happening");
  // button.style["backgroundColor"] = `#${randomHex}`;
  document.body.style.backgroundColor = `#${randomHex}`;
}
