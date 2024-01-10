const playBtn = document.querySelector('.play-btn');
const stopBtn = document.querySelector('.stop-btn');
const frase = document.querySelector('.frase');
const API_URL = 'https://api.chucknorris.io/jokes/random';
let intervalId; // Variable para almacenar el ID del intervalo

playBtn.addEventListener('click', () => (intervalId = setInterval(obtenerFrase, 1000)));
stopBtn.addEventListener('click', stop); // Detener el intervalo usando clearInterval y pasando el identificador

function obtenerFrase() {
  fetch(API_URL)
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error('Error en la solicitud');
      }
      return respuesta.json();
    })
    .then((data) => {
      console.log('DATA: ', data.value);
      frase.innerHTML = `${data.value}`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function stop() {
  frase.innerHTML = 'Frase';
  clearInterval(intervalId)
}
