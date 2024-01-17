const tasks = []; // Aquí guardaremos cada una de las tareas

let time = 0; // Cuenta regresiva
let timer = null;
let timerBreak = null; // Los 5 minutos de descanso
let current = null; // Tarea actual

const taskName = document.querySelector('#time #taskName');
const bAdd = document.querySelector('#bAdd');
const itTask = document.querySelector('#itTask');
const form = document.querySelector('#form');

renderTasks();
renderTime();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (itTask.value !== '') {
    createTask(itTask.value); // Una vez creada la tarea...
    itTask.value = ''; // ...vaciamos el input.
    renderTasks();
  }
});

function createTask(value) {
  const newTask = {
    id: (Math.random() * 100).toString(36).slice(3),
    title: value,
    completed: false,
  };

  tasks.unshift(newTask); // unshift agrega elementos AL PRINCIPIO del array
}

function renderTasks() {
  const html = tasks.map((task) => {
    return `    
            <div class="task">
                <div class="completed">${
                  task.completed
                    ? `<span class="done">Hecho</span>`
                    : `<button class="start-button" data-id="${task.id}">Comenzar</button>`
                }
                </div>
                <div class="title">${task.title}</div>
            </div>
        `;
  });

  const taskContainer = document.querySelector('#tasks');
  taskContainer.innerHTML = html.join('');

  const startButtons = document.querySelectorAll('.task .start-button');

  startButtons.forEach((startButton) => {
    startButton.addEventListener('click', () => {
      if (!timer) {
        // Si timer NO es null
        startButtonHandler(startButton.getAttribute('data-id'));
        startButton.textContent = 'En progreso...';
      }
    });
  });
}

function startButtonHandler(id) {
  time = 5;
  current = id;
  const taskId = tasks.findIndex((task) => task.id === id);

  taskName.textContent = tasks[taskId].title;
  renderTime();
  timer = setInterval(() => {
    timerHandler(id);
  }, 1000); // En milisegundos, es decir 1000ms --> 1seg
}

function timerHandler(id) {
  time--;
  renderTime();

  // Si el cronómetro llega a cero...
  if (time === 0) {
    markCompleted(id); // ...cambiamos el estado de las tareas a completed.
    clearInterval(timer);

    renderTasks();
    startBreak();
  }
}

function markCompleted(id) {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  tasks[taskIndex].completed = true;
}

function startBreak() {
  time = 3;
  taskName.textContent = 'Descanso';
  renderTime();
  timerBreak = setInterval(() => {
    timerBreakHandler();
  }, 1000);
}

function timerBreakHandler() {
  time--;
  renderTime();

  if (time === 0) {
    clearInterval(timerBreak);
    current = null;
    timerBreak = null;
    taskName.textContent = '';
    renderTasks();
  }
}

function renderTime() {
  const timeDiv = document.querySelector('#time #value');
  const min = parseInt(time / 60);
  const sec = parseInt(time % 60);

  /*
        Si los minutos o segundos son menores que 10, que ponga '0',
        si no, que no ponga nada
    */
  timeDiv.textContent = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}
