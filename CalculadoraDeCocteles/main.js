const ingredientes = document.querySelectorAll('img');
const btnShake = document.querySelector('.btnShake');
const coctel = [];

ingredientes.forEach((img) => img.addEventListener('click', añadirIngrediente));
btnShake.addEventListener('click', crearCoctel);

// Añadir ingredientes a la receta
function añadirIngrediente(event) {
  const ingrediente = event.target.getAttribute('title');
  const resultado = document.querySelector('.resultado');

  if (ingrediente && !coctel.includes(ingrediente)) {
    coctel.push(ingrediente);
    resultado.innerHTML = coctel.join(' + ');
  } else {
    alert('repetido');
  }

  // PENDIENTE: Borrar
  console.log('Este cóctel lleva: ', coctel);
}

// Agitar el cóctel, asignada al botón 'shake'
function crearCoctel() {
  console.log('Crear coctel');
}
