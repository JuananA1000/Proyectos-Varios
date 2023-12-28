const ingredientes = document.querySelectorAll('img');
const btnShake = document.querySelector('.btnShake');
const resultado = document.querySelector('.resultado');
const coctel = [];

ingredientes.forEach((img) => img.addEventListener('click', añadirIngrediente));
btnShake.addEventListener('click', crearCoctel);

// PENDIENTE: 3. alerts personalizados
// PENDIENTE: 4. la app es una coctelería, darle un estilo más guasón y profesional
// PENDIENTE: 5. añadir más ingredientes y más cócteles
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

// La imagen del cóctel la pillamos de TheCocktailDB.com
function fetchCocktailDbAPI(res) {
  const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${res}`;
  fetch(API_URL)
    .then((respuesta) => respuesta.json())
    .then((data) => {
      console.log('COCKTAILDB DATA: ', data.drinks[0]);
      resultado.innerHTML = `<img src=${data.drinks[0].strDrinkThumb}  class='imgCoctel'  width='100'>`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
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
      fetchCocktailDbAPI('mojito');
    } else if (
      coctel.includes('Azúcar') &&
      coctel.includes('Agua con Gas') &&
      coctel.includes('Angostura') &&
      coctel.includes('Wiski')
    ) {
      fetchCocktailDbAPI('old_fashioned');
    } else if (coctel.includes('Lima') && coctel.includes('Azúcar') && coctel.includes('Cachaza')) {
      fetchCocktailDbAPI('caipirinha');
    } else {
      resultado.innerHTML = 'Esa guarrada se la va a beber tu padre';
    }
  } else {
    resultado.innerHTML = `La coctelera está vacía ${API_URL}`;
  }
}
