let tags = [];

const inputTagContainer = document.querySelector('#input-tag');
const tagsContainer = document.createElement('div');
const inputTag = document.createElement('span');

inputTag.ariaRoleDescription = 'textbox';
inputTag.contentEditable = 'true';
inputTag.classList.add('input');
inputTag.focus();

inputTagContainer.classList.add('input-tag-container');
inputTagContainer.appendChild(tagsContainer);

tagsContainer.classList.add('tag-container');
tagsContainer.appendChild(inputTag);

inputTagContainer.addEventListener('click', (e) => {
  if (e.target.id === 'input-tag' || e.target.classList.contains('tag-container')) {
    inputTag.focus();
  }
});

inputTag.addEventListener('keydown', (e) => {
  // Si pulsamos enter y el input no está vacío, creamos una etiqueta
  if (e.key === 'Enter' && inputTag.textContent !== '') {
    e.preventDefault();

    if (!existTag(inputTag.textContent)) {
      tags.push(inputTag.textContent);
      inputTag.textContent = '';
      renderTags();
    }
  } else if (
    // Lista de keys: https://www.toptal.com/developers/keycode/table-of-all-keycodes
    e.key === 'Backspace' &&
    inputTag.textContent === '' &&
    tags.length > 0
  ) {
    tags.pop();
    renderTags();
  }
});

function renderTags() {
  tagsContainer.innerHTML = '';
  const html = tags.map((tag) => {
    const tagElement = document.createElement('div');
    const tagButton = document.createElement('button');

    tagElement.classList.add('tag-item');
    tagButton.textContent = '\u2716'; // Código java, js, JSON en emojipedia
    tagButton.addEventListener('click', (e) => {
      removeTag(tag);
    });
    tagElement.appendChild(document.createTextNode(tag));
    tagElement.appendChild(tagButton);
    return tagElement;
  });

  html.forEach((element) => {
    tagsContainer.appendChild(element);
  });
  tagsContainer.appendChild(inputTag);
  inputTag.focus();
}

// Esta función impedirá que se creen tags repetidos
function existTag(value) {
  return tags.includes(value);
}

function removeTag(value) {
  tags = tags.filter((tag) => tag !== value);
  renderTags();
}
