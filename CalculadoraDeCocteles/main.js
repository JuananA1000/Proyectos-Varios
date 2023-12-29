const ingredientes = document.querySelectorAll('img');
const btnShake = document.querySelector('.btnShake');
const btnEmpty = document.querySelector('.btnEmpty');
let resultado = document.querySelector('.resultado');
let coctel = [];
let tiempoDeAgitado = 3000;

ingredientes.forEach((img) => img.addEventListener('click', añadirIngrediente));
btnShake.addEventListener('click', crearCoctel);
btnEmpty.addEventListener('click', vaciarCoctelera);

// Añadir ingredientes a la receta
function añadirIngrediente(event) {
  const ingrediente = event.target.getAttribute('title');

  if (ingrediente && !coctel.includes(ingrediente)) {
    coctel.push(ingrediente);
    resultado.innerHTML = coctel.join(' + ');
  } else {
    alertPersonalizado();
  }
}

// La imagen del cóctel la pillamos de TheCocktailDB.com
function fetchCocktailDbAPI(res) {
  agitarCoctel();

  setTimeout(() => {
    const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${res}`;
    fetch(API_URL)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        resultado.innerHTML = `
          <div> 
            <img src=${data.drinks[0].strDrinkThumb} class='imgCoctel' width='100'>
            <p>${res}</p>
          </div>
        `;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, tiempoDeAgitado);
}

function agitarCoctel() {
  const pantalla = document.getElementsByTagName('body')[0];
  let tiempoInicio = Date.now();

  resultado.innerHTML = 'Agitando...';

  function vibrar() {
    const tiempoActual = Date.now(); // Obtener el tiempo actual en cada iteración
    const tiempoTranscurrido = tiempoActual - tiempoInicio;

    // Detener la vibración después de 3 segundos (3000 milisegundos)
    if (tiempoTranscurrido > tiempoDeAgitado) {
      clearInterval(vibracion); // Detener la vibración
      pantalla.style.transform = 'none'; // Establecer la transformación a su estado inicial
    } else {
      // Generar valores aleatorios para la vibración en los ejes X e Y
      const randomX = Math.random() * 10 - 7;
      const randomY = Math.random() * 6 - 3;

      pantalla.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
  }

  const vibracion = setInterval(vibrar, 100); // Ejecutar la función vibrar cada 100 milisegundos
}

// Añadir ingredientes al cóctel, asignada al botón 'shake'
function crearCoctel() {
  resultado.innerHTML = '';

  if (coctel.length > 0) {
    if (
      coctel.includes('Lima') &&
      coctel.includes('Agua con Gas') &&
      coctel.includes('Ron') &&
      coctel.includes('Azúcar')
    ) {
      // agitarCoctel();
      fetchCocktailDbAPI('mojito');
    } else if (
      coctel.includes('Azúcar') &&
      coctel.includes('Agua con Gas') &&
      coctel.includes('Angostura') &&
      coctel.includes('Wiski')
    ) {
      // agitarCoctel();
      fetchCocktailDbAPI('old fashioned');
    } else if (coctel.includes('Lima') && coctel.includes('Azúcar') && coctel.includes('Cachaza')) {
      // agitarCoctel();
      fetchCocktailDbAPI('caipirinha');
    } else {
      resultado.innerHTML = 'Esa guarrada se la va a beber tu padre. Vacía la coctelera';
    }
  } else {
    resultado.innerHTML = 'La coctelera está vacía. Échale cosas';
  }
}

function vaciarCoctelera() {
  if (coctel.length === 0) {
    resultado.innerHTML = 'Está ya vacía, tonto, que eres tonto';
  } else {
    coctel = [];
    resultado.innerHTML = '';
  }
}

function alertPersonalizado() {
  const popup = document.createElement('div');
  popup.textContent = 'Ya has utilizado ese ingrediente';
  popup.classList.add('msg');

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.display = 'none';
  }, 1000);
}
