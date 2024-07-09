const numeros = [1, 2, 3].map((num) => num * 2);
const comida = ['🥦', '🥩', '🍅'].filter((carne) => carne !== '🥩');
const animales = ['🐍', '🐎', '🐓'].find((gallina) => gallina === '🐓');
const posAnimales = ['🐍', '🐎', '🐓'].findIndex((gallina) => gallina === '🐓');
const dinero = ['', '', ''].fill('💶');
const ok = ['✔', '❌', '✔', '✔'].every((comprobar) => comprobar === '✔');
const error = ['✔', '❌', '✔', '✔'].some((comprobar) => comprobar === '❌');

const result = document.querySelectorAll('.result');

result[0].innerHTML = numeros;
result[1].innerHTML = comida;
result[2].innerHTML = animales;
result[3].innerHTML = posAnimales;
result[4].innerHTML = dinero;
result[5].innerHTML = ok;
result[6].innerHTML = error;
