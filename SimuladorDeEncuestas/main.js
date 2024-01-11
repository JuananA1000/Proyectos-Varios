const preguntas = document.querySelectorAll('.pregunta');
const cuentaAtras = document.querySelectorAll('.cuenta-atras');
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
