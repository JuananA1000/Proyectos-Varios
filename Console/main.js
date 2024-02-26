const limpiar = document.querySelector('#limpiar');
const recargar = document.querySelector('#recargar');

const styles = `
  background-color: #884ced;
  color:#fff;
  padding: 5px 10px;
`;
const users = [
  { nombre: 'Juanan', edad: 31, frase: 'Ay! dios mío qué calvario' },
  { nombre: 'Tamara', edad: 29, frase: 'Coño, la dieta' },
  { nombre: 'Mario', edad: 25, frase: 'Una polla con orejas' },
  { nombre: 'Jorge Parlita', edad: 23, frase: 'Ay! dios mío qué calvario' },
];

const log = document.querySelector('#log');
const group = document.querySelector('#group');
const table = document.querySelector('#table');
const assert = document.querySelector('#assert');
const dir = document.querySelector('#dir');
const count = document.querySelector('#count');
const time = document.querySelector('#time');

limpiar.addEventListener('click', () => console.clear());
recargar.addEventListener('click', () => document.location.reload());

log.addEventListener('click', consoleLog);
group.addEventListener('click', consoleGroup);
table.addEventListener('click', consoleTable);
assert.addEventListener('click', consoleAssert);
dir.addEventListener('click', consoleDir);
count.addEventListener('click', consoleCount);
time.addEventListener('click', consoleTime);

function consoleLog() {
  console.log('%c¡Holi Consoli!', styles);
  setTimeout(() => console.clear(), 1000);
}

function consoleGroup() {
  console.group('Información a mostrar');
  console.log('User Agent: ', navigator.userAgent);
  console.log('Idioma: ', navigator.language);
  console.groupEnd();
  setTimeout(() => console.clear(), 1000);
}

function consoleTable() {
  console.table(users);
  setTimeout(() => console.clear(), 1000);
}

function consoleAssert() {
  console.assert(5 < 10, '5 es menor que 10'); // No ocurre nada
  console.assert(5 < 0, '5 es menor que 0'); // Muestra el mensaje indicado con un aviso de error
  setTimeout(() => console.clear(), 1000);
}

function consoleDir() {
  console.dir(document.body);
  setTimeout(() => console.clear(), 1000);
}

function consoleCount() {
  for (let i = 0; i < 5; i++) {
    console.count('test-loop');
  }

  setTimeout(() => console.clear(), 1000);
}

function consoleTime() {
  console.time('test1');
  for (let i = 0; i < 10; i++) {
    /* Operación costosa */
    console.timeLog('test1', i);
  }
  console.timeEnd('test1');
  setTimeout(() => console.clear(), 1000);
}
