const ratingContainer = document.querySelector('.rating');
let currentValue = 0;
const limit = 5; // Número de estrellas

html = Array.from(Array(limit)).map((_, i) => {
  return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

ratingContainer.innerHTML = html.join('');

document.querySelectorAll('.item').forEach((item) => {
  // Mouseover equivale al hover de css
  item.addEventListener('mouseover', (e) => {
    const pos = item.getAttribute('data-pos');

    if (currentValue === parseInt(pos + 1)) {
      return;
    }
    // Si contiene la clase item-full, se la quitamos...
    document.querySelectorAll('.item').forEach((it) => {
      if (it.classList.contains('item-full')) {
        it.classList.remove('item-full');
      }
    });

    for (let i = 0; i <= pos; i++) {
      const square = document.querySelector(`.item-${i}`);

      // ...si no la contiene, se la ponemos
      if (!square.classList.contains('item-full')) {
        square.classList.add('item-full');
      }
    }
    currentValue = parseInt(pos + 1); // Esto es para que la posición empiece en 1 y no en 0
  });

  item.addEventListener('click', (e) => {
    const pos = item.getAttribute('data-pos');
    currentValue = parseInt(pos) + 1;
    console.log(currentValue);
  });
});
