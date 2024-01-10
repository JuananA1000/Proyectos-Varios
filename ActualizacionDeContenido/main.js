const playBtn = document.querySelector('.play-btn');
const stopBtn = document.querySelector('.stop-btn');
const frase = document.querySelector('.frase');
const API_URL = 'https://api.chucknorris.io/jokes/random';
let intervalId; // Variable para almacenar el ID del intervalo

playBtn.addEventListener('click', () => (intervalId = setInterval(obtenerFrase, 1000)));
stopBtn.addEventListener('click', stop);

function obtenerFrase() {
  fetch(API_URL)
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error('Error en la solicitud');
      }
      return respuesta.json();
    })
    .then((data) => {
      traducirTexto(data.value, 'en', 'es').then((traduccion) => {
        if (traduccion) {
          frase.innerHTML = `${traduccion}`;
        } else {
          frase.innerHTML = 'No se pudo traducir la frase.';
        }
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function stop() {
  frase.innerHTML = 'Frase';
  clearInterval(intervalId); // Detener el intervalo usando clearInterval y pasando el identificador
}

async function traducirTexto(texto, idiomaOrigen, idiomaDestino) {
  const TRANSLATE_URL = `https://api.mymemory.translated.net/get?q=${texto}&langpair=${idiomaOrigen}|${idiomaDestino}`;

  try {
    const respuesta = await fetch(TRANSLATE_URL);
    const data = await respuesta.json();

    if (data && data.responseStatus === 200) {
      return data.matches[0].translation;
    } else {
      throw new Error('Error en la traducción');
    }
  } catch (error) {
    console.error('Hubo un error al traducir:', error);
    return null;
  }
}
