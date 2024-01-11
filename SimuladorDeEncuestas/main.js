const preguntas = document.querySelectorAll('.pregunta');
const anterior = document.getElementById('btn-anterior');
const siguiente = document.getElementById('btn-siguiente');

siguiente.addEventListener('click', sigPregunta);

function sigPregunta() {
  for (let i = 0; i < preguntas.length; i++) {
    if (!preguntas[i].classList.contains('oculto')) {
      preguntas[i].classList.add('oculto');
      let siguiente = (i + 1) % preguntas.length;
      preguntas[siguiente].classList.remove('oculto');
      break;
    }
  }
  console.log('Siguiente');
}

function cuentaAtras() {
  preguntas.forEach((divPregunta) => {
    let cuenta = 5;
    const divCuentaAtras = document.createElement('div');
    divCuentaAtras.textContent = '05';

    divPregunta.appendChild(divCuentaAtras);

    const intervalo = setInterval(() => {
      divCuentaAtras.textContent = cuenta.toString().padStart(2, '0');

      if (cuenta === 0) {
        clearInterval(intervalo);
        sigPregunta();
      }

      cuenta--;
    }, 1000);
  });
}

setTimeout(() => cuentaAtras(preguntas), 1000);
