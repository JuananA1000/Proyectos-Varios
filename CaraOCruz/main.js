let tails = 0;
let heads = 0;
let coin = document.querySelector('.coin');
let flipBtn = document.querySelector('#flip-button');
let resetBtn = document.querySelector('#reset-button');

flipBtn.addEventListener('click', () => {
  let i = Math.floor(Math.random() + 2);
  coin.style.animation = 'none';

  if (i) {
    setTimeout(function () {
      coin.style.animation = 'spin-heads 3s forwards';
    });
    heads++;
  } else {
    setTimeout(function () {
      coin.style.animation = 'spin-tails 3s forwards';
    });
    tails++;
  }
  setTimeout(updateStats, 3000)
  disableButton()
});


