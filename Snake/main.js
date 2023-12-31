const playBoard = document.querySelector('.play-board');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.high-score');

let gameOver = false;
let foodX;
let foodY;
let snakeX = 5;
let snakeY = 5;
let velocityX = 0;
let velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

let isPaused = false;

// Eventos de teclado
const keyboardEvents = (event) => {
  // Mover serpiente arriba, abajo, izda, dcha
  if (event.key === 'w' || (event.key === 'W' && velocityY != 1)) {
    velocityX = 0;
    velocityY = -1;
  } else if (event.key === 's' || (event.key === 'S' && velocityY != -1)) {
    velocityX = 0;
    velocityY = 1;
  } else if (event.key === 'a' || (event.key === 'A' && velocityX != 1)) {
    velocityX = -1;
    velocityY = 0;
  } else if (event.key === 'd' || (event.key === 'D' && velocityX != -1)) {
    velocityX = 1;
    velocityY = 0;
  } else if (event.key === 'p' || event.key === 'P') {
    // Pausar juego
    isPaused = !isPaused;

    if (isPaused) {
      clearInterval(setIntervalId); // Pausar el juego al limpiar el intervalo
      showCenteredAlert('En Pausa');
      parpadear('vuelve a pulsar P para reanudar');
    } else {
      const msg = document.querySelectorAll('.msg');
      if (msg) {
        for (let i = 0; i < msg.length; i++) {
          msg[i].remove();
        }
        setIntervalId = setInterval(initGame, 100); // Reanudar el juego
      }
    }
  } else if (event.key === 'r' || event.key === 'R') {
    // Reiniciar juego
    const msg = document.querySelector('.msg');
    if (msg) {
      document.body.removeChild(msg);
      document.location.reload();
    }
  }
};

// Obtener puntuación del LocalStorage
let highScore = localStorage.getItem('high-score') || 0;
highScoreElement.innerText = `Puntuación: ${highScore}`;

// Posición aleatoria de la comida
const updateFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

const handleGameOver = () => {
  clearInterval(setIntervalId);

  showCenteredAlert('¡¡GAME OVER!!');
  parpadear('pulsa R para reiniciar');
  isPaused = true;
};

function showCenteredAlert(msg) {
  const popup = document.createElement('div');
  popup.textContent = msg;
  popup.classList.add('msg');

  document.body.appendChild(popup);
}

function parpadear(msg) {
  const elemento = document.createElement('p');
  elemento.textContent = msg;
  elemento.classList.add('msg');
  elemento.style.marginTop = '30px';

  document.body.appendChild(elemento);
  let visible = true;

  setInterval(function () {
    if (visible) {
      elemento.textContent = '';
    } else {
      elemento.textContent = msg;
    }
    visible = !visible;
  }, 500);
}

// Función InitGame
const initGame = () => {
  if (gameOver) return handleGameOver();

  let html = `<div class='food' style='grid-area: ${foodY} / ${foodX}'></div>`;

  // Cuando la serpiente come...
  if (snakeX === foodX && snakeY === foodY) {
    updateFoodPosition();
    snakeBody.push([foodY, foodX]);
    score++;
    highScore = score >= highScore ? score : highScore;

    localStorage.setItem('high-score', highScore);
    scoreElement.innerText = `Puntuación: ${score}`;
    highScoreElement.innerText = `High Score: ${highScore}`;
  }

  // Actualizar cabeza de la serpiente
  snakeX += velocityX;
  snakeY += velocityY;

  // Desplazamos una posiciónm hacia delante los elementos en el cuerpo de la serpiente
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  snakeBody[0] = [snakeX, snakeY];

  // Comprobar si la serpiente está fuera del tablero
  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    return (gameOver = true);
  }

  // Cuando la serpiente coma, crecerá, añadiendole un cuadrado más
  for (let i = 0; i < snakeBody.length; i++) {
    html += `<div class='head' style='grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}'></div>`;

    // Comprobar si la serpiente choca con su propio cuerpo
    if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
      gameOver = true;
    }
  }
  playBoard.innerHTML = html;
};

function main() {
  updateFoodPosition();
  setIntervalId = setInterval(initGame, 100);

  document.addEventListener('keyup', keyboardEvents);
}

main();
