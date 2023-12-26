/* 
  IDEA: El cóctel resultado es un array vacío al que se le añaden ingredientes, si existe, aparece la foto del cóctel, 
  si no, aparece otra cosa, ya veré cual
*/

const ingredientes = document.querySelectorAll('img');
const btnShake = document.querySelector('.btnShake');
let coctel = [];

btnShake.addEventListener('click', () => {
  // Imprimir coctel en pantalla
  console.log('áaa');
});

ingredientes.forEach((ingrediente) => {
  ingrediente.addEventListener('click', (event) => {
    coctel.push(ingrediente);

    console.log('Array: ', coctel);

    const titulo = event.target.getAttribute('title');
    console.log(titulo);
  });
});
