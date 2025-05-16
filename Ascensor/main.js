// Aquí tu js
const ascensor = document.getElementById('ascensor');
const botonesPlanta = document.querySelectorAll('.btnPlanta');
const passwordModal = document.getElementById('passwordModal');
const passwordInput = document.getElementById('passwordInput');
const submitPasswordBtn = document.getElementById('submitPassword');
const modalCloseBtn = document.querySelector('.close');
const display = document.querySelector('.display');

let plantaActual = 0;

botonesPlanta.forEach((button) => {
  button.addEventListener('click', () => {
    const planta = parseInt(button.getAttribute('data-floor'));
    if (planta === -1) {
      passwordModal.style.display = 'block';
    } else {
      moverAscensor(planta);
    }
  });
});

submitPasswordBtn.addEventListener('click', () => {
  const password = passwordInput.value;
  if (password === '1234') {
    passwordModal.style.display = 'none';
    moverAscensor(-1);
  } else {
    alert('Incorrect Password!');
  }
});

modalCloseBtn.addEventListener('click', () => {
  passwordModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == passwordModal) {
    passwordModal.style.display = 'none';
  }
});

function moverAscensor(plantaDestino) {
  const altura = 150; // Altura de cada piso
  const diferencia = plantaDestino - plantaActual;
  const pasos = Math.abs(diferencia);
  const velocidad = 1000 / pasos; // milisegundos por piso

  let tiempo = 0;

  display.innerHTML = plantaActual;

  const id = setInterval(() => {
    if (diferencia > 0) {
      plantaActual++;
    } else {
      plantaActual--;
    }

    ascensor.style.bottom = `${plantaActual * altura}px`;

    display.innerHTML = plantaActual;

    tiempo += velocidad;

    if (tiempo >= 1000) {
      clearInterval(id);
    }
  }, velocidad);
}

function irAPlanta(planta) {
  if (planta === -1) {
    ascensor.style.bottom = '0px';
  }

  if (planta === 0) {
    ascensor.style.bottom = '150px';
  }

  if (planta === 1) {
    ascensor.style.bottom = '300px';
  }

  if (planta === 2) {
    ascensor.style.bottom = '450px';
  }

  if (planta === 3) {
    ascensor.style.bottom = '600px';
  }

  ascensor.innerText = `Planta ${planta}`;
  plantaActual = planta;
}
