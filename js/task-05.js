const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function () {
  // Obtener el valor del input
  const inputValue = nameInput.value.trim();

  // Verificar si el input está vacío
  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});
