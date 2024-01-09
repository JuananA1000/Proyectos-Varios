const menosBtn = document.getElementById('menos-btn');
const masBtn = document.getElementById('mas-btn');
const playBtn = document.getElementById('play-btn');
const clicks = document.querySelectorAll('.click');
const audio = document.querySelector('audio');

let clickActual = 0;

const intervaloEnMilisegundos = 60 * 1000 / 50; 
// const intervalID = setInterval(play, intervaloEnMilisegundos);

// setTimeout(() => {
//   clearInterval(intervalID); 
// }, 5 * 60 * 1000); 

masBtn.addEventListener('click', aumentarBpm);
menosBtn.addEventListener('click', disminuirBpm);
playBtn.addEventListener('click', play);

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

function play() {
  let clickAnterior = clickActual - 1;

  if (clickActual < clicks.length) {
    if (clickActual > 0) {
      clicks[clickAnterior].classList.remove('clicked');
    }
    clicks[clickActual].classList.add('clicked');
    audio.play();
    clickActual++;
  } else {
    clicks[clickAnterior].classList.remove('clicked');
    clickActual = 0;
    clicks[clickActual].classList.add('clicked');
    audio.play();
    clickActual++;
  }
}