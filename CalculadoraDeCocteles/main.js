const ingredientes = document.querySelectorAll('img');
const btnShake = document.querySelector('.btnShake');
const resultado = document.querySelector('.resultado');
const coctel = [];

ingredientes.forEach((img) => img.addEventListener('click', añadirIngrediente));
btnShake.addEventListener('click', crearCoctel);

// PENDIENTE: 1. eliminar console.logs, que aparezca la imagen del coctel en la pantalla
// PENDIENTE: 2. alerts personalizados
// PENDIENTE: 3. la app es una coctelería, darle un estilo más guasón y profesional
// PENDIENTE: 4. añadir más ingredientes y más cócteles
// IDEA: al pulsar 'shake', queremos que la pantalla vibre un poco, y que el cóctel salga a los 3 segundos

// Añadir ingredientes a la receta
function añadirIngrediente(event) {
  const ingrediente = event.target.getAttribute('title');

  if (ingrediente && !coctel.includes(ingrediente)) {
    coctel.push(ingrediente);
    resultado.innerHTML = coctel.join(' + ');
  } else {
    alert('repetido');
  }
}

// Agitar el cóctel, asignada al botón 'shake'
function crearCoctel() {
  resultado.innerHTML = '';

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
