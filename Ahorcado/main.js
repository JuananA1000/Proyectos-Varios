const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');

const figureParts = document.querySelectorAll('.figure-part');
const words = ['casa', 'perro', 'gato', 'ordenador', 'teléfono', 'libro', 'jardín', 'nube', 'sol', 'montaña', 'río'];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let playable =true

const correctLetters=[]
const wrongLetters=[]

