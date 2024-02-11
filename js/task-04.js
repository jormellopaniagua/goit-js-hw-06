// Obtener los elementos relevantes
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById("value");

// Variable para almacenar el valor del contador
let counterValue = 0;

// Función para actualizar el valor del contador en la interfaz
function updateCounterValue() {
  valueSpan.textContent = counterValue;
}

// Escucha de clic para el botón de decremento
decrementButton.addEventListener("click", function () {
  counterValue--;
  updateCounterValue();
});

// Escucha de clic para el botón de incremento
incrementButton.addEventListener("click", function () {
  counterValue++;
  updateCounterValue();
});

// Inicializar el valor del contador en la interfaz
updateCounterValue();
