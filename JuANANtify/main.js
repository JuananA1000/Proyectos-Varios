const image = document.getElementById('cover');
const title = document.getElementById('music-title');
const artist = document.getElementById('music-artist');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const playerProgress = document.getElementById('player-progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('play');
const background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
  {
    path: 'assets/MS.mp3',
    displayName: 'Cursed',
    cover: 'assets/MS.jpg',
    artist: 'Mad Sin',
  },
  {
    path: 'assets/NT.mp3',
    displayName: 'Fire & Ice',
    cover: 'assets/NT.jpg',
    artist: 'Nova Twins',
  },
  {
    path: 'assets/VT.mp3',
    displayName: 'Knock Me Out',
    cover: 'assets/VT.jpg',
    artist: 'Vintage Trouble',
  },
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playMusic() {
  isPlaying = true;

  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'pause');

  music.play();
}

function pauseMusic() {
  isPlaying = false;

  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'play');

  music.pause();
}

function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  image.src = song.cover;
  background.src = song.cover;
}

function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
}

function updateProgressBar() {
  const { duration, currentTime } = music;
  const progressPercent = currentTime / duration + 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
  durationEl.textContent = `${duration / 60}:${formatTime(duration / 60)}`;
  currentTimeEl.textContent = `${currentTime / 60}:${formatTime(duration / 60)}`;
}
