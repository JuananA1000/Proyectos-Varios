const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');

const figureParts = document.querySelectorAll('.figure-part');
const words = ['casa', 'perro', 'gato', 'ordenador', 'teléfono', 'libro', 'jardín', 'nube', 'sol', 'montaña', 'río'];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let playable = true;

const correctLetters = [];
const wrongLetters = [];

// Mostrar palabra oculta
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(
        (letra) => `
          <span class="letter">
            ${correctLetters.includes(letra) ? letra : ''}
          </span>
        `
      )
      .join('')}
  `;

  const innerWord = wordEl.innerText.replace(/[ \n]/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerText = '¡¡VICTORIA!!';
    finalMessageRevealWord.innerText = '';
    popup.style.display = 'flex';

    playable = false;
  }
}

// Actualizar letras erróneas
function updateWrongLettersEl() {
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Letras incorrectas</p>' : ''}
    ${wrongLetters.map((letra) => `${letra}`)}
  `;

  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });

  // Comprobar cuando el jugador pierda
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerHTML = 'Has perdido';
    finalMessageRevealWord.innerHTML = `...la palabra era: ${selectedWord}`;
    popup.style.display = 'flex';

    playable = false;
  }
}

// Mostrar notificación
function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

// Detectar letra pulsada
window.addEventListener('keydown', (event) => {
  if (playable) {
    /* 
      PENDIENTE: keyCode está deprecado, obsoleto. debemos cambiarlo, ahora es event.key, pero hay que averiguar cómo
      construir la condición
    */
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      const letra = event.key.toLowerCase();

      if (selectedWord.includes(letra)) {
        if (!correctLetters.includes(letra)) {
          correctLetters.push(letra);
          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letra)) {
          wrongLetters.push(letra);
          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
  }
});

// Reiniciar juego
playAgainBtn.addEventListener('click', () => {
  playable = true;

  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();
  updateWrongLettersEl();

  popup.style.display = 'none';
});

displayWord();
