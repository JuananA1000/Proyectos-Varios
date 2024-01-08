// Aquí tu js
const menosBtn = document.getElementById('menos-btn');
const masBtn = document.getElementById('mas-btn');

masBtn.addEventListener('click', aumentarBpm);
menosBtn.addEventListener('click', disminuirBpm);

function aumentarBpm() {
  let velocidad = document.querySelector('.velocidad');
  let textoVelocidad = velocidad.innerHTML;
  let numero = parseInt(textoVelocidad);

  if (!isNaN(numero)) {
    let nuevoNumero = numero + 1;
    velocidad.innerText = nuevoNumero + ' bpm';
  }
}

function disminuirBpm() {
  let velocidad = document.querySelector('.velocidad');
  let textoVelocidad = velocidad.innerHTML;
  let numero = parseInt(textoVelocidad);

  if (!isNaN(numero)) {
    let nuevoNumero = numero - 1;
    velocidad.innerText = nuevoNumero + ' bpm';
  }
}
