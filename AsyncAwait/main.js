const contenido = document.querySelector('.contenido');
const loader = document.querySelector('.loader');
const loaderTimeOut = document.querySelector('.loaderTimeOut');
const loaderCircle = document.querySelector('.loaderCircle');
const button = document.querySelector('button').addEventListener('click', () => document.location.reload());

const getDataEl = document.getElementById('getDataEl');
const getDataTimeoutEl = document.getElementById('getDataTimeoutEl');
const getDataPromiseEl = document.getElementById('getDataPromiseEl');
const getDasyncFetchingEl = document.getElementById('asyncFetchingEl');

const data = [
  {
    id: 1,
    frase: 'Ay dios mío, qué calvario',
  },
  {
    id: 2,
    frase: 'Suegra, nuera y yerno, antesala del infierno',
  },
  {
    id: 3,
    frase: 'MUTANTE, HIJO DE PUTA',
  },
];

/*---------------------------------------------------------------------------------------------------------------------|
 *                                               DECLARACIÓN DE FUNCIONES                                              |
 ---------------------------------------------------------------------------------------------------------------------*/

// Retornar datos de manera SÍNCRONA
function getData() {
  data.forEach((item) => {
    const parrafo = document.createElement('p');
    parrafo.textContent = `ID ${item.id}: ${item.frase}`;
    getDataEl.appendChild(parrafo);
  });

  console.log('DATA: ', data);
}

// Retornar datos con un pequeño retardo de 2 segundos
function getDataTimeout() {
  loaderTimeOut.style.display = 'block';
  setTimeout(() => {
    loaderTimeOut.style.display = 'none';
    data.forEach((item) => {
      const parrafo = document.createElement('p');
      parrafo.textContent = `ID ${item.id}: ${item.frase}`;
      getDataTimeoutEl.appendChild(parrafo);
    });

    console.log('DATA CON TIMEOUT: ', data);
    return data;
  }, 2000);
}

// Retornar datos con PROMESAS
function getDataPromise() {
  return new Promise((resolve, reject) => {
    loader.style.display = 'block';
    // Una buena práctica es comprobar, en primer lugar, si hay datos...
    if (data.length === 0) {
      reject(new Error('No hay datos'));
    }
    // ...después, continuamos con nuestro código
    setTimeout(() => {
      loader.style.display = 'none';
      data.forEach((item) => {
        const parrafo = document.createElement('p');
        parrafo.textContent = `ID ${item.id}: ${item.frase}`;
        getDataPromiseEl.appendChild(parrafo);
      });
      resolve(data);
    }, 3000);
  });
}

// Retornar datos de manera ASÍNCRONA
async function asyncFetching() {
  const frases = await getDataPromise();
  loaderCircle.style.display = 'none';
 
  for (const frase of frases) {
    const parrafo = document.createElement('p');
    parrafo.textContent = `ID ${frase.id}: ${frase.frase}`;
    getDasyncFetchingEl.appendChild(parrafo);
  }

  console.log('FETCHING FRASES: ', frases);
}

/*---------------------------------------------------------------------------------------------------------------------|
 *                                               LLAMADAS A LAS FUNCIONES                                              |
 ---------------------------------------------------------------------------------------------------------------------*/

getData();
/* 
  Esto no se ejecuta, porque, estamos haciendo una llamada DIRECTA a la función, pero nuestra función tiene un retardo
  de 2 segundos. Es como querer comer ANTES de cocinar.
*/
console.log(getDataTimeout());

getDataPromise()
  // Ese parámetro 'data', se suele llamar 'response', pero para practicar, nos da igual
  .then((data) => console.log('DATA CON PROMESA: ', data))
  // Este error aparecerá si el array de datos está vacío
  .catch((error) => console.log('ERROR: ', error.message));

asyncFetching();
