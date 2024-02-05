const palabras = ['marzo', 'gazpacho', 'calvario'];
const sopaLetras = document.querySelector('.sopa-letras');
const resultado = document.querySelector('.resultado');

const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Pasamos las palabras del array a mayusculas
function aMayusculas(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i].toLowerCase()) {
      array[i] = array[i].toUpperCase();
    }
  }
  return array;
}

// Función para inicializar la matriz de sopa de letras
function inicializarSopaLetras() {
  const matriz = [];

  for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
      // Generamos letras aleatorias
      matriz[i][j] = letras.charAt(Math.floor(Math.random() * letras.length));
      // PENDIENTE: Haz que las palabras del array tengan letras similares, estas se crucen unicamente por esas letras.
    }
  }
  return matriz;
}

// Función para insertar una palabra en una dirección específica
function insertarPalabra(matriz, palabra, direccion, fila, columna) {
  let esPosibleInsertar = true;

  if (
    (direccion === 'horizontal' && columna + palabra.length > 10) ||
    (direccion === 'vertical' && fila + palabra.length > 10) ||
    (direccion === 'diagonal' && (fila + palabra.length > 10 || columna + palabra.length > 10))
  ) {
    esPosibleInsertar = false;
  }

  if (esPosibleInsertar) {
    for (let i = 0; i < palabra.length; i++) {
      if (direccion === 'horizontal') {
        matriz[fila][columna + i] = palabra.charAt(i);
      } else if (direccion === 'vertical') {
        matriz[fila + i][columna] = palabra.charAt(i);
      } else if (direccion === 'diagonal') {
        matriz[fila + i][columna + i] = palabra.charAt(i);
      }
    }
    return true;
  }
  return false;
}

// Función para insertar todas las palabras en la sopa de letras
function insertarTodasPalabras() {
  // aMayusculas(palabras);
  let matrizSopaLetras = inicializarSopaLetras();

  palabras.forEach((palabra) => {
    let palabraInsertada = false;
    while (!palabraInsertada) {
      const direccion = ['horizontal', 'vertical', 'diagonal'][Math.floor(Math.random() * 3)];
      const fila = Math.floor(Math.random() * 10);
      const columna = Math.floor(Math.random() * 10);

      palabraInsertada = insertarPalabra(matrizSopaLetras, palabra, direccion, fila, columna);
    }
  });

  // Mostrar la sopa de letras en el HTML
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const celda = document.createElement('div');
      celda.classList.add('celda');
      celda.textContent = matrizSopaLetras[i][j];
      sopaLetras.appendChild(celda);

      celda.addEventListener('click', () => {
      
        
        console.log('click');

      });
    }
  }
}

// Generar la sopa de letras
insertarTodasPalabras();
