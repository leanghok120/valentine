const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const header = document.getElementById("header");
const img = document.getElementById("img");

let width = 70;
let height = 50;

function handleYes() {
  header.textContent = "YAYYYYYY I LOVE YOU POOKIE :3";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  img.src = "./bear-kiss-bear-kisses.gif";
}

function handleNo() {
  width *= 1.4;
  height *= 1.4;
  yesBtn.style.width = `${width}px`;
  yesBtn.style.height = `${height}px`;
}
