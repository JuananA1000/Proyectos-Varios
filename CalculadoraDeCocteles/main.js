/* 
  IDEA: El cóctel resultado es un array vacío al que se le añaden ingredientes, si existe, aparece la foto del cóctel, 
  si no, aparece otra cosa, ya veré cual
*/

const ingredientes = document.querySelectorAll('img');
const btnShake = document.querySelector('.btnShake');
const coctel = [];

ingredientes.forEach(function (img) {
  img.addEventListener('click', añadirIngrediente);
});
btnShake.addEventListener('click', crearCoctel);

// Función para añadir ingredientes a la receta
function añadirIngrediente(event) {
  const titulo = event.target.getAttribute('title');
  console.log(titulo);
}

// Función para agitar el cóctel, asignada al botón 'shake'
function crearCoctel() {
  console.log('Crear coctel');
}
