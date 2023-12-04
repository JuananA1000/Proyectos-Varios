const allLoadings = document.querySelectorAll('.loading');
const toggle = document.getElementById('toggle');

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  const isDarkModeEnabled = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkmode', isDarkModeEnabled);
}
