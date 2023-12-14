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
