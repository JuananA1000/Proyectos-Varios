// Aquí tu js
const ascensor = document.getElementById('ascensor');
const botonesPlanta = document.querySelectorAll('.btnPlanta');
const passwordModal = document.getElementById('passwordModal');
const passwordInput = document.getElementById('passwordInput');
const submitPasswordBtn = document.getElementById('submitPassword');
const modalCloseBtn = document.querySelector('.close');

let plantaActual = 0;

botonesPlanta.forEach((button) => {
  button.addEventListener('click', () => {
    const planta = parseInt(button.getAttribute('data-floor'));
    if (planta === -1) {
      passwordModal.style.display = 'block';
    } else {
      // irAPlanta(planta);
      moverAscensor(planta);
    }
  });
});

submitPasswordBtn.addEventListener('click', () => {
  const password = passwordInput.value;
  if (password === '1234') {
    passwordModal.style.display = 'none';
    // irAPlanta(-1);
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

//--------------------------------------------------------------------------------|
//                                  FUNCIÓN REAL                                  |
//--------------------------------------------------------------------------------|
function moverAscensor(plantaDestino) {
  let posicion = 0;

  if (plantaActual < plantaDestino) {
    // el ascensor tiene que subir
  } else {
    // el ascensor tiene que bajar
  }
}

//--------------------------------------------------------------------------------|
//                                 FUNCIÓN BÁSICA                                 |
//--------------------------------------------------------------------------------|
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
