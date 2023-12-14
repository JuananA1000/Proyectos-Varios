const playBoard = document.querySelector('.play-board');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.high-score');
const controls = document.querySelector('.constrols i');

let gameOver = false;
let foodX;
let foodY;
let snakeX;
let snakeY;
let velocityX = 0;
let velocityY = 0;
let snakeBody = [];
let setIntervalID;
let score = 0;
let pause = false;

// Obtener puntuación del LocalStorage
let highScore = localStorage.getItem('high-score') || 0;
highScoreElement.innerText = `Puntuación: ${highScore}`;

// Posición aleatoria de la comida
function updateFoodPosition() {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
}

// Game Over
function handleGameOver() {
  clearInterval(setIntervalID);
  alert('Game Over. Pulsa OK para reiniciar');
  document.location.reload();
}

// Cambiar velocidad
function changeDirection(event) {
  if (event.key === 'ArrowUp' && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (event.key === 'ArrowDown' && velocityY != -1) {
    velocityX = 0;
    velocityY = -1;
  } else if (event.key === 'ArrowRight' && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  } else if (event.key === 'ArrowLeft' && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  }
}

// Cambiar dirección
controls.forEach((button) => button.addEventListener('click', () => changeDirection({ key: button.dataset.key })));
