const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Obtener el elemento ul#ingredients
const ingredientsList = document.getElementById("ingredients");

// Crear y agregar elementos li para cada ingrediente
ingredients.forEach((ingredient) => {
  // Crear un elemento li
  const listItem = document.createElement("li");

  // Añadir la clase 'item' al elemento li
  listItem.classList.add("item");

  // Establecer el contenido de texto del elemento li como el nombre del ingrediente
  listItem.textContent = ingredient;

  // Añadir el elemento li al elemento ul#ingredients
  ingredientsList.appendChild(listItem);
});
