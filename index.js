const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

let width = 70;
let height = 50;

function handleClick() {
  width *= 1.4;
  height *= 1.4;
  yesBtn.style.width = `${width}px`;
  yesBtn.style.height = `${height}px`;
}
