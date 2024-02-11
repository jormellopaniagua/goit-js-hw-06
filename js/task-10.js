const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createButton.addEventListener("click", function () {
  createBoxes(input.value);
});

destroyButton.addEventListener("click", function () {
  destroyBoxes();
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.backgroundColor = getRandomColor();
    box.style.margin = "5px";
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
