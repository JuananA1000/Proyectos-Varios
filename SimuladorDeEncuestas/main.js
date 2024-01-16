const preguntas = document.querySelectorAll('.pregunta');
const anterior = document.getElementById('btn-anterior');
const playBtn = document.getElementById('btn-play');

playBtn.addEventListener('click', play);

function sigPregunta() {
  for (let i = 0; i < preguntas.length; i++) {
    if (!preguntas[i].classList.contains('oculto')) {
      preguntas[i].classList.add('oculto');
      let siguiente = (i + 1) % preguntas.length;
      preguntas[siguiente].classList.remove('oculto');
      break;
    }
  }
}

function cuentaAtras() {
  let divsCuenta = document.querySelectorAll('.cuenta-atras');

  divsCuenta.forEach((cuenta) => {
    cuenta.innerHTML = '05';

    let cuentaActual = parseInt(cuenta.innerHTML);
    let intervalo = setInterval(function () {
      cuentaActual--;
      cuenta.innerHTML = (cuentaActual < 10 ? '0' : '') + cuentaActual;

      if (cuentaActual === 0) {
        clearInterval(intervalo);
    
      }
    }, 1000);
  });
}

function play() {
  playBtn.style.display = 'none';

  cuentaAtras();
}
