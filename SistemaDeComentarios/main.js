const comments = [];

const inputContainer = document.createElement('div');
const input = document.createElement('input');
const commentsContainer = document.querySelector('#comments-container');

input.classList.add('input');
input.addEventListener('keydown', (e) => {
  handleEnter(e, null);
});

commentsContainer.appendChild(inputContainer);
inputContainer.appendChild(input);

// Current es el comentario actual
function handleEnter(e, current) {
  if (e.key === 'Enter' && e.target.value !== '') {
    const newComment = {
      texto: e.target.value,
      likes: 0,
      respuestas: [],
    };
    if (current === null) {
      comments.unshift(newComment);
    } else {
      current.respuestas.unshift(newComment);
    }

    e.target.value = '';
    commentsContainer.innerHTML = '';
    commentsContainer.appendChild(inputContainer);
    renderComments(comments, commentsContainer);
  }
}

/*
  En esta funcion trabajaremos la RECURSIVIDAD, para añadir comentarios en
  distintos niveles del array.
*/
function renderComments(arr, parent) {
  arr.forEach((element) => {
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment-container');

    const responsesContainer = document.createElement('div');
    commentContainer.classList.add('responses-container');

    const replyButton = document.createElement('button');
    replyButton.textContent = '\uD83D\uDCAC';

    const textContainer = document.createElement('div');
    textContainer.textContent = element.texto;

    const actionsContainer = document.createElement('div');

    const likeButton = document.createElement('button');
    likeButton.textContent = `${element.likes > 0 ? `\uD83D\uDC4D ${element.likes}` : '\uD83D\uDC4D'}`;

    replyButton.addEventListener('click', (e) => {
      const newInput = inputContainer.cloneNode(true);
      newInput.value = '';
      newInput.focus();
      newInput.addEventListener('keydown', (e) => {
        handleEnter(e, element);
      });
      commentContainer.insertBefore(newInput, responsesContainer);
    });

    likeButton.addEventListener('click', (e) => {
      element.likes++;
      likeButton.textContent = `${element.likes > 0 ? `\uD83D\uDC4D ${element.likes}` : '\uD83D\uDC4D'}`;
    });

    // Agregamos los APPEND
    commentContainer.appendChild(textContainer);
    commentContainer.appendChild(actionsContainer);
    actionsContainer.appendChild(replyButton);
    actionsContainer.appendChild(likeButton);
    commentContainer.appendChild(responsesContainer);
    /*
      Toda función con recursividad se terminará llamando a si misma, lo
      que provocaría un BUCLE INFINITO. Para que este bucle termine,
      construiremos un CONDICIONAL que, en este caso, se detendrá cuando
      NO HAYA RESPUESTAS.
    */
    if (element.respuestas.length > 0) {
      renderComments(element.respuestas, responsesContainer);
    }
    parent.appendChild(commentContainer);
  });
}
