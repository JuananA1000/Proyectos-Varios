// Aquí tu js
const ascensor = document.getElementById('ascensor');
const botonesPlanta = document.querySelectorAll('.btnPlanta');
const passwordModal = document.getElementById('passwordModal');
const passwordInput = document.getElementById('passwordInput');
const submitPasswordBtn = document.getElementById('submitPassword');
const modalCloseBtn = document.querySelector('.close');

let plantaActual = 0;

function irAPlanta(planta) {
  if (planta === 0) {
    ascensor.style.bottom = '10px';
  }

  if (planta === 1) {
    ascensor.style.bottom = '160px';
  }

  if (planta === 2) {
    ascensor.style.bottom = '310px';
  }

  if (planta === 3) {
    ascensor.style.bottom = '460px';
  }

  ascensor.innerText = `Planta ${planta}`;
  plantaActual = planta;
}

botonesPlanta.forEach((button) => {
  button.addEventListener('click', () => {
    const planta = parseInt(button.getAttribute('data-floor'));
    if (planta === -1) {
      passwordModal.style.display = 'block';
    } else {
      irAPlanta(planta);
    }
  });
});

submitPasswordBtn.addEventListener('click', () => {
  const password = passwordInput.value;
  if (password === '1234') {
    passwordModal.style.display = 'none';
    irAPlanta(-1);
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