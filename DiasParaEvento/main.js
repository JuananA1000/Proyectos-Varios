const nombreEvento = document.querySelector('#nombreEvento');
const fechaEvento = document.querySelector('#fechaEvento');
const botonAdd = document.querySelector('#botonAdd');
const botonDel = document.querySelector('#botonAdd');
const contenedorTareas = document.querySelector('#contenedorTareas');

botonAdd.addEventListener('click', addEvento);

function addEvento(e) {
  e.preventDefault();
  
  let tarea = document.createElement('div');
 
  tarea.innerHTML = `
    <div class="tarea">
      <div class="fecha">${fechaEvento.value} día(s)</div>
      <div class="nombre">${nombreEvento.value}</div>
      
      <div class="acciones">
        <button id="eliminar">Eliminar</button>
      </div>
    </div>
  `;

  contenedorTareas.appendChild(tarea);
  fechaEvento.value = '';
  nombreEvento.value = '';

  const botonEliminar = tarea.querySelector('#eliminar');

  botonEliminar.addEventListener('click', eliminarTarea);

  function eliminarTarea() {
    contenedorTareas.removeChild(tarea);
  }
}
