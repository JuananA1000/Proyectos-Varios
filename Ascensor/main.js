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
  let altura = plantaActual + 150; // Altura final a la que quieres que suba el div
  display.innerHTML = plantaActual;
  if (plantaActual < plantaDestino) {
    // plantaActual += altura;
    // ascensor.animate([{ bottom: plantaActual + 'px' }, { bottom: plantaActual + altura + 'px' }], {
    //   duration: 1000,
    //   iterations: 1,
    //   easing: 'ease-out',
    //   fill: 'forwards',
    // });

    console.log('El ascensor está en el piso ', plantaActual);
    console.log(' el ascensor tiene que subir');
  } else if (plantaActual > plantaDestino) {
    console.log('El ascensor está en el piso ', plantaActual);
    console.log(' el ascensor tiene que bajar');
  } else {
    console.log('El ascensor está en el piso ', plantaActual);
    console.log(' el ascensor SE QUEDA');
  }
  
  plantaActual = plantaDestino;
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
