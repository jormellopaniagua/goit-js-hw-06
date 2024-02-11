let categoriesList = document.getElementById("categories");

// Obtener todos los elementos li.item dentro de ul#categories
let categoryItems = categoriesList.querySelectorAll(".item");

// Mostrar el número de categorías
console.log("Number of categories:", categoryItems.length);

// Iterar sobre cada elemento li.item
categoryItems.forEach(function (item) {
  // Obtener el título h2 dentro del li.item actual
  var categoryTitle = item.querySelector("h2").textContent;

  // Obtener todos los elementos li dentro del li.item actual
  var categoryElements = item.querySelectorAll("ul li");

  // Mostrar la información de la categoría
  console.log("\nCategory:", categoryTitle);
  console.log("Elements:", categoryElements.length);
});
