let canvas = document.getElementById('game');
let ctx = canvas.getContext('2D');

let ballRadius = 9;
let x = canvas.width / (Math.floor(Math.random() * Math.random() * 10) + 3);
let y = canvas.height - 40;
let dx = 2;
let dy = -2;

let paddleHeight = 12;
let paddleWidth = 72;

// Posición de inicio de la barra
let paddleX = (canvas.width - paddleWidth) / 2;

// Ladrillos
let rowCount = 5;
let columnCount = 9;
let brickWidth = 54;
let brickHeight = 18;
let brickPadding = 12;
let topOffset = 40;
let leftOffset = 33;

let score = 0;

// Array de ladrillos
let bricks = [];

for (let i = 0; i < columnCount; i++) {
  bricks[i] = [];
  for (let j = 0; j < rowCount; j++) {
    bricks[i][j] = { x: 0, y: 0, status: 1 };
  }
}
