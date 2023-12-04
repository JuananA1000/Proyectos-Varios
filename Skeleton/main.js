const allLoadings = document.querySelectorAll('.loading');
const toggle = document.getElementById('toggle').addEventListener('click', toggleDarkMode);

// IDEA: Añadir tooltip al boton de darkmode
// PENDIENTE: Ensanchar espacio de foto, porque se corta

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  const isDarkModeEnabled = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkmode', isDarkModeEnabled);
}

window.addEventListener('load', () => {
  const isDarkModeEnabled = localStorage.getItem('darkmode');

  if (isDarkModeEnabled === 'true') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  setInterval(() => {
    allLoadings.forEach((item) => {
      item.classList.remove('loading');
    });
  }, 2000);
});
