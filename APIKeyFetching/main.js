const form = document.querySelector('#form');
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const results = document.querySelector('#results');

const OPTIONS = {
  method: 'GET',
  params: { format: 'json' },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com',
  },
};

const fetchIPInfo = (ip) => {
  return fetch(`https://ip-geo-location.p.rapidapi.com/ip/${ip}`, OPTIONS)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { value } = input;

  if (!value) return;

  submit.setAttribute('disabled', '');
  submit.setAttribute('aria-busy', 'true'); // Utilidad de PicoCSS: le añade un loader al boton al hacer submit

  const ipInfo = await fetchIPInfo(value);

  if (ipInfo) {
    results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  submit.removeAttribute('disabled');
  submit.removeAttribute('aria-busy');
});
