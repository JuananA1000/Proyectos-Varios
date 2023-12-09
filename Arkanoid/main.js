let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');

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

// Pausar/reanudar el juego
let isPaused = false;

// Array de ladrillos
let bricks = [];

for (let i = 0; i < columnCount; i++) {
  bricks[i] = [];
  for (let j = 0; j < rowCount; j++) {
    bricks[i][j] = { x: 0, y: 0, status: 1 };
  }
}

// Eventos del ratón
document.addEventListener('mousemove', mouseMoveHandler, false);

function mouseMoveHandler(e) {
  let relativeX = e.clientX - canvas.offsetLeft;

  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

// Dibujar barra
function drawPaddle() {
  ctx.beginPath();
  ctx.roundRect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight, 30);
  ctx.fillStyle = '#33333';
  ctx.fill();
  ctx.closePath();
}

// Dibujar bola
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#33333';
  ctx.fill();
  ctx.closePath();
}

// Dibujar ladrillos
function drawBricks() {
  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < rowCount; j++) {
      if (bricks[i][j].status === 1) {
        let brickX = i * (brickWidth + brickPadding) + leftOffset;
        let brickY = j * (brickHeight + brickPadding) + topOffset;
        bricks[i][j].x = brickX;
        bricks[i][j].y = brickY;

        ctx.beginPath();
        ctx.roundRect(brickX, brickY, brickWidth, brickHeight, 30);
        ctx.fillStyle = '#33333';
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

// Puntuación
function trackScore() {
  ctx.font = 'bold 16px sans-serif';
  ctx.fillStyle = '#333333';

  document.fonts.load('10px "Press Start 2P"').then(() => {
    // Establecer la fuente en el contexto
    ctx.font = '10px "Press Start 2P"';

    // Dibujar el texto con la nueva fuente
    ctx.fillText('Puntos: ' + score, 8, 24);
  });
}

function showCenteredAlert(msg) {
  // Crear un div para la ventana emergente
  const popup = document.createElement('div');
  popup.textContent = msg;
  popup.style.position = 'fixed';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.backgroundColor = 'white';
  popup.style.padding = '20px';
  popup.style.border = '1px solid #ccc';

  // Agregar el div al cuerpo del documento
  document.body.appendChild(popup);
}

// Comprobar si la bola golpea a los ladrillos
function hitDetection() {
  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < rowCount; j++) {
      if (bricks[i][j].status === 1) {
        if (
          x > bricks[i][j].x &&
          x < bricks[i][j].x + brickWidth &&
          y > bricks[i][j].y &&
          y < bricks[i][j].y + brickHeight
        ) {
          dy = -dy;
          bricks[i][j].status = 0;
          score++;

          if (score === rowCount * columnCount) {
            alert('¡¡VICTORIA!!');
            document.location.reload(); // Creo que esto vale para refrescar el navegador
          }
        }
      }
    }
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'p' || event.key === 'P') {
    isPaused = !isPaused;
    if (isPaused) {
      showCenteredAlert('Pausa, vuelve a pulsar P para reanudar');
    } else {
      // Eliminar la ventana emergente de pausa
      const popup = document.querySelector('div');
      if (popup) {
        document.body.removeChild(popup);
      }
    }
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'r' || event.key === 'R') {
    const popup = document.querySelector('div');
    if (popup) {
      document.body.removeChild(popup);
      document.location.reload();
    }
  }
});

function main() {
  if (!isPaused) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trackScore();
    drawBricks();
    drawBall();
    drawPaddle();
    hitDetection();

    // Detectar paredespp laterales
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }

    // Detectar pared superior
    if (y + dy < ballRadius) {
      dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
      // Detectar golpe con la barra
      if (x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
      } else {
        showCenteredAlert('¡¡GAME OVER!! pulsa R para reiniciar');
        isPaused = true;
      }
    }

    // Detectar pared inferior
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
      dy = -dy;
    }

    // Mover bola
    x += dx;
    y += dy;
  }
}

setInterval(main, 10);
