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
    // PENDIENTE: alert personalizado
    alert('repetido');
  }
}

// Agitar el cóctel, asignada al botón 'shake'
function crearCoctel() {
  if (coctel.length > 0) {
    if (
      coctel.includes('Lima') &&
      coctel.includes('Agua con Gas') &&
      coctel.includes('Ron') &&
      coctel.includes('Azúcar')
    ) {
      console.log('Mojito');
    } else if (
      coctel.includes('Azúcar') &&
      coctel.includes('Agua con Gas') &&
      coctel.includes('Angostura') &&
      coctel.includes('Wiski')
    ) {
      console.log('Old Fashioned');
    } else if (coctel.includes('Lima') && coctel.includes('Azúcar') && coctel.includes('Cachaza')) {
      console.log('Caipirinha');
    } else {
      console.log('Ese cóctel no esite');
    }
  } else {
    console.log('Coctelera vacía');
  }
}
