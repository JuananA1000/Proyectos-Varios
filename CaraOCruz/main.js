let tails = 0;
let heads = 0;
let coin = document.querySelector('.coin');
let flipBtn = document.querySelector('#flip-button');
let resetBtn = document.querySelector('#reset-button');

flipBtn.addEventListener('click', () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = 'none';

  if (i) {
    setTimeout(function () {
      coin.style.animation = 'spin-heads 3s forwards';
    }, 100);
    heads++;
  } else {
    setTimeout(function () {
      coin.style.animation = 'spin-tails 3s forwards';
    }, 100);
    tails++;
  }
  setTimeout(updateStats, 3000);
  disableButton();
});

resetBtn.addEventListener('click', () => {
  coin.style.animation = 'none';
  tails = 0;
  heads = 0;
  updateStats();
});

function updateStats() {
  document.querySelector('#heads-count').textContent = `Caras: ${heads}`;
  document.querySelector('#tails-count').textContent = `Cruces: ${tails}`;
}

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(() => (flipBtn.disabled = false), 3000);
}
