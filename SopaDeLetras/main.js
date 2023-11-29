const palabras = ['marzo', 'gazpacho', 'calvario'];
const sopaLetras = document.getElementById('sopaLetras');
const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

// Pasamos las palabras del array a mayusculas 
function aMayusculas(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i].toLowerCase()) {
      array[i] = array[i].toUpperCase();
    }
  }
  return array;
}

// Función para generar una letra aleatoria
function letraAleatoria() {
  return letras.charAt(Math.floor(Math.random() * letras.length));
}

// Función para inicializar la matriz de sopa de letras
function inicializarSopaLetras() {
  const matriz = [];
  for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
      matriz[i][j] = letraAleatoria();
    }
  }
  return matriz;
}

// Función para insertar una palabra en una dirección específica
function insertarPalabra(matriz, palabra, direccion, fila, columna) {
  const len = palabra.length;
  let esPosibleInsertar = true;

  if (
    (direccion === 'horizontal' && columna + len > 10) ||
    (direccion === 'vertical' && fila + len > 10) ||
    (direccion === 'diagonal' && (fila + len > 10 || columna + len > 10))
  ) {
    esPosibleInsertar = false;
  }

  if (esPosibleInsertar) {
    for (let i = 0; i < len; i++) {
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
  aMayusculas(palabras);
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
    }
  }
}

// Generar la sopa de letras
insertarTodasPalabras();
