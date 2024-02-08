const ingredientes = document.querySelectorAll('img');
const btnShake = document.querySelector('.btnShake');
const btnEmpty = document.querySelector('.btnEmpty');
let resultado = document.querySelector('.resultado');
let coctel = [];
let tiempoDeAgitado = 3000;

ingredientes.forEach((img) => img.addEventListener('click', añadirIngrediente));
btnShake.addEventListener('click', crearCoctel);
btnEmpty.addEventListener('click', vaciarCoctelera);

// Añadir ingredientes al cóctel
function añadirIngrediente(event) {
  const ingrediente = event.target.getAttribute('title');

  if (ingrediente && !coctel.includes(ingrediente)) {
    coctel.push(ingrediente);
    resultado.innerHTML = coctel.join(' + ');
  } else {
    alertPersonalizado();
  }
}

// La pantalla empezará a vibrar cuando pulsemos, el botón 'shake'
function agitarCoctel() {
  const pantalla = document.getElementsByTagName('body')[0];
  let tiempoInicio = Date.now();

  resultado.innerHTML = 'Agitando...';

  function vibrar() {
    const tiempoActual = Date.now();
    const tiempoTranscurrido = tiempoActual - tiempoInicio;

    // Detener el agitado
    if (tiempoTranscurrido > tiempoDeAgitado) {
      clearInterval(vibracion);
      pantalla.style.transform = 'none';
    } else {
      // Generar valores aleatorios para la vibración en los ejes X e Y
      const randomX = Math.random() * 10 - 7;
      const randomY = Math.random() * 6 - 3;

      pantalla.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
  }

  const vibracion = setInterval(vibrar, 100);
}

// Crear distintos cócteles en función de los ingredientes que haya
function crearCoctel() {
  resultado.innerHTML = '';

  if (coctel.length > 0) {
    if (
      coctel.includes('Ron') &&
      coctel.includes('Agua con Gas') &&
      coctel.includes('Lima') &&
      coctel.includes('Hierbabuena') &&
      coctel.includes('Azúcar')
    ) {
      fetchCocktailDbAPI('mojito');
      coctel = []
    } else if (
      coctel.includes('Wiski') &&
      coctel.includes('Agua con Gas') &&
      coctel.includes('Angostura') &&
      coctel.includes('Azúcar')
    ) {
      fetchCocktailDbAPI('old fashioned');
      coctel = []
    } else if (coctel.includes('Cachaza') && coctel.includes('Lima') && coctel.includes('Azúcar')) {
      fetchCocktailDbAPI('caipirinha');
      coctel = []
    } else {
      resultado.innerHTML = 'Esa guarrada se la va a beber tu padre. Vacía la coctelera';
    }
  } else {
    resultado.innerHTML = 'La coctelera está vacía. Échale cosas';
  }
}

// Vaciamos el contenido de la pantalla
function vaciarCoctelera() {
  if (coctel.length === 0) {
    resultado.innerHTML = 'Está ya vacía, tonto, que eres tonto';
  } else {
    coctel = [];
    resultado.innerHTML = '';
  }
}

// La imagen y el nombre del cóctel la pillamos de TheCocktailDB.com
function fetchCocktailDbAPI(nomCoctel) {
  agitarCoctel();

  setTimeout(() => {
    const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nomCoctel}`;
    fetch(API_URL)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        resultado.innerHTML = `
          <div> 
            <img src=${data.drinks[0].strDrinkThumb} class='imgCoctel' width='110'>
            <figure>${data.drinks[0].strDrink}</figure>
          </div>
        `;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, tiempoDeAgitado);
}

// Mensaje de alerta si repetimos algún ingrediente
function alertPersonalizado() {
  const popup = document.createElement('div');
  popup.textContent = 'Ya has utilizado ese ingrediente';
  popup.classList.add('msg');

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.display = 'none';
  }, 1000);
}
