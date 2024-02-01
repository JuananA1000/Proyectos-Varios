const nombreEvento = document.querySelector('#nombreEvento');
const fechaEvento = document.querySelector('#fechaEvento');
const botonAdd = document.querySelector('#botonAdd');
const botonDel = document.querySelector('#botonAdd');
const contenedorTareas = document.querySelector('#contenedorTareas');

botonAdd.addEventListener('click', addEvento);

function addEvento(e) {
  e.preventDefault();

  let tarea = document.createElement('div');

  let fechaHoy = new Date();
  let difFechas = new Date(fechaEvento.value) - fechaHoy.getTime();
  let diasParaEvento = Math.ceil(difFechas / (1000 * 3600 * 24));

  if (nombreEvento.value !== '') {
    tarea.innerHTML = `
      <div class="tarea">
        <div class="fecha" title=${fechaEvento.value}>${diasParaEvento} día(s)</div>
        <div class="nombre">${nombreEvento.value}</div>
        
        <div class="acciones">
          <button id="eliminar">Eliminar</button>
        </div>
      </div>
    `;
  } else {
    alert('Introduce título de evento');
  }

  contenedorTareas.appendChild(tarea);
  nombreEvento.value = '';
  fechaEvento.value = '';

  const botonEliminar = tarea.querySelector('#eliminar');

  botonEliminar.addEventListener('click', eliminarTarea);

  function eliminarTarea() {
    contenedorTareas.removeChild(tarea);
  }
}
