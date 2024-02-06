const click = document.getElementById('click');
const dobleClick = document.getElementById('doble-click');
const mouseDown = document.getElementById('mouse-down');
const mouseUp = document.getElementById('mouse-up');
const mouseMove = document.getElementById('mouse-move');
const mouseOver = document.getElementById('mouse-over');
const mouseOut = document.getElementById('mouse-out');
const mouseEnter = document.getElementById('mouse-enter');
const mouseLeave = document.getElementById('mouse-leave');
const contextMenu = document.getElementById('context-menu');

click.addEventListener('click', clickEvent);
dobleClick.addEventListener('dblclick', doubleClickEvent);
mouseDown.addEventListener('mousedown', mouseDownEvent);
mouseUp.addEventListener('mouseup', mouseUpEvent);
mouseMove.addEventListener('mousemove', mouseMoveEvent);
mouseOver.addEventListener('mouseover', mouseOverEvent);
mouseOut.addEventListener('mouseout', mouseOutEvent);
mouseEnter.addEventListener('mouseenter', mouseEnterEvent);
mouseLeave.addEventListener('mouseleave', mouseLeaveEvent);
contextMenu.addEventListener('contextmenu', contextMenuEvent);

function clickEvent() {
  click.innerText = 'Botón CLICKEADO';
  setTimeout(() => (click.innerText = 'Click'), 1000);
}

function doubleClickEvent() {
  dobleClick.innerText = 'Botón DOBLECLICKEADO';
  setTimeout(() => (dobleClick.innerText = 'Doble Click'), 1000);
}

function mouseDownEvent() {
  mouseDown.innerText = 'Botón con MOUSE DOWN';
  setTimeout(() => (mouseDown.innerText = 'Mouse Down'), 1000);
}

function mouseUpEvent() {
  mouseUp.innerText = 'Botón con MOUSE UP';
  setTimeout(() => (mouseUp.innerText = 'Mouse Up'), 1000);
}

function mouseMoveEvent() {
  mouseMove.innerText = 'Botón con MOUSE MOVE';
  setTimeout(() => (mouseMove.innerText = 'Mouse Move'), 1000);
}

function mouseOverEvent() {
  mouseOver.innerText = 'Botón con MOUSE OVER';
  setTimeout(() => (mouseOver.innerText = 'Mouse Over'), 1000);
}

function mouseOutEvent() {
  mouseOut.innerText = 'Botón con MOUSE OUT';
  setTimeout(() => (mouseOut.innerText = 'Mouse Out'), 1000);
}

function mouseEnterEvent() {
  mouseEnter.innerText = 'Botón con MOUSE ENTER';
  setTimeout(() => (mouseEnter.innerText = 'Mouse Enter'), 1000);
}

function mouseLeaveEvent() {
  mouseLeave.innerText = 'Botón con MOUSE LEAVE';
  setTimeout(() => (mouseLeave.innerText = 'Mouse Leave'), 1000);
}

function contextMenuEvent() {
  contextMenu.innerText = 'Botón con CONTEXT MENU';
  setTimeout(() => (contextMenu.innerText = 'Context Menu'), 1000);
}
